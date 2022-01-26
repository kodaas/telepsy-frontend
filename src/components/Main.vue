<template>
    <div class="min-h-screen">
        
        <router-view />
        <Offer />

    </div>
</template>

<script setup>
    import Header from './header.vue'
    import Offer from './offer.vue'
</script>

<style lang="scss" scoped>

</style>