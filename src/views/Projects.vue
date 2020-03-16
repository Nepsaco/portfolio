<template>
    <div>
        <router-link :to="{name: 'ski-the-streets'}">Ski The Streets</router-link>
        <p>hello</p>
    </div>
</template>

<style lang='scss'>
    a {
        color: $dark;
        @include bold-font;
    }
</style>
