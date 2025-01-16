<template>
    <div>라우터이동 테스트</div>
    <div>받은데이터 : {{ router.params.data }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const router = useRoute();
</script>

<style scoped></style>
