<template>
    <span ref="text" class="msg"></span>
</template>

<script setup>
/**
 * 打字机效果
 * npm install typeit
 * https://www.typeitjs.com/docs/vanilla/usage/#configuration-basics
 */
import { ref, onMounted } from "vue";
import TypeIt from 'typeit'
const props = defineProps({ strings: { type: Array } })
const text = ref(null)
onMounted(() => {
    new (TypeIt)(text.value, {
        strings: props.strings,
        cursorChar: "<span class='cursorChar'>|<span>",//用于光标的字符。HTML也可以
        speed: 100,
        lifeLike: true,// 使打字速度不规则
        breakLines: false,// 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
        loop: true,//是否循环
        loopDelay: 2000,//循环延迟
        nextStringDelay: 2000,//下一个字符串延迟
        waitUntilVisible: true,//是否等到元素可见时才开始
    }).go()
})
</script>

<style scoped>
.msg {
    color: rgb(88, 88, 88);
    letter-spacing: 2px;
}

.msg :deep(.cursorChar) {
    display: inline-block;
    margin-left: 5px;
    animation: blink 1s infinite;
}
</style>