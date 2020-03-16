<template>
    <div id="app">
        <Landing />
        <About />
        <Work />
        <Contact />
    </div>
</template>

<script>
import Landing from '@/views/Landing'
import About from '@/views/About'
import Work from '@/views/Work'
import Contact from '@/views/Contact'

export default{

    components: {
        Landing,
        About,
        Work,
        Contact,
    }
}
</script>

<style lang="scss">

#app {
    @include regular-font;
}

</style>
