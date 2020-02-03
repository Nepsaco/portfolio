<template>
    <section class='landing'>
        <header class='main-header'>
            <h1>Software Developer</h1>
        </header>
        <nav class='main-nav'>
            <p>Hamburger</p>
        </nav>
        <main class='main-content'>
            <h1>Tobie Tsuzuki</h1>
            <h2>I'm a 
                <div class='slider'>
                    <span>Software Developer.</span>
                    <span>Skier.</span>
                    <span>Designer.</span>
                    <span>Climber.</span>
                    <span>Front-end Engineer.</span>
                    <span>Foodie.</span>
                    <span>Tech Nerd.</span>
                    <span>Back-end Engineer</span>
                </div>
            </h2>
        </main>
        <footer class='main-footer'>
            <ul>
                <li>about</li>/
                <li>work</li>/
                <li>contact</li>
            </ul>
        </footer>
    </section>
</template>

<script>
</script>

<style lang='scss'>
.landing {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: $dark;
    color: $light;
    padding: 2rem;
}

.main-content {
    @include header-font;
    h2 {
        @include regular-font;
        font-size: 8vw;
    }
}

.slider {
    display: inline;

    span {
        color: $accent;
        animation: topToBottom 20s linear infinite 0s;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        text-indent: 1rem;

        &:nth-child(2){
            animation-delay: 2.5s;
        }

        &:nth-child(3){
            animation-delay: 5s;
        }

        &:nth-child(4){
            animation-delay: 7.5s;
        }
        &:nth-child(5){
            animation-delay: 10s;
        }
        &:nth-child(6){
            animation-delay: 12.5s;
        }
        &:nth-child(7){
            animation-delay: 15s;
        }
        &:nth-child(8){
            animation-delay: 17.5s;
        }
    }
}

@keyframes topToBottom {
    0% { opacity: 0; }
    15% { 
        opacity: 0;
        transform: translateY(-20px);
    }
    20% {
        opacity: 1;
        transform: translateY(0px);
    }
    25% {
        opacity: 1;
        transform: translateY(0px);
    }
    30% {
        opacity: 0;
        transform: translateY(75px);
    }
    100% {
        opacity: 0;
    }
}

.main-header {
    color: $accent;
}

nav {
    position: absolute;
    left: 2rem;
    top: 2rem;
    width: 8rem;
}

.main-footer {
    color: $accent;
    width: 100vw;
    ul {
        display: flex;
        justify-content: space-evenly;
    }
}
</style>
