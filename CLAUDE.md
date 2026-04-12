# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pyunkang Yul 제품 프로모션용 브릿지 페이지 (Amazon 할인 링크 랜딩 페이지). 단일 페이지 React 앱으로, 제품 이미지와 15% 할인 배지, Amazon 쇼핑 CTA 버튼을 포함한 모바일 우선 레이아웃.

## Tech Stack

- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인 사용, `tailwind.config` 파일 없이 CSS-first 설정)
- pnpm 패키지 매니저

## Commands

- `pnpm dev` — 개발 서버 실행
- `pnpm build` — TypeScript 타입 체크 후 프로덕션 빌드 (`tsc -b && vite build`)
- `pnpm lint` — ESLint 실행
- `pnpm preview` — 빌드된 결과물 프리뷰

## Architecture

단일 페이지 앱으로, 라우팅 없음.

- `src/main.tsx` — React 엔트리포인트 (`StrictMode` + `createRoot`)
- `src/app.tsx` — 전체 페이지 레이아웃 (단일 컴포넌트)
- `src/components/` — SVG 컴포넌트 (예: `amazon-logo.tsx`)
- `src/index.css` — Tailwind CSS v4 임포트 (`@import "tailwindcss"`)
- `public/product.png` — 제품 이미지 에셋

## Conventions

- 스타일링은 Tailwind CSS 유틸리티 클래스를 인라인으로 사용 (별도 CSS 파일 불필요)
- 컴포넌트 파일명은 kebab-case (예: `amazon-logo.tsx`)
- 디자인 참고 이미지: `design.jpg` (루트 디렉토리)
