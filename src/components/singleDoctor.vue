<template>
    <section>
        <img :src="imgUri" :alt="name">
        <h1>Dr. {{ name }}</h1>
        <h2>{{ role }}</h2>
        <h3>{{ about }}</h3>
        <h3>{{ like }}</h3>

        <button class="bg-pink-dark m-5 text-white px-5 py-2 uppercase text-sm rounded-lg" @click="like += 10"> likes: {{ like }}</button>
    </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  role: String,
  about: String,
  imgUri: String,
  like: Number
})

const count = ref(0)

</script>


<style lang="scss" scoped>

</style>