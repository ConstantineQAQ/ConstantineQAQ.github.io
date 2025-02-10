<template>
  <div v-if="card">
    <h1>{{ card.title }}</h1>
    <p>{{ card.year }}-{{ card.month }}-{{ card.day }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'

const card = ref({
    title: '测试标题',
    year: '2025',
    month: '02',
    day: '10'
})
const route = useRoute()

onMounted(async () => {
  const { id } = route.params
  const res = await axios.get(`http://your-backend/cards/${id}`)
  card.value = res.data
})
</script>