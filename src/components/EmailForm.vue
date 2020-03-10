<template>
    <form class='email-form' @submit.prevent='onSubmit' novalidate='true'>
        <div class='error-message'>
            <p v-show='!email.valid'>Please enter a valid email address.</p>
        </div>
        <label for='name'>Name</label>
        <input id='name' name='name' type='text' v-model='name' required/>
        <label for='email'>Email</label>
        <input id='email' name='email' type='email' v-model='email.value' required/>
        <label for='message'>Message</label>
        <input id='message' name='message' type='textarea' v-model='message.text' required/>
        <input type='submit' value='Send' />
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: {
                value: '',
                valid: true,
            },
            message: {
                text: '',
            },
        }
    },

    methods: {
        onSubmit(){
            this.validate(this.email.value)

            if(this.email.valid){
                this.$emit('send-email', {
                    name: this.name,
                    email: this.email.value,
                    message: this.message.text
                })
                this.name = ''
                this.email.value = ''
                this.message.text = ''
            } 
        },

        validate(input){
            this.email.valid = this.isEmail(input) ? true : false
        },

        isEmail(input){
            const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            return emailRegExp.test(input)
        }
    }

}
</script>

<style lang='scss'>
</style>
