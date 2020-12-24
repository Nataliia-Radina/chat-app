<template>
    <div class="_input-wrapper">
        <input
            :class="{'is-invalid': isInvalid}"
            :type="inputType"
            :placeholder="placeholder"
            v-model="value"
            :disabled="disabled"
            @input="onInput"
            @keyup.enter="onEnterKeyup"
        >

        <div v-if="isPasswordInput" class="_visibility-icon" @click.prevent="toggleVisibility">
            <img  :src="visibilityIcon" />
        </div>

        <span v-if="isMessageInput" class="_message-input" @click.prevent="submitMessage">
            <img  :src="sendIcon" />
        </span>

        <p v-if="!isEmpty && isInvalid" class="_error-message"> {{ errorMessage }}</p>
    </div>
</template>

<script>
    export default {
        name: 'InputField',
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            validationRule: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            isMessageInput: {
                type: Boolean,
                default: false
            },
            errorMessage: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                isInvalid: false,
                value: null,
                isValueHidden: true
            }
        },
        computed: {
            isPasswordInput () {
                return this.type === 'password'
            },
            isEmpty () {
                return ['', null, undefined].includes(this.value)
            },
            inputType () {
                if (this.isPasswordInput) {
                    return this.isValueHidden ? 'password' : 'text'
                }

                return this.type
            }
        },
        created () {
            this.visibilityIcon = require('@/assets/icons/icon-eye.svg')
            this.sendIcon = require('@/assets/icons/icon-send.svg')
        },
        methods: {
            toggleVisibility () {
                if (this.value) {
                    this.isValueHidden = !this.isValueHidden
                }
            },
            onInput () {
                this.isInvalid = this.validateInput()
                this.$emit('validate-input', this.isInvalid)
            },
            validateInput () {
                const validationExpression = new RegExp(this.validationRule)
                return !validationExpression.test(this.value)
            },
            submitMessage () {
                if (this.value) {
                    this.$emit('submitMessage', this.value)
                    this.value = ''
                }
            },
            onEnterKeyup () {
                this.isMessageInput && this.submitMessage()
            }
        }
    }
</script>

<style scoped lang="scss">
    ._input-wrapper {
        color: $black;
        font-weight: 700;
        position: relative;
        margin-bottom: 16px;
        input {
            font-weight: 500;
            box-sizing: border-box;
            padding: 0 20px;
            width: 100%;
            height: 54px;
            max-width: 319px;
            border: 1px solid $light-black;
            background-color: #fff;
            border-radius: $border-radius;
            font-size: 14px;
            &::placeholder {
                font-weight: 500;
                font-size: 14px;
                line-height: 1.5;
                color: $black;
            }
            &:focus {
                outline-color: $blue;
                &.is-invalid {
                    outline-color: $red;
                }
            }
            &:disabled {
                cursor: auto;
            }
            &.is-invalid {
                border-color: $red;
            }
        }
        ._visibility-icon {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: calc(54px/2);
            transform: translate(0, -50%);
        }
        ._error-message {
            text-align: left;
            font-weight: 500;
            font-size: 12px;
            color: $red;
        }
    }
    ._status-input {
        &:before {
            content: '';
            position: absolute;
            background-color: $green;
            border-radius: 50%;
            top: 50%;
            left: 18px;
            height: 18px;
            width: 18px;
            transform: translateY(-50%);
        }
        &:after {
            content: '';
            position: absolute;
            right: 54px;
            height: 44px;
            top: 5px;
            border-right: 1px solid $light-black;
        }
        input {
            padding-left: 48px;
            background-image: url('../assets/icons/icon-dropdown.svg');
            background-repeat: no-repeat;
            background-position: 95% center;
        }
    }
    ._message-input {
        position: absolute;
        right: 0;
        top: 0;
        width: 52px;
        height: 54px;
        cursor: pointer;
        img {
            left: 18px;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
        }
    }
</style>
