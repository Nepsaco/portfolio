<template>
    <div id="app">
        <router-view name='Landing' ref='landing'/> 
        <router-view name='About' ref='about'/> 
        <router-view name='Work' ref='work'/> 
        <router-view name='Contact' ref='contact'/> 
    </div>
</template>

<script>

export default {
    data() {
        return {
            inMove: false,
            acticeSection: 0,
            offsets: [],
            touchStartY: 0
        }
    },
    methods: {
        getOffsets(){
            console.log(this.$refs.landing.$el.offsetTop)
        }
    },
    mounted(){
        return this.getOffsets()
    }
}
</script>

<style lang="scss">

#app {
    @include regular-font;
}

</style>
