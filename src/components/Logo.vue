<template>
    <div class="_logo" @click="$router.push('/')">
        Talky<span>.</span>
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style scoped lang="scss">
    ._logo {
        color: $black;
        font-weight: 600;
        cursor: pointer;
        span {
            color: #4175DF;
        }
    }
</style>
