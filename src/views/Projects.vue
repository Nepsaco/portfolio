<template>
    <div class='project-container'>
        <nav class='project-nav'>
            <router-link :to="{name: 'badges'}">Badges</router-link>
            <span>/</span>
            <router-link :to="{name: 'brew-time'}">Brew Time</router-link>
            <span>/</span>
            <router-link :to="{name: 'ski-the-streets'}">Ski The Streets</router-link>
            <router-view />
        </nav>
    </div>
</template>

<style lang='scss'>
.project-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $light;
    height: 100vh;
    padding: 2rem;
    color: $dark;

    h2 {
        @include bold-font;
    }

    @include respond-to(desktop){
        background-color: $light;
        width: 50vw
    }

    .project-nav {
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        a {
            color: $dark;
            text-decoration: none;
            @include bold-font;
        }
    }
}
</style>
