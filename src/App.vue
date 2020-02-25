<template>
    <div id="app">
        <Landing />
        <About />
        <Work />
        <Contact />
    </div>
</template>

<script>
import Landing from '@/views/Landing.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'
import Contact from '@/views/Contact.vue'

export default {
    components: {
        Landing,
        About,
        Work,
        Contact,
    }

}
</script>

<style lang="scss">

body {
    @include regular-font;
}

</style>
