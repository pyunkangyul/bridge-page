# Pyunkang Yul - Bridge Page

Pyunkang Yul Essence Toner 제품의 Amazon 할인 프로모션용 브릿지 페이지(랜딩 페이지).

## 계정 정보

> GitHub, Netlify 모두 아래 Google 계정으로 로그인할 수 있습니다.

| 항목 | 값 |
|------|-----|
| Google 계정 (이메일) | `여기에 이메일 입력` |
| Google 비밀번호 | `여기에 비밀번호 입력` |

- **GitHub**: https://github.com 접속 → "Sign in with Google"
- **Netlify**: https://app.netlify.com 접속 → "Log in with Google"

## 프로젝트 개요

- **목적**: 광고(Facebook/Instagram 등)에서 유입된 사용자를 Amazon 상품 페이지로 연결하는 중간 랜딩 페이지
- **주요 기능**: 제품 소개 + 15% 할인 배지 + Amazon CTA 버튼
- **배포 URL**: `https://shop.pyunkangyul.com/`
- **디자인 참고**: 루트의 `design.jpg` 파일

## 기술 스택

| 구분 | 기술 | 버전 |
|------|------|------|
| UI 프레임워크 | React | 19 |
| 언어 | TypeScript | 6 |
| 빌드 도구 | Vite | 8 |
| 스타일링 | Tailwind CSS v4 | 4.2 |
| 패키지 매니저 | pnpm | - |

> Tailwind CSS v4는 CSS-first 설정 방식을 사용합니다. `tailwind.config` 파일 없이 `@tailwindcss/vite` 플러그인으로 동작합니다.

## 프로젝트 구조

```
bridge-page/
├── index.html              # HTML 엔트리 (Meta Pixel, 메타태그, 웹폰트)
├── src/
│   ├── main.tsx            # React 엔트리포인트
│   ├── app.tsx             # 전체 페이지 레이아웃 + CtaButton 컴포넌트
│   ├── index.css           # Tailwind CSS 임포트 + 전역 스타일
│   ├── global.d.ts         # window.fbq 타입 선언
│   └── components/
│       └── amazon-logo.tsx # Amazon SVG 로고 컴포넌트
├── public/
│   ├── product.webp        # 제품 이미지 (메인)
│   ├── product.png         # 제품 이미지 (원본)
│   ├── logo.png            # Pyunkang Yul 브랜드 로고
│   ├── favicon.svg         # 파비콘
│   ├── robots.txt          # SEO 크롤러 설정
│   ├── sitemap.xml         # 사이트맵
│   └── ...                 # 기타 파비콘/매니페스트 파일
├── design.jpg              # 디자인 시안
├── CLAUDE.md               # Claude Code AI 도구 가이드
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 실행 방법

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드 (타입 체크 포함)
pnpm build

# 빌드 결과물 미리보기
pnpm preview

# 린트 실행
pnpm lint
```

## 핵심 동작 방식

### Amazon 링크 동적 설정

`app.tsx`에서 URL 쿼리 파라미터를 파싱하여 Amazon 링크를 동적으로 결정합니다.

```
https://shop.pyunkangyul.com/?link=https://www.amazon.com/dp/XXXXXXXXXX
```

- 쿼리 파라미터 중 `amazon.com`이 포함된 값을 자동 감지하여 CTA 링크로 사용
- 파라미터 key 이름은 무관 (value에 `amazon.com`이 포함되면 됨)
- 매칭되는 파라미터가 없으면 기본 상품 링크(Essence Toner)로 fallback

### 플로팅 CTA 버튼

화면 크기에 따라 CTA 버튼의 위치가 자동으로 전환됩니다.

- **콘텐츠 + CTA가 뷰포트에 모두 들어가는 경우**: 콘텐츠 하단에 인라인 배치
- **뷰포트를 초과하는 경우**: 화면 하단에 고정(floating) 배치
- `useLayoutEffect`로 `100dvh` 기반 뷰포트 높이를 측정하여 판단
- 초기 렌더링 시 레이아웃 계산 전까지 `invisible`로 깜빡임 방지

### Facebook Pixel 추적

- **Pixel ID**: `965145019301682`
- `index.html`에서 `PageView` 이벤트 자동 추적
- CTA 버튼 클릭 시 `Lead` 이벤트 발생 (`window.fbq('track', 'Lead')`)
- `noscript` fallback 포함

## 웹폰트

| 폰트 | 용도 |
|------|------|
| Poppins (600, 700, 800) | 제목, 배지 텍스트 |
| Cormorant Garamond (300, 400, 500) | 현재 미사용 (향후 활용 가능) |
| Pretendard | 기본 본문 폰트 |

## SEO / 소셜 미디어

- Open Graph, Twitter Card 메타태그 설정 완료
- `robots.txt`, `sitemap.xml` 포함
- 파비콘 및 `site.webmanifest` 설정 완료

## 주의사항

- **단일 페이지 앱**으로 라우팅이 없습니다. 모든 콘텐츠가 `app.tsx` 하나에 있습니다.
- Tailwind CSS v4의 CSS-first 설정을 사용하므로 `tailwind.config.js` 파일이 없습니다.
- Facebook Pixel ID 변경 시 `index.html`의 `<script>` 태그와 `<noscript>` 태그 모두 수정해야 합니다.
- 제품 이미지는 `public/product.webp`를 사용합니다. 교체 시 동일 파일명으로 덮어쓰면 됩니다.
