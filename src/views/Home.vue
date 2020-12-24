<template>
  <div class="_home-page _container">
      <Logo />
    <ButtonLink destination="/login" :iconSrc="faceBookIcon">
        <span>Sign in with Google</span>
    </ButtonLink>
    <ButtonLink destination="/login" :iconSrc="googleIcon">
      Sign in with Facebook
    </ButtonLink>
    <ButtonLink destination="/login" :iconSrc="appleIcon">
      Sign in with Apple
    </ButtonLink>
    <div class="_divider">or</div>
    <ButtonLink destination="/login">
      Continue with email
    </ButtonLink>
    <p>Already have an account?</p>
    <a href="/">Sign up here</a>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import ButtonLink from '@/components/ButtonLink'

export default {
  name: 'Home',
  components: {
    ButtonLink,
    Logo
  },
  created () {
    this.faceBookIcon = require('@/assets/icons/icon-facebook.svg')
    this.googleIcon = require('@/assets/icons/icon-google.svg')
    this.appleIcon = require('@/assets/icons/icon-apple.svg')
  }
}
</script>

<style scoped lang="scss">
  ._home-page {
    background-color: #E5E5E5;
    padding: 101px 28px;
    width: 100%;
    max-width: 319px;
    margin: 0 auto;
  }
  ._logo {
      margin-bottom: 60px;
      font-size: 60px;
  }
  ._button-link {
      color: $black;
      background: #fff;
      font-size: 18px;
      line-height: 60px;
      height: 60px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
      padding-left: 31%;
      text-align: left;
      margin-bottom: 16px;
  }
  p {
      margin-top: 56px;
      margin-bottom: 5px;
  }
  ._divider {
      line-height: 44px;
      margin-bottom: 16px;
      position: relative;
    &:after,
    &:before {
      content: '';
      top: 50%;
      width: 100px;
      position: absolute;
      border-top: 1px solid $middle-black;
    }
    &:after {
      right: 32px;
    }
    &:before {
      left: 32px;
    }
  }
</style>
