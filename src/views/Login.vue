<template>
    <div class="_login-page _container">
        <BackButton />
        <Logo />
        <h1>Sign in with Email</h1>

        <InputField
            placeholder="Enter your email address"
            :validation-rule="emailCheck"
            error-message="Email is invalid"
            @validate-input="isEmailValid = !$event"
        />

        <InputField
            placeholder="Enter your password"
            type="password"
            :validation-rule="passwordCheck"
            error-message="Your password should be at least 6 characters long and contain at
                              least 3 letters and at least 2 numbers"
            @validate-input="isPasswordValid = !$event"
        />

        <a class="_secondary-link" href="/">Forgot password?</a>

        <ButtonLink destination="/chat-list" :disabled="isFormValid">
            Sign in
        </ButtonLink>

        <p>Already have an account?</p>
        <a class="_primary-link" href="/">Sign up here</a>
    </div>
</template>

<script>
    import Logo from '@/components/Logo'
    import ButtonLink from '@/components/ButtonLink'
    import BackButton from '@/components/BackButton'
    import InputField from '@/components/InputField'

    export default {
        name: 'Login',
        components: {
            InputField,
            BackButton,
            ButtonLink,
            Logo
        },
        data () {
            return {
                isValid: false,
                isEmailValid: false,
                isPasswordValid: false,
                isValueHidden: true
            }
        },
        computed: {
            isFormValid () {
                return !(this.isEmailValid && this.isPasswordValid)
            }
        },
        created () {
            this.passwordCheck = '(?=^.{8,}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s)'
            { { /* eslint-disable no-useless-escape */ }}
            this.emailCheck = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
        }
    }
</script>

<style scoped lang="scss">
  ._secondary-link {
    display: block;
    text-align: left;
    margin-left: 20px;
  }
  ._login-page {
    padding: 101px 28px;
    height: 100%;
    max-width: 319px;
    width: 100%;
    margin: 0 auto;
  }
  h1 {
    font-size: $h1-font-size;
    margin-bottom: 40px;
  }
  ._logo {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 40px;
  }

  ._button-link {
    margin-bottom: 30px;
    margin-top: 163px;
  }
</style>

