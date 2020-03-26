<template>
    <section class='about' id='about'>
        <div class='about-title'>
            <h1>About</h1>
        </div>
        <div class='about-content'>
            <h2>I am a Software Developer living in Denver, Colorado.</h2>
            <p>A former beer brewer turned engineer. I aspire to create web apps that achieve beautiful design and memorable UX.</p>
            <ul>
                <h2>Skills</h2>
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>UI/UX Design</li>
            </ul>
            <ul>
                <h2>Technolgies</h2>
                <li>Javascript</li>
                <li>Node</li>
                <li>Vue</li>
                <li>React</li>
                <li>Ruby</li>
                <li>Rails</li>
            </ul>
            <h3>
                I am eager to learn and motivated to solve challenging problems. 
                With my background in project management,
                and teaching I have been helping people connect and  
            </h3>
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

.about-title {
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: $light;
    height: 100vh;
    padding: 2rem;
    color: $dark;
    line-height: 1.5rem;

    h2, h3 {
        padding-bottom: .5rem;
        @include bold-font;
    }
    
    li {
        padding-bottom: .5rem;
        text-indent: 1rem;

    }

    p {
        padding-bottom: .5rem;
    }

    @include respond-to(desktop){
        background-color: $light;
        width: 50vw
    }
}
</style>
