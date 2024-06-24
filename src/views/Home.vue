<template>
    <body>
        <div class="home_words">
            <p :class="{ 'fade-in-down': animate }">欢迎光临👏</p>
            <p :class="{ 'fade-in-down': animate }" style="animation-delay: 0.5s;">
                <Typing :strings="['王亚宁的个人博客网站', 'Java后端开发工程师','爱好前端😊']" class="home_typing" />
            </p>
            <strong :class="{ 'fade-in-down': animate }" style="animation-delay: 0.5s;">本平台仍在不断优化中...</strong>
        </div>
    </body>
</template>

<script setup>
import Typing from '@/components/Typing.vue'
import { ref, onMounted } from 'vue';

const animate = ref(false);

onMounted(() => {
    animate.value = true;
});
</script>

<style scoped>
body {
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平+垂直居中 */
    display: flex;
    justify-content: center;
    /* 渐变背景 */
    background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}

.home_words {
    font-size: 2rem;
    color: #333;
    text-align: center;

    .home_typing {
        font-size: 4rem;
        color: #666;
    }
}

.fade-in-down {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInDown 1s ease forwards;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>