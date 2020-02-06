<template>
    <div id="app">
        <Landing />
        <About />
        <Work />
    </div>
</template>

<script>
import Landing from '@/views/Landing.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'

export default {
    components: {
        Landing,
        About,
        Work,
    }

}
</script>

<style lang="scss">

body {
    @include regular-font;
}

</style>
