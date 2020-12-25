<template>
    <div class="_chat-container">
        <div class="_top-content">
            <Avatar
                :imageSrc="avatarImage"
                size="sm"
                class="_avatar-with-status"
                @click="$router.push('/profile')"
            />
            <img :src="searchIcon">
        </div>

        <div class="_toggle"><span class="_active">Chat</span><span>Call</span></div>

        <div @click="$router.push('chat/1')">
            <ChatDetails v-for="chat in chatList" :key="chat.id" :data="chat"></ChatDetails>
        </div>

        <ButtonLink destination="/chat/1" :iconSrc="newChatIcon" class="_round-button" />
        <ErrorMessage />
    </div>
</template>

<script>
    import ButtonLink from '@/components/ButtonLink'
    import Avatar from '@/components/Avatar'
    import ChatDetails from '@/components/ChatDetails'
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'ChatList',
        components: {
            Avatar,
            ChatDetails,
            ButtonLink
        },
        computed: {
            ...mapState(['chatList'])
        },
        created () {
            this.avatarImage = require('@/assets/images/erke-rysdauletov.jpg')
            this.searchIcon = require('@/assets/icons/icon-search.svg')
            this.newChatIcon = require('@/assets/icons/icon-chat.svg')
            this.getChatList()
        },
        methods: {
            ...mapActions(['getChatList'])
        }
    }
</script>

<style scoped lang="scss">
    ._chat-container {
        padding-top: 54px;
        padding-bottom: 46px;
        max-width: 375px;
        margin: 0 auto;
    }
    ._top-content {
        margin-bottom: 30px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
    }
    ._chat-page {

    }
    ._toggle {
        display: flex;
        height: 52px;
        width: 327px;
        padding: 6px;
        background: $light-gray;
        border-radius: $border-radius;
        box-sizing: border-box;
        margin: 0 auto 24px auto;
        span {
            width: 50%;
            line-height: 40px;
            color: $light-black;
            font-weight: bold;
            font-size: 16px;
            &._active {
                color: $black;
                width: 158px;
                height: 40px;
                border-radius: $border-radius;
                box-shadow:  $box-shadow;
            }
        }
    }
    ._button-link {
        margin: 50px 28px 0 auto;
        text-align: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow:  $box-shadow;
    }
</style>

