<template>
    <div id='hamburger-container' v-bind:class ="{active: isActive}" @click='toggleActive()'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            isActive: false,
        }
    },

    methods: {
        toggleActive: function() {
            console.log(this.isActive)
            this.isActive = !this.isActive
        }
    }
}
</script>

<style lang='scss'>
#hamburger-container {
    width: 2rem;
    height: 2rem;
    span {
        display: block;
        position: absolute;
        height: 12%;
        width: 50%;
        background: $light;
        opacity: 1;
        transform: rotate(0deg);
        transition: .25s ease-in-out;

        &:nth-child(even){
            left: 50%;
            border-radius: 0 10px 10px 0;
        }

        &:nth-child(odd){
            left: 0px;
            border-radius: 10px 0 0 10px;
        }

        &:nth-child(1), &:nth-child(2) {
            top: 0;
        }

        &:nth-child(3), &:nth-child(4) {
            top: .5rem;
        }

        &:nth-child(5), &:nth-child(6) {
            top: 1rem;
        }
    }

    &.active {
        span {
            &:nth-child(1), &:nth-child(6){
                transform: rotate(45deg);
            }

            &:nth-child(2), &:nth-child(5){
                transform: rotate(-45deg);
            }

            &:nth-child(1) {
                top: 15%;
                left: 5%;
            }

            &:nth-child(2) {
                top: 15%;
                left: 35%;
            }


            &:nth-child(5) {
                top: 45%;
                left: 5%;
            }

            &:nth-child(6) {
                top: 45%;
                left: 35%;
            }

            &:nth-child(3){
                left: -25%;
                opacity: 0;
            }

            &:nth-child(4){
                left: 75%;
                opacity: 0;
            }

        }
    }
}
</style>

