<template>
    <div class='project-content'>
        <h1>Ski The Streets</h1>
        <p>{{description}}</p>
        <img src='../assets/images/ski.svg'
    </div>
</template>

<style lang='scss'>
.project-content{
    display: flex;
    background-color: $light;
    height: 100vh;
    padding: 2rem;
    color: $dark;

    h1 {
        @include header-font;
        font-size: 3rem;
    }

    @include respond-to(desktop){
        background-color: $light;
        width: 50vw
    }
}
</style>
