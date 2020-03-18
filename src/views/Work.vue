<template>
    <section class='work'>
        <div class='work-title'>
            <h1>Work</h1>
        </div>
        <router-view />
    </section>
</template>

<script>
</script>

<style lang='scss'>
.work {
    display: flex;
    flex-flow: column wrap;
    background-color: $accent;
    color: $light;
    @include respond-to(desktop){
        height: 100vh;
    }

    .work-title {
        color: $dark;
        background-color: $light;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        @include header-font;
        @include respond-to(desktop){
            width: 50vw;
            font-size: 10vw;
        }
    }

}
</style>
