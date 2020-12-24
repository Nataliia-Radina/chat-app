<script>
    export default {
        name: 'ImageSrc',
        methods: {
            getImageSrc(image) {
                if (image) {
                    return require(`@/assets/images/${image}`)
                }
            }
        }
    }
</script>
