<template>
    <section class="_chat-details-container">
        <div class="_chat-content">
            <Avatar
                v-for="image in data.chat_images"
                :key="image"
                :imageSrc="getImageSrc(image)"
                size="sm"
                :class="{'_is-multiple': data.chat_images.length > 1}"/>
            <div class="_chat-text">
                <h2>{{ data.chat_name }}</h2>
                <p>{{ data.last_message }}</p>
            </div>
        </div>
        <span class="_time-info">{{ data.last_chatted }}</span>
    </section>
</template>

<script>
    import Avatar from '@/components/Avatar'

    export default {
        name: 'Profile',
        components: {
            Avatar
        },
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        created () {

        },
        methods: {
            getImageSrc(image) {
                return require(`@/assets/images/${image}`)
            }
        }
    }
</script>

<style scoped lang="scss">
    ._chat-details-container {
        position: relative;
        padding: 10px 28px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $light-gray;
    }
    h2, p {
        margin: 0;
    }
    h2 {
        margin-bottom: 3px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }
    ._chat-content {
        display: flex;
        text-align: left;
    }
    ._avatar {
        margin-right: 12px;
    }
    ._time-info {
        color: #58616A;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        margin-right: 13px;
    }
    ._is-multiple + ._is-multiple {
        margin-left: -26px;
        margin-top: 7px;
    }
</style>

