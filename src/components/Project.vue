<template>
    <div class='project-content'>
        <h1>{{$attrs.name}}</h1>
        <p>{{$attrs.description}}</p>
        <img :src='$attrs.img' alt='Project image' />
        <p>{{$attrs.techDescription}}</p>
        <h2>Technolgies</h2>
        <ul>
            <div v-for='(tech, index) in $attrs.techstack' :key='index'>
                <li> {{tech}}</li>
            </div>
        </ul>
        <div class='social-container'>
            <a :href='$attrs.youtube' target='_blank'>
                <font-awesome-icon :icon="['fab', 'youtube']" size='3x'/> 
            </a>
            <a :href='$attrs.github' target='_blank'>
                <font-awesome-icon :icon="['fab', 'github']" size='3x'/> 
            </a>
        </div>
    </div>
</template>

<script>
</script>

<style lang='scss'>
.project-content{
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    background-color: $light;
    height: 100vh;
    color: $dark;
    padding: 2rem;

    h1 {
        @include header-font;
        font-size: 3rem;
    }

    h2 {
        @include bold-font;
    }

    p{
        line-height: 1.5rem;
    }

    img {
        width: 100vw;
        margin-left: -2rem;
        display: none;
    }

    @include respond-to(desktop){
        width: 50vw;
        img {
            display: inherit;
            width: 50vw;
        }
    }
    .social-container {
        display: flex;
        justify-content: space-evenly;
        a {
            color: $dark;

        }
    }
}
</style>
