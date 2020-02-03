<template>
    <div id="app">
        <Landing />
        <About />
    </div>
</template>

<script>
import Landing from '@/views/Landing.vue'
import About from '@/views/About.vue'

export default {
    components: {
        Landing,
        About,
    }

}
</script>

<style lang="scss">

body {
    @include regular-font;
}

</style>
