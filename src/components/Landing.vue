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
            <h2>I'M A </h2>
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
