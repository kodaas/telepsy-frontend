<template>
    <header class="h-screen max-h-[850px] pt-[90px] text-lg">
        <div class="w-full h-full relative">
            
            <img class="w-full h-full object-right-top" src="../assets/image/hero.png" alt="A patient have a virtual meeting with doctor">
            
            <section class="absolute top-0 text-white w-full h-full flex items-center justify-between px-12">
                <div class="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 class="font-poppins font-bold text-lg lg:text-xl">Advanced mental healthcare from the comfort of your home, made just for you!</h1>
                
                    <p class="text-md">Lörem ipsum tiren poponas föde den ikigai huruvida ser. Taktig fakybel. Gigahätor lande på paradoktigt för att trera ötov. Fagt terat. Dire nyr parangar, dad biovis.</p>
                
                    <button class="bg-pink-dark hover:bg-transparent transition-all duration-300 w-48 mb-0 text-white p-2 font-semibold text-md border-2 border-pink-dark rounded-xl">Try it now!</button>
                </div>

                <!-- <div class="flex-1 w-1/2 h-full grid place-items-center">
                    <LocationForm />
                    <router-view />
                </div> -->
            
            </section>

        </div>
    </header>
</template>

<script setup>
import LocationForm from './locationForm.vue'

</script>

<style lang="scss" scoped>

</style>