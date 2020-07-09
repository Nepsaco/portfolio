<template>
  <form class='email-form' id='email-form' @submit.prevent='onSubmit' novalidate='true'>
    <div class='error-message'>
      <p v-show='!email.valid'>Please enter a valid email address.</p>
    </div>
    <label for='name'>Name</label>
    <input class='small-input' id='name' name='name' type='text' v-model='name' required/>
    <label for='email'>Email</label>
    <input class='small-input' id='email' name='email' type='text' v-model='email.value' required/>
    <label for='message'>Message</label>
    <textarea class='large-input' id='message' name='message' type='textarea' v-model='message.text' required></textarea>
    <input class='button' type='submit' value='Send' />
  </form>
</template>

<script>
import emailjs from 'emailjs-com'

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
    onSubmit(event){
      this.validate(this.email.value)

      if(this.email.valid && this.email.value){
        this.$emit('send-email', {
          name: this.name,
          email: this.email.value,
          message: this.message.text
        })
        this.name = ''
        this.email.value = ''
        this.message.text = ''
        this.sendEmail(event)
      } 
    },

    validate(input){
      this.email.valid = this.isEmail(input) ? true : false
    },

    isEmail(input){
      const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      return emailRegExp.test(input)
    },

    sendEmail(event){
      emailjs.sendForm('gmail', 'template_3vYVK9tc', event.target, 'user_0zHFmyqIrvN8gfyi9Z6uk')
        .then(() => {
          alert('Email Sent')
        }, (error) => {
          alert('Email Failed Try Again Later', error)
        })
    }
  }
}
</script>

<style lang='scss'>
.email-form {
  display: flex;
  flex-direction: column;
  @include bold-font;

  input, textarea {
    font-size: 1rem;
    padding: .5rem;
    margin-bottom: 1.5rem;
    border: 1px solid $grey;
    border-radius: 30px;
    box-shadow: 2px 3px 2px $grey;
    &:focus {
      outline: none;
      box-shadow: 2px 2px 16px $dark;
    }

  }

  .small-input {
    padding: .5rem 1rem .5rem 1rem;
  }

  .large-input {
    padding-left: 1rem;
    border-radius: 15px;
    min-height: 100px;
    overflow: auto;
  }

  .button {
    font-size: 1rem;
    border: none;
    align-self: center;
    width: 40%;
    color: $light;
    background-color: $accent;
    @include respond-to(desktop){
      width: 25%;
    }

    &:focus {
      box-shadow: 2px 2px 8px $grey;
    }

    &:hover {
      box-shadow: 2px 2px 8px $dark;
    }

    &:active {
      box-shadow: 2px 2px 4px $dark;
    }
  }

}
</style>
