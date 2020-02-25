<template>
    <header class='main-header'>
        <h1>Software Developer</h1>
        <Nav />
    </header>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    components: {
        Nav,
    }
}

</script>

<style lang='scss'>

.main-header {
    color: $accent;
}

</style>

