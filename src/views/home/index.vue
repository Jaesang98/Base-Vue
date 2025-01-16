<template>
    <button @click="fetchServer()">서버통신</button>
    <div>피니아 테스트값: {{ userStore.userInfo }}</div>
    <br />
    <button @click="pageOpen()">라우터 이동테스트</button>
    <button @click="pageOpen2()">라우터 이동테스트2</button>
    <button @click="pageOpen3()">라우터 이동테스트3</button>
    <br /><br />
    <button @click="$i18n.locale = 'ko'">한국어로 바꾸기</button>
    <h2>다국어 처리 (선택된 다국어: {{ $i18n.locale }})</h2>
    <h3>=> {{ $t('Test') }}</h3>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useUserInfoStore } from '@/stores/userInfo';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserInfoStore();
const data = ref<string>('');

const pageOpen = () => {
    router.push({
        name: 'parameter',
        params: { data: '1' }
    });
};

const pageOpen2 = () => {
    router.push({
        path: '/state',
        state: { data: '2' }
    });
};

const pageOpen3 = () => {
    router.push({
        path: '/query',
        query: { data: '3' }
    });
};

const fetchServer = () => {
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'Article title',
            body: 'Article body content',
            userId: 1
        }
    })
        .then(response => {
            data.value = response.data.userId;
            userStore.setUser({ userId: data.value, userName: '남재상', adminYn: 'Y' });
        })
        .catch(error => {
            console.error(error);
        });
};
</script>

<style scoped></style>
