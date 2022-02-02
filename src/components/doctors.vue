<template>
    <section class="bg-pink-light px-10 pt-12 pb-14">
        <h1 class="font-poppins underline underline-offset-8 decoration-red decoration-4 text-lg font-bold mb-14">Meet Our Doctors</h1>

        <div class="flex flex-wrap">

            <SingleDoctor imgUri="/src/assets/image/hero.png" name="Ruiz" role="psychiatrist" about="Lörem ipsum tiren poponas föde den ikigai huruvida ser. Taktig fakybel. Gigahätor lande på paradoktigt" like="10"/>
            <SingleDoctor imgUri="/src/assets/image/hero.png" name="Sandra" role="psychiatrist" about="Lörem ipsum tiren poponas föde den ikigai huruvida ser. Taktig fakybel. Gigahätor lande på paradoktigt" like="5"/>
            <SingleDoctor imgUri="/src/assets/image/hero.png" name="Nicobar" role="psychiatrist" about="Lörem ipsum tiren poponas föde den ikigai huruvida ser. Taktig fakybel. Gigahätor lande på paradoktigt" like="20"/>

        </div>

    </section>
</template>

<script setup>
    import SingleDoctor from './singleDoctor.vue'
</script>

<style lang="scss" scoped>

</style>