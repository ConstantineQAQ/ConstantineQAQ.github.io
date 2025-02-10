<template>
    <body>
        <div class="top">
        
        </div>
        <div class="home_words">
            <p :class="{ 'fade-in-down': animate }">欢迎光临👏</p>
            <p :class="{ 'fade-in-down': animate }" style="animation-delay: 0.5s;">
                <Typing :strings="['王亚宁的个人博客网站', 'Java后端开发工程师','爱好前端😊']" class="home_typing" />
            </p>
            <strong :class="{ 'fade-in-down': animate }" style="animation-delay: 0.5s;">本平台仍在不断优化中...</strong>
            <div class="content_cards">
                <div class="content_card" v-for="(card, index) in cards" :key="index">
                    <Card :card="card" />
                </div>
            </div>
        </div>
    </body>
</template>

<script setup>
import Typing from '@/components/Typing.vue'
import Card from '@/components/Card.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios'

const cards = ref([
{
        id:1,
        title: '毕业纪念',
        img: new URL('../assets/images/Me.png', import.meta.url).href,
        year: '2024',
        month: 'june',
        day: '20'
    }
]
);
const animate = ref(false);

onMounted(async () => {
    try {
        const res = await axios.get('http://your-backend/cards')
        cards.value = res.data
        animate.value = true
    } catch (e) {
        console.error(e)
    }
});

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var top = document.querySelector('.top')
    if (scrollTop >= 100) {
      top.style.position = 'fixed'
      top.style.top = '0'
    } else {
      top.style.position = 'static'
    }
}
</script>

<style scoped>

.top {
    width: 100%;
    height: 100px;
    background-color: #cbd7b4;
}
.home_words {
    height: 200vh;
    justify-content: center;
    background: #f1f6ec;
    width: 100%;
    font-size: 2rem;
    color: #333;
    text-align: center;

    .home_typing {
        font-size: 4rem;
        color: #666;
    }
}
.content_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch; /* 确保每一行的Card高度一致 */
    padding: 20px;
    background: #f1f6ec;
    .content_card {
        width: calc(25% - 40px); /* 每行四个Card，减去padding */
        padding: 20px;
        box-sizing: border-box; /* 包括padding在内的宽度计算 */
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