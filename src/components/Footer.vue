<template>
        <footer class='main-footer'>
            <ul>
                <router-link to='#about'>about</router-link>
                <span>/</span>
                <router-link to='#work'>work</router-link>
                <span>/</span>
                <router-link to='#contact'>contact</router-link>
            </ul>
        </footer>
</template>

<script>
</script>

<style lang='scss'>

.main-footer {
    color: $accent;
    display: flex;
    align-items: center;
    ul {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100vw;
        @include respond-to(desktop){
            width: 40vw;
        }
        a {
         color: $accent;   
         text-decoration: none;
        }
    }
}
</style>

