<template>
    <div id="app">
        <section class='landing'>
            <header class='main-header'>
                <h1>Software Developer</h1>
            </header>
            <nav class='main-nav'>
                <p>Hamburger</p>
            </nav>
            <main>
                <h1>hello</h1>
            </main>
            <footer class='main-footer'>
                <ul>
                    <li>about</li>/
                    <li>work</li>/
                    <li>contact</li>
                </ul>
            </footer>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/typography';
@import './styles/color';

body {
    @include regular-font;
}
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
