import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';

import messages from '@/locales';

const pinia = createPinia(); //pinia
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(
    createI18n({
        locale: 'en', // 기본 언어 설정
        fallbackLocale: 'en', // 지원하지 않는 언어 요청 시 기본 언어로 대체
        messages: messages, // 다국어 메시지 객체
        silentTranslationWarn: true, // 번역 경고를 비활성화
        silentFallbackWarn: true // 폴백 경고를 비활성화
    })
);
app.mount('#app');
