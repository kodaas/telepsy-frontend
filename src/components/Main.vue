<template>
    <div class="min-h-screen">
        
        <router-view />
        <Offer />
        <Process />
        <Doctors />

    </div>
</template>

<script setup>
    import Header from './header.vue'
    import Offer from './offer.vue'
    import Process from './process.vue'
    import Doctors from './doctors.vue'
</script>

<style lang="scss" scoped>

</style>