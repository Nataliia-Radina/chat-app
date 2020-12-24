<template>
    <div class="_chat-container">
        <div class="_top-content">
            <Avatar :imageSrc="avatarImage" size="sm" class="_avatar-with-status" />
            <img :src="searchIcon">
        </div>
        <div class="_toggle"><span class="_active">Chat</span><span>Call</span></div>
        <ChatDetails v-for="chat in data" :key="chat.id" :data="chat"></ChatDetails>
        <ButtonLink destination="/chat/1" :iconSrc="newChatIcon" class="_round-button">
        </ButtonLink>
    </div>
</template>

<script>
    import ButtonLink from '@/components/ButtonLink'
    import Avatar from '@/components/Avatar'
    import ChatDetails from '@/components/ChatDetails'

    export default {
        name: 'Profile',
        components: {
            Avatar,
            ChatDetails,
            ButtonLink
        },
        created () {
            this.avatarImage = require('@/assets/images/erke-rysdauletov.jpg')
            this.searchIcon = require('@/assets/icons/icon-search.svg')
            this.newChatIcon = require('@/assets/icons/icon-chat.svg')
            this.data = [
                {id: 1, chat_name: "Annette Black", last_message: "Hey, did you talk to her?", last_chatted: "2min ago",
                    chat_images:["christopher-campbell.jpg"]},
                {id: 2, chat_name: "Hey guuurll", last_message: "Brb, watch some Dark here", last_chatted: "5min ago",
                    chat_images:["tamara-bellis.jpg", "sigmund-jzz.jpg"]},
                {id: 3, chat_name: "Cameron Williamson", last_message: "Ok, Cya.  🤗?", last_chatted: "35min ago",
                    chat_images:["sigmund-jzz.jpg"]},
                {id: 4, chat_name: "Jane Cooper", last_message: "Thanks, ill call you there.", last_chatted: "1d ago",
                    chat_images:["tamara-bellis.jpg"]},
                {id: 5, chat_name: "Brennda Smily", last_message: "Sent a picture", last_chatted: "1d ago",
                    chat_images:["ana-itonishvili.jpg"]},
                {id: 6, chat_name: "Jacob Jones", last_message: "Miss a call", last_chatted: "1d ago",
                    chat_images:["john-arano.jpg"]},
            ]
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
    ._toggle {
        display: flex;
        height: 52px;
        width: 327px;
        padding: 6px;
        background: $light-gray;
        border-radius: 8px;
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
                border-radius: 8px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            }
        }
    }
    ._button-link {
        margin: 50px 28px 0 auto;
        text-align: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>

