<template>
    <section class="bg-pink-light px-10 pt-12 pb-14">
        <h1 class="font-poppins underline underline-offset-8 decoration-red decoration-4 text-lg font-bold mb-14 text-center">Meet Our Doctors</h1>

        <div class="flex flex-wrap justify-evenly">

            <SingleDoctor imgUri="/src/assets/image/hero.png" name="Ruiz" role="psychiatrist" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam iste, quo, magni qui nobis molestias modi sequi accusamus nostrum possimus illo accusantium suscipit ab omnis. Nam soluta veritatis minima! sequi accusamus nostrum possimus illo accusantium suscipit ab omnis." :like="10"/>
            <SingleDoctor imgUri="/src/assets/image/hero.png" name="Sandra" role="psychiatrist" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam iste, quo, magni qui nobis molestias modi sequi accusamus nostrum possimus illo accusantium suscipit ab omnis. Nam soluta veritatis minima! sequi accusamus nostrum possimus illo accusantium suscipit ab omnis." :like="5"/>
            <SingleDoctor imgUri="/src/assets/image/hero.png" name="Nicobar" role="psychiatrist" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam iste, quo, magni qui nobis molestias modi sequi accusamus nostrum possimus illo accusantium suscipit ab omnis. Nam soluta veritatis minima! sequi accusamus nostrum possimus illo accusantium suscipit ab omnis." :like="20"/>

        </div>

    </section>
</template>

<script setup>
    import SingleDoctor from './singleDoctor.vue'
</script>

<style lang="scss" scoped>

</style>