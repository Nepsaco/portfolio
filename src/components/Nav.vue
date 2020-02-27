<template>
    <nav class='main-nav'>
        <Hamburger />
    </nav>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue'

export default {
    components: {
        Hamburger,
    }
}
</script>

<style lang='scss'>

nav {
    position: fixed;
    left: 2rem;
    top: 2rem;
}

</style>


