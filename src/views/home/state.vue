<template>
    <div>라우터이동 테스트</div>
    <div>받은데이터 : {{ data }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const data = ref(history.state.data);
</script>

<style scoped></style>
