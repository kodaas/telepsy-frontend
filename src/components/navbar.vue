<template>
    <nav class="fixed w-full max-w-[2500px] z-10 bg-black text-white py-5 px-10 flex flex-nowrap justify-between">
        <div>
            <router-link to="/">
                <img src="../assets/icon/telepsy-logo.svg" alt="Telepsy">
            </router-link>
        </div>
        <ul class="flex items-center font-poppins text-sm space-x-14 font-bold">
            <li class="underline underline-offset-8 decoration-red decoration-4"><router-link to="/">Home</router-link></li>
            <li><a href="#">How it Works</a></li>
            <li><router-link to="/location">Location</router-link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        <button class="bg-white text-black px-4 py-1 text-sm border-2 border-white rounded-xl font-bold self-center">Get Started</button>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>