<template>
    <div class='project-container'>
        <nav class='project-nav'>
            <div v-for='project in projectList' :key="project.name">
                <router-link :to="{name: 'project', params: project}" :name='project.params'>{{project.name}}</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        projectList() {
            return this.$store.state.projectList
        } 
    }
}
</script>

<style lang='scss'>
.project-container {
    display: flex;
    justify-content: center;
    align-items: center;
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

    .project-nav {
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        a {
            color: $dark;
            text-decoration: none;
            @include bold-font;
        }
    }
}
</style>
