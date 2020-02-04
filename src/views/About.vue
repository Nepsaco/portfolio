<template>
    <section class='about'>
        <div class='title'>
            <h1>About</h1>
        </div>
        <div class='about-content'>
            <h2>I am a Software Developer living in Denver, Colorado.</h2>
            <p>A former beer brewer turned engineer. I aspire to create web apps that achieve beautiful design and memorable UX.</p>
            <ul>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>UI/UX Design</li>
            </ul>
        </div>
    </section>
</template>

<script>
</script>

<style lang='scss'>
.about {
    display: flex;
    flex-flow: column wrap;
    background-color: $accent;
    color: $light;
    @include respond-to(desktop){
        height: 100vh;
    }
}

.title {
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

.about-content {
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
}
</style>
