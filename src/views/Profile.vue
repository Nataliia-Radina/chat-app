<template>
    <div class="_container">
        <div class="_top-content">
            <BackButton /><h1>Profile</h1>
        </div>
        <Avatar :imageSrc="avatarImage" size="lg" />
        <InputField placeholder="Name" disabled />
        <InputField placeholder="Hello" disabled />
        <InputField class="_status-input" placeholder="Available" disabled />
        <ButtonLink destination="/chat-list">
            Complete
        </ButtonLink>
    </div>
</template>

<script>
    import ButtonLink from '@/components/ButtonLink'
    import BackButton from '@/components/BackButton'
    import InputField from '@/components/InputField'
    import Avatar from '@/components/Avatar'

    export default {
        name: 'Profile',
        components: {
            InputField,
            Avatar,
            BackButton,
            ButtonLink
        },
        created () {
            this.avatarImage = require('@/assets/images/erke-rysdauletov.jpg')
        }
    }
</script>

<style scoped lang="scss">
    ._top-content {
        padding-top: 64px;
        text-align: left;
        position: relative;
    }
    ._back-button-container {
        display: inline-block;
    }
    ._secondary-link {
        display: inline-block;
        text-align: left;
        margin-left: 20px;
    }
    ._login-page {
        padding: 101px 28px;
        height: 100%;
        max-width: 319px;
        width: 100%;
        margin: 0 auto;
    }
    h1 {
        margin: 0;
        display: inline-block;
        position: absolute;
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
    }
    ._logo {
        margin-bottom: 40px;
        font-weight: 600;
        font-size: 40px;
    }
    ._button-link {
        margin-bottom: 30px;
        margin-top: 163px;
    }
</style>

