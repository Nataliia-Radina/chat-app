<template>
    <div class="_container" v-if="user">
        <div class="_top-content">
            <BackButton destination="/chat-list" />
            <h1>Profile</h1>
        </div>
        <Avatar :imageSrc="getImageSrc(user.user_img)" size="lg" />
        <InputField :placeholder="user.user_name" disabled />
        <InputField :placeholder="user.profile_description" disabled />
        <InputField class="_status-input" :placeholder="user.user_status" disabled />
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
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Profile',
        components: {
            InputField,
            Avatar,
            BackButton,
            ButtonLink
        },
        created () {
            this.getUserData()
        },
        computed: {
            ...mapState(['user']),
        },
        methods: {
            ...mapActions(['getUserData'])
        }
    }
</script>

<style scoped lang="scss">
    ._top-content {
        padding-top: 64px;
        padding-bottom: 30px;
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
        font-size: 18px;
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

