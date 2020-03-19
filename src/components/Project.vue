<template>
    <div class='project-content'>
        <h1>Ski The Streets</h1>
        <p>Lorem Ipsm</p>
        <img src='../assets/images/ski.svg' alt='Project image' />
        <h2>Technolgies</h2>
        <ul>
        </ul>
        <div class='social-container'>
            <a href='https://www.linkedin.com/in/tobietsuzuki/' target='_blank'>
                <font-awesome-icon :icon="['fab', 'youtube']" size='3x'/> 
            </a>
            <a href='https://www.github.com/nepsaco' target='_blank'>
                <font-awesome-icon :icon="['fab', 'github']" size='3x'/> 
            </a>
        </div>
    </div>
</template>

<style lang='scss'>
.project-content{
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    background-color: $light;
    height: 100vh;
    color: $dark;
    padding: 2rem;

    h1 {
        @include header-font;
        font-size: 3rem;
    }

    h2 {
        @include bold-font;
    }

    img {
        width: 100vw;
        margin-left: -2rem;
    }

    @include respond-to(desktop){
        background-color: $light;
        width: 50vw
    }
    .social-container {
        display: flex;
        justify-content: space-evenly;
        a {
            color: $dark;

        }
    }
}
</style>
