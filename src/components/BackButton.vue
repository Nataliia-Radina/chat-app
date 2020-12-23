<template>
    <div class="_back-button-container">
        <button class="_back-button" @click="$router.push(destination)">
            <span><img v-if="iconSrc" :src="iconSrc"/></span>
            Back
        </button>
    </div>
</template>

<script>
    export default {
        name: 'BackButton',
        props: {
            destination: {
                type: String,
                default: '/'
            }
        },
        data() {
            return {
                prevRoute: null
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.prevRoute = from
            })
        },
        created () {
            this.iconSrc = require('@/assets/icons/icon-back.svg')
        }
    }
</script>

<style lang="scss" scoped>
    ._back-button-container {
        text-align: left;
    }
    ._back-button {
        appearance: none;
        border: none;
        outline: none;
        display: inline-block;
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
        line-height: 30px;
        color: $blue;
        margin-bottom: 30px;
        background-color: #fff;
        span {
            display: inline-block;
            background-color: $light-blue;
            border-radius: 50%;
            width: 30px;
            height: 30px;
        }
        img {

        }
        &:hover {
            cursor: pointer;
        }
    }
</style>
