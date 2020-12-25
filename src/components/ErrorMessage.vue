<template>
    <div v-if="errorText" class="_error-message">
        {{ errorText }}
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'ErrorMessage',
        computed: {
            ...mapState(['errorText'])
        }
    }
</script>

<style scoped lang="scss">
    ._error-message {
        color: $red;
        text-align: left;
        margin-left: 28px;
        margin-top: 20px;
    }
</style>


