<template>
    <div id="app">
        <Landing />
    </div>
</template>

<script>
import Landing from '@/components/Landing.vue'

export default {
    components: {
        Landing
    }

}
</script>

<style lang="scss">

body {
    @include regular-font;
}

</style>
