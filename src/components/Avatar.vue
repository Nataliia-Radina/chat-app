<template>
    <div :class="`_avatar _${size}`" @click="$emit('click')">
        <img
            v-if="imageSrc"
            class="_avatar-image"
            :src="imageSrc"
            alt="avatar" />
    </div>
</template>

<script>
    export default {
        name: 'Avatar',
        props: {
            imageSrc: {
                type: String,
                default: ''
            },
            size: {
                type: String,
                default: 'sm'
            }
        }
    }
</script>

<style scoped lang="scss">
    ._avatar {
        display: inline-block;
        position: relative;
        &._sm {
            width: 50px;
            height: 50px;
        }
        &._lg {
            width: 190px;
            height: 190px;
            margin-bottom: 50px;
            &:after {
                content: '';
                position: absolute;
                height: 50px;
                width: 50px;
                border-radius: 50%;
                background-color: $blue;
                bottom: 0;
                right: 0;
            }
            &:before {
                content: url('../assets/icons/icon-edit.svg');
                position: absolute;
                right: 16px;
                bottom: 16px;
                z-index: 5;
            }
        }
        ._avatar-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
        &._is-multiple {
            width: 32px;
            height: 32px;
        }
    }
</style>
