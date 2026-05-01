# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pyunkang Yul Essence Toner Amazon 할인 프로모션용 브릿지 랜딩(광고 → 본 페이지 → Amazon). 모바일 우선. 디자인 참고는 루트의 `design.jpg`.

배포: `main` 브랜치에 push 시 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)이 GitHub Pages로 빌드/배포. 도메인은 [public/CNAME](public/CNAME)의 `shop.pyunkangyul.com` (README의 Netlify 언급은 구식 — 실제 배포는 GitHub Pages).

## Tech Stack

- **React Router v7 framework 모드** (`ssr: false` + `prerender`) — 각 라우트가 정적 HTML로 빌드됨
- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, **`tailwind.config` 파일 없음** — CSS-first 설정. `@import "tailwindcss"`만 [app/app.css](app/app.css)에 있음)
- pnpm (CI는 pnpm 10 + Node 22)

## Commands

- `pnpm dev` — `react-router dev` 개발 서버
- `pnpm build` — `react-router build` (prerender 포함, 출력은 `build/client/`)
- `pnpm typecheck` — `react-router typegen && tsc -b` (RR7 자동 생성 타입 + 타입 체크)
- `pnpm lint` — ESLint
- 빌드 산출물 정적 서버로 띄우기: `pnpm dlx serve build/client`

## Routing & Build

[react-router.config.ts](react-router.config.ts)에서 `ssr: false` + `prerender: [...]`로 라우트별 정적 HTML을 생성. 결과:
- `build/client/index.html` — `/` 라우트
- `build/client/<route>/index.html` — 다른 라우트마다 디렉터리 + index.html
- `build/client/__spa-fallback.html` — 동적 라우트용 SPA 폴백

GitHub Pages는 디렉터리 = URL로 매핑하므로 **404 트릭이나 SPA 리라이트 불필요, 모든 응답 HTTP 200 OK**. Facebook/카톡 OG 스크래퍼가 라우트별 정적 HTML을 그대로 읽음 → 라우트별 OG 미리보기 정상.

라우트 추가 시 [app/routes.ts](app/routes.ts)에 라우트 등록 + [react-router.config.ts](react-router.config.ts)의 `prerender` 배열에 경로 추가.

## Non-obvious Behavior

수정 시 깨지기 쉬운 동작들 — 변경 전 반드시 숙지:

### 1. Amazon 링크는 쿼리 파라미터에서 동적으로 추출 (SSR-safe)
[app/routes/home.tsx](app/routes/home.tsx)에서 `useState(DEFAULT) + useEffect`로 처리. prerender 시점에는 `window`가 없으므로 컴포넌트 본문에서 직접 읽으면 빌드가 깨짐. 동작:
- 빌드: HTML에 `DEFAULT_AMAZON_LINK`가 박힘
- 클라이언트 마운트 후: `useEffect`가 `URLSearchParams`를 순회하여 **value에 `amazon.com`이 포함된 첫 파라미터**를 발견하면 `setAmazonLink`로 즉시 교체. key 이름은 무관 (`?link=...`, `?url=...` 모두 동작).

광고 캠페인마다 다른 Amazon URL을 동일 페이지로 보낼 수 있게 한 의도적 설계.

### 2. CTA 버튼은 inline ↔ floating 자동 전환
- `useIsomorphicLayoutEffect`(SSR에서는 `useEffect`로 폴백)에서 `100dvh` 실측값을 임시 div를 만들어 측정 (브라우저별 dvh 편차 회피)
- 콘텐츠 + CTA 합산 높이가 뷰포트에 들어가면 inline, 넘치면 화면 하단 fixed
- 측정 전(`isFloating === null`)에는 컨테이너에 `invisible` 적용해 깜빡임 방지
- CTA 높이 측정용 숨겨진 복제본이 항상 fixed bottom에 렌더링됨 — 삭제하면 floating 분기 계산이 깨짐
- `resize` 리스너로 회전/리사이즈 시 재측정

### 3. Facebook Pixel 추적
- Pixel ID `965145019301682`는 [app/root.tsx](app/root.tsx) 상단의 `FB_PIXEL_ID` 상수에서 한 곳으로 관리 (인라인 스크립트 + `<noscript>` 양쪽에서 참조). 원본 [index.html](index.html)이 두 곳에 하드코딩하던 것을 통합.
- `PageView`는 페이지 로드 시 자동 발화 (`<head>` 인라인 스크립트). React hydration이 인라인 스크립트를 재실행시키지 않으므로 이중 발화 없음.
- `Purchase`는 CTA 클릭 시 [app/routes/home.tsx](app/routes/home.tsx)의 `window.fbq("track", "Purchase")`로 발생.
- `window.fbq` 타입은 [app/global.d.ts](app/global.d.ts)에 선언됨.
- ⚠️ SPA 모드라 라우트 간 클라이언트 네비게이션 시 PageView가 자동 재발화되지 않음. 광고 직접 진입(전체 새로고침)에서는 정상. 다중 라우트에서 라우트 변경마다 PageView를 원하면 라우트 컴포넌트에 `useEffect(() => window.fbq?.("track", "PageView"), [])` 필요.

## Architecture

- [app/root.tsx](app/root.tsx) — HTML shell(Layout), 폰트/파비콘/Pixel 스크립트, `<Meta>`/`<Links>`/`<Outlet>`
- [app/routes.ts](app/routes.ts) — 라우트 등록 (RR7 컨벤션)
- [app/routes/home.tsx](app/routes/home.tsx) — `/` Essence Toner 페이지 (라우트별 `meta` export로 OG 태그 정의)
- [app/components/](app/components/) — Amazon SVG 로고 등 공용 컴포넌트
- [app/app.css](app/app.css) — Tailwind 임포트 + 전역 스타일
- [app/global.d.ts](app/global.d.ts) — `window.fbq` 타입 선언
- [public/](public/) — 정적 자산(`product.webp`, `logo.png`, 파비콘 세트, `CNAME`, `robots.txt`, `sitemap.xml`)

## Conventions

- Tailwind 유틸리티 인라인 사용 (별도 CSS 파일 만들지 말 것)
- 컴포넌트 파일명은 kebab-case (`amazon-logo.tsx`)
- 폰트: 본문은 Pretendard(CDN), 제목/배지는 Poppins(Google Fonts) — 둘 다 [app/root.tsx](app/root.tsx)의 `links` export에서 로드
- 새 라우트의 OG/title/description은 그 라우트 파일의 `meta` export에 정의 (라우트별 정적 메타가 prerender됨)
