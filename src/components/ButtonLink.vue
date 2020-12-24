<template>
  <button  class="_button-link" @click="$router.push(destination)" :disabled="disabled">
    <img v-if="iconSrc" :src="iconSrc"/>
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: 'ButtonLink',
        props: {
            iconSrc: {
                type: String,
                default: null
            },
            destination: {
              type: String,
              default: '/'
            },
            disabled: {
              type: Boolean,
              default: () => false
            }
        }
    }
</script>

<style lang="scss" scoped>
  ._button-link {
    appearance: none;
    border: none;
    outline: none;
    display: block;
    border-radius: $border-radius;
    position: relative;
    max-width: 319px;
    width: 100%;
    background-color: $blue;
    font-size: 18px;
    height: 54px;
    line-height: 54px;
    color: #fff;
    img {
      position: absolute;
      top: 50%;
      left: 12%;
      transform: translateY(-50%);
    }
    &:hover {
      cursor: pointer;
    }
    &._round-button {
      img {
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
