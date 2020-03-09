<template>
    <div id="app">
        <router-view name='Landing' ref='landing'/> 
            <router-view name='About' ref='about'/> 
                <router-view name='Work' ref='work'/> 
                    <router-view name='Contact' ref='contact'/> 
    </div>
</template>

<script>
</script>

<style lang="scss">

#app {
    @include regular-font;
}

</style>
