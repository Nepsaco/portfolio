<template>
    <section class='landing'>
        <Header />
        <main class='main-content'>
            <h1>Tobie Tsuzuki</h1>
            <h2>I'm a 
                <div class='slider'>
                    <span>Software Developer.</span>
                    <span>Skier.</span>
                    <span>Designer.</span>
                    <span>Climber.</span>
                    <span>Front-end Engineer.</span>
                    <span>Tech Nerd.</span>
                    <span>Back-end Engineer.</span>
                    <span>Foodie.</span>
                </div>
            </h2>
        </main>
        <Footer />
    </section>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
    components: {
        Footer,
        Header,
    },
}
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
    h1 {
        @include header-font;
        font-size: $XXL;
        @include respond-to(desktop) {
            font-size: $XXXL;
        }
    }
    h2 {
        padding-top: 1em;
        @include regular-font;
        font-size: $L;
        @include respond-to(desktop) {
            font-size: $XL;
        }
    }
}

.slider {
    display: inline;

    span {
        color: $accent;
        animation: topToBottom 16s linear infinite 0s;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        margin-left: 1rem;

        &:nth-child(2){
            animation-delay: 2s;
        }
        &:nth-child(3){
            animation-delay: 4s;
        }
        &:nth-child(4){
            animation-delay: 6s;
        }
        &:nth-child(5){
            animation-delay: 8s;
        }
        &:nth-child(6){
            animation-delay: 10s;
        }
        &:nth-child(7){
            animation-delay: 12s;
        }
        &:nth-child(8){
            animation-delay: 14s;
        }
    }
}

@keyframes topToBottom {
    0% { opacity: 0; }
    15% { 
        opacity: 0;
        transform: translateY(-2rem);
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
        transform: translateY(4rem);
    }
    100% {
        opacity: 0;
    }
}
</style>
