<template>
  <div id="app">
      <header class='main-header'>
          <h1>Hello</h1>
      </header>
      <nav class='main-nav'>
          <p>Hamburger</p>
      </nav>
      <footer class='main-footer'>
          <p>about</p>
          <p>work</p>
          <p>contact</p>
      </footer>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/color';
body {
    display: flex;
    justify-content: center;
    background-color: $dark;
    align-content: space-between;
    color: $light;
}

nav {
    position: fixed;
    left: 5%;
    top: 5%;
    width: 8em;
    margin-top: -2.5em;
}

footer {
    position: absolute;
    bottom: 0;
}
</style>
