<template>
    <section class="_chat-message-container">
        <div v-if="showTime" class="_time-info">
            {{ message.time_sent }}
        </div>
        <div    v-if="message.message_type === 'text'"
                class="_message-text"
                :class="[message.is_user_message ? '_is-user-message': '_is-friend-message']">
            <div v-html="message.message_data"></div>
        </div>
        <div v-if="message.message_type === 'images'" class="_message-images">
            <img v-for="image in message.message_data" :src="getImageSrc(image.src)" :key="image.id" />
        </div>
    </section>
</template>

<script>

    export default {
        name: 'ChatMessage',
        props: {
            message: {
                type: Object,
                required: true
            },
            showTime: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped lang="scss">
    ._chat-message-container {
        max-width: 319px;
        margin: 0 auto;
    }
    ._time-info {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
        font-size: 12px;
        color: $light-black;
        line-height: 15px;
    }
    ._time-info,
    ._message-text {
        margin: 15px 0;
    }
    ._message-text {
        div {
            display: inline-block;
            padding: 10px;
            border-radius: $border-radius;
        }
        &._is-friend-message {
            text-align: left;
            div {
                background-color: $light-gray;
            }
        }
        &._is-user-message {
            text-align: right;
            div {
                background-color: $blue;
                color: #fff;
            }
        }
    }
    ._message-images {
        img {
            margin-right: 15px;
            text-align: left;
            width: 125px;
            height: 125px;
            object-fit: cover;
            border-radius: $border-radius;
        }
    }
</style>

