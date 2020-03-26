<template>
    <section class='contact' id='contact'>
        <div class='contact-title'>
            <h1>Contact</h1>
        </div>
        <div class='contact-content'>
            <div>
                <h3>If you are looking to collaborate and create amazing experiences feel free to contact me.</h3>
                <p>I am available for full-time and freelance projects.</p>
            </div>
            <div class='my-links'>
                <h3>Tobie Tsuzuki</h3>
                <p>Software Developer</p>
                <a href='mailto:tobie.tsuzuki@gmail.com'>tobie.tsuzuki@gmail.com</a><br>
                <a href ='./Resume - Tobie Tsuzuki.pdf' target='_blank'>Resume</a>
            </div>
            <div class='social-container'>
                <a href='https://www.linkedin.com/in/tobietsuzuki/' target='_blank'>
                    <font-awesome-icon :icon="['fab', 'linkedin-in']" size='3x'/> 
                </a>
                <a href='https://www.github.com/nepsaco' target='_blank'>
                    <font-awesome-icon :icon="['fab', 'github']" size='3x'/> 
                </a>
                <a href='https://www.medium.com/@tobietsuzuki' target='_blank'>
                    <font-awesome-icon :icon="['fab', 'medium-m']" size='3x'/> 
                </a>
            </div>
            <EmailForm @send-email='sendEmail'/>
        </div>
    </section>
</template>

<script>
import EmailForm from '@/components/EmailForm.vue'

export default {
    components: {
        EmailForm,
    },

    methods: {
        sendEmail(message){
            console.log(message)
        },

    }
}
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: $light;
    height: 100vh;
    padding: 2rem;
    color: $dark;
    line-height: 1.5rem;

    h3 {
        @include bold-font;
        font-size: 1.25rem;
    }

    @include respond-to(desktop){
        background-color: $light;
        width: 50vw
    }

    .my-links {
        a {
            color: $accent;
            text-decoration: none;
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
