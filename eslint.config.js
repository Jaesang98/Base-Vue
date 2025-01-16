export default defineConfig({
    // ESLint의 기본 규칙, TypeScript 권장 규칙, Vue 3 권장 규칙을 확장
    extends: [
        'eslint:recommended', // 기본적인 자바스크립트 린트 규칙
        'plugin:@typescript-eslint/recommended', // TypeScript 린트 규칙
        'plugin:vue/vue3-recommended' // Vue 3 관련 권장 린트 규칙
    ],
    // ESLint가 사용할 파서 설정
    parser: 'vue-eslint-parser', // Vue 파일을 분석하기 위한 파서
    parserOptions: {
        parser: '@typescript-eslint/parser', // Vue 파일 내부의 스크립트를 분석할 때 TypeScript 파서를 사용
        extraFileExtensions: ['.vue'] // 추가로 '.vue' 파일 확장자를 지원
    },
    rules: {
        // Vue 태그의 셀프 클로징 스타일 설정
        'vue/html-self-closing': [
            'error', // 위반 시 에러로 표시
            {
                html: {
                    void: 'always', // void 태그는 항상 셀프 클로징
                    normal: 'never', // 일반 HTML 태그는 셀프 클로징 금지
                    component: 'always' // Vue 컴포넌트는 항상 셀프 클로징
                },
                svg: 'always', // SVG 태그는 항상 셀프 클로징
                math: 'always' // MathML 태그는 항상 셀프 클로징
            }
        ],
        // 사용되지 않는 변수 경고 설정 (TypeScript 검사와 중복될 수 있음)
        '@typescript-eslint/no-unused-vars': [
            'warn', // 경고로 표시
            {
                argsIgnorePattern: '^_', // _로 시작하는 함수 매개변수는 무시
                varsIgnorePattern: '^_' // _로 시작하는 변수는 무시
            }
        ]
    }
});
