<template>
    <div v-if="chatData" class="_chat-container _container">
        <div class="_top-content">
            <BackButton destination="/chat-list" />
            <h1>{{ chatData.chat_name }}</h1>
            <Avatar :imageSrc="getImageSrc(chatData.chat_img)" size="sm" class="_avatar-with-status" />
        </div>
        <div v-if="chatData.messages">
            <ChatMessage
                    v-for="(message, index) in chatData.messages"
                    :key="message.id"
                    :message="message"
                    :showTime="displayMessageTime(index)"
            />
        </div>
        <ButtonLink :iconSrc="addIcon" class="_round-button" disabled />
    </div>
</template>

<script>
    import ButtonLink from '@/components/ButtonLink'
    import Avatar from '@/components/Avatar'
    import BackButton from '@/components/BackButton'
    import ChatMessage from '@/components/ChatMessage'
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'Chat',
        components: {
            Avatar,
            BackButton,
            ButtonLink,
            ChatMessage
        },
        created () {
            this.searchIcon = require('@/assets/icons/icon-search.svg')
            this.addIcon = require('@/assets/icons/icon-more.svg')
            this.getChatData()
        },
        computed: {
            ...mapState(['chatData']),
        },
        methods: {
            displayMessageTime(index) {
                return index === 0 || this.chatData.messages[index].time_sent
                    !== this.chatData.messages[index - 1].time_sent
            },
            ...mapActions(['getChatData'])
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
        margin-bottom: 56px;
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1 {
        font-size: $h2-font-size;
    }
    ._avatar-with-status {
        &:before {
            content: '';
            border-radius: 50%;
            background-color: $green;
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2px solid #fff;
            right: 0;
            bottom: 0;
            z-index: 5;
        }
    }
    ._button-link {
        margin: 50px 28px 0 auto;
        text-align: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        box-shadow:  $box-shadow;
    }
</style>

