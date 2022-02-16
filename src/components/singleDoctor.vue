<template>
    <section class="w-[23em] border-[1px] border-pink rounded-xl overflow-hidden hover:shadow-sm transition-all duration-300 bg-white">
        <img :src="imgUri" class="w-full h-52 mb-0 object-cover" :alt="name">
        <div class="p-5 pt-3">
          <h1 class="font-poppins text-[1.5em] font-bold leading-9 text-red">Dr. {{ name }}</h1>
          <h2 class="mb-3">{{ role }}</h2>
          <h3>{{ about }}</h3>
          <h1></h1>
        </div>

        <!-- <button class="bg-pink-dark m-5 block text-white px-5 py-2 uppercase text-sm rounded-lg" @click="like += 10"> likes: {{ like }}</button> -->
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