# Base-Vue

이 프로젝트는 기본적인 Vue 프로젝트 설정입니다.

**수정날짜:**
2024-01-14

# Directory

```
project/
├── .vscode/
│ └── extensions.json # VSCode 확장 설정 파일
├── node_modules/ # 설치된 패키지들
├── public/
│ └── vite.svg # 정적 파일
├── src/
│ ├── assets/
│ │ ├── img/ # 이미지 파일
│ │ │ └── img/ # 예: 로고 또는 아이콘 이미지
│ │ └── styles/
│ │ └── global.css # 전역 스타일 파일
│ ├── components/
│ │ └── HelloWorld.vue # Vue 컴포넌트 예제
│ ├── locales/ # 다국어 지원 파일
│ │ ├── en.json # 영어 번역 파일
│ │ ├── ko.json # 한국어 번역 파일
│ │ └── index.ts # 다국어 초기화 설정
│ ├── router/ # Vue Router 관련 설정
│ │ ├── routes/
│ │ │ ├── ErrorRoutes.ts # 에러 라우트 파일
│ │ │ └── HomeRoutes.ts # 홈 라우트 파일
│ │ └── index.ts # 라우터 초기화 설정
│ ├── shared/ # 공용 유틸리티 및 상수
│ │ ├── constant.ts # 상수 관리
│ │ └── util.ts # 공통 유틸리티 함수
│ ├── stores/ # 상태 관리 (Pinia or Vuex)
│ │ └── userInfo.ts # 사용자 정보 관리 스토어
│ ├── type/ # 타입스크립트 타입 정의
│ │ └── userInfo.ts # 사용자 정보 타입 정의
│ ├── views/ # 뷰 파일 (페이지)
│ │ ├── error/
│ │ │ └── index.vue # 에러 페이지
│ │ └── home/
│ │ ├── index.vue # 홈 페이지
│ │ ├── parameter.vue # 파라미터 페이지
│ │ ├── query.vue # 쿼리 페이지
│ │ └── state.vue # 상태 관리 관련 페이지
│ ├── App.vue # 루트 Vue 컴포넌트
│ ├── main.ts # 진입점 파일
│ ├── style.css # 전역 스타일
│ └── vite-env.d.ts # Vite 환경 변수 타입 정의
├── .gitignore # Git에서 무시할 파일 목록
├── .prettierrc # Prettier 설정 파일
├── eslint.config.js # ESLint 설정 파일
├── index.html # HTML 템플릿 파일
├── package-lock.json # 패키지 잠금 파일
├── package.json # 프로젝트 정보 및 의존성
├── README.md # 프로젝트 설명 파일
├── tsconfig.app.json # 앱용 TypeScript 설정
├── tsconfig.json # TypeScript 기본 설정
├── tsconfig.node.json # Node.js용 TypeScript 설정
└── vite.config.ts # Vite 설정 파일
```

# Create

    1) npm create vite@latest

    2) Project Name 입력
        - base-vue

    3) Package Name 입력
        - base-vue

    4) Framework 선택
        - vue

    5) Variant 선택
        - TypeScript

# Start & Build

    - npm run dev
    - npm run build

# Install npm

    Axios (서버 통신)
        - npm install axios

    Pinia (상태 관리)
        - npm install pinia

    Vue Router (라우터)
        - npm install vue-router

    Vue I18n (다국어)
        - npm install vue-i18n

    eslint, prettier
        - npm i -D eslint prettier eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
