<template>
    <section class='contact'>
        <div class='contact-title'>
            <h1>Contact</h1>
        </div>
        <div class='contact-content'>
        </div>
    </section>
</template>

<script>
</script>

<style lang='scss'>
.contact {
    display: flex;
    flex-flow: column wrap;
    background-color: $accent;
    color: $light;
    @include respond-to(desktop){
        height: 100vh;
    }
}

.contact-title {
    background-color: $dark;
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


.contact-content {
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
