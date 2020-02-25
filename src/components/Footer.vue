<template>
        <footer class='main-footer'>
            <ul>
                <li>about</li>/
                <li>work</li>/
                <li>contact</li>
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
    }
}
</style>

