<template>
    <div class="example-1 common-card" @click="goto" style="cursor: pointer;">
        <div class="wrapper">
            <img :src="card.img" alt="Card image">
            <div class="date">
                <span class="day">{{ card.day }}</span>
                <span class="month">{{ card.month }}</span>
                <span class="year">{{ card.year }}</span>
            </div>
            <div class="data">
                <div class="content">
                    {{ card.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const router = useRouter();
        const goto = () => {
            router.push({ name: 'CardDetail', params: { id: props.card.id } });
        };
        return { goto };
    }
});
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

// Variables
$regal-blue: #034378;
$san-juan: #2d4e68;
$bermuda: #77d7b9;
$white: #fff;
$black: #000;
$open-sans: 'Open Sans', sans-serif;

a {
    text-decoration: none;
}

// 公共样式
.common-card {
    padding: 0px 20px;
    margin: 10px 0;

    .wrapper {
        background-color: $white;
        position: relative;
        overflow: hidden;
        box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
        border-radius: 10px;

        img {
            width: 100%;
            height: auto;
            display: block;
        }
    }

    .data {
        position: absolute;
        bottom: 0;
        width: 100%;

        .content {
            padding: 1em;
            position: relative;
            z-index: 1;
            background-color: rgba($white, 0.8); // 轻微透明背景
            box-shadow: 0 5px 30px 10px rgba($black, 0.3);
        }
    }
}

// 第一个样式
.example-1 {
    .date {
        position: absolute;
        top: 0;
        left: 0;
        background-color: $bermuda;
        color: $white;
        padding: 0.8em;

        span {
            display: block;
            text-align: center;
        }

        .day {
            font-weight: 700;
            font-size: 24px;
            text-shadow: 2px 3px 2px rgba($black, 0.18);
        }

        .month {
            text-transform: uppercase;
        }

        .month,
        .year {
            font-size: 12px;
        }
    }
}
</style>