<template>

    <header class="h-screen max-h-[850px] pt-[90px] text-lg">
        <div class="w-full h-full relative">
            
            <img class="w-full h-full lg:object-fill object-cover object-left lg:object-right-top" src="../assets/image/hero.png" alt="A patient have a virtual meeting with doctor">
            
            <section class="absolute top-0 text-white w-full h-full flex lg:flex-row flex-col lg:items-center lg:justify-between px-12">
                <div class="flex-1 lg:w-1/2 space-y-6">
                    <h1 class="font-poppins mt-8 text-center lg:text-left font-bold text-xl">Find the nearest Mental Health specialist near you we are simply the best.</h1>
                
                    <p class="text-md hidden lg:block text-center lg:text-left ">Lörem ipsum tiren poponas föde den ikigai huruvida ser. Taktig fakybel. Gigahätor lande på paradoktigt för att trera ötov. Fagt terat. Dire nyr parangar, dad biovis.</p>
                
                </div>

                <div class="flex-1 lg:w-1/2 h-full grid lg:place-items-center">
                     <form class="w-full space-y-6 lg:pl-20">
                        <input class="bg-black w-full rounded-xl outline-none focus:border-pink-dark transition-all duration-300 py-3 pl-8 pr-5 border-2 placeholder-white placeholder-opacity-90 text-md opacity-70" placeholder="Enter your State of residence" type="text">

                        <input class="bg-black w-full rounded-xl outline-none focus:border-pink-dark transition-all duration-300 py-3 pl-8 pr-5 border-2 placeholder-white placeholder-opacity-90 text-md opacity-70" placeholder="Enter your LGA of residence" type="text">

                        <button class="bg-pink-dark hover:bg-transparent transition-all duration-300 w-full mb-0 text-white p-2 font-bold text-md border-2 border-pink-dark rounded-xl" @submit.prevent="console.log('Submitted')" type="submit">SEARCH</button>
                    </form>
                </div>
            
            </section>

        </div>
    </header>
</template>

<script setup> 

</script>

<style lang="scss" scoped>

</style>