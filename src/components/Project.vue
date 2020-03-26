<template>
    <div class='project-content'>
        <div class='header'>
            <h1>{{$attrs.name}}</h1>
            <div class='back-button'>
                <router-link :to="{name: 'projects'}">
                    <span></span>
                    <span></span>
                </router-link>
            </div>
        </div>
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

    p {
        line-height: 1.5rem;
    }

    img {
        display: none;
    }

    @include respond-to(desktop){
        width: 50vw;
        img {
            display: inherit;
            width: 100%;
        }
    }
    .social-container {
        display: flex;
        justify-content: space-evenly;
        a {
            color: $dark;

        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        .back-button {
            @include hexagon();
            span {
                display: block;
                position: absolute;
                top: 11px;
                left: 11px;
                width: 50%;
                height: 4px;
                margin: 0 auto;
                background: $light;
                opacity: 1;
                border-radius: 0 10px 10px 0;
                &:nth-child(1){
                    transform: rotate(-45deg);
                }
                &:nth-child(2){
                    transform: rotate(45deg);
                }
            }
        }
    }
}
</style>
