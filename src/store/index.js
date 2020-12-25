import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/services/api'
import VuexPersistence from 'vuex-persist'
import { timeNow } from '@/services/utils'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export const state  = () => ({
    user: {
      id: null,
      user_img: '',
      user_name: '',
      profile_description: '',
      user_status: ''
    },
    chatData: {},
    chatList: [],
    errorText: ''
})

export const mutations = {
    setUser (state, user) {
        state.user = { ...state.user, ...user }
    },
    setChatData (state, chatData) {
        state.chatData =  { ...chatData }
    },
    setChatList (state, chatList) {
        state.chatList = chatList
    },
    setErrorText (state, text) {
        state.errorText = text
    },
    addMessageToChat (state, message) {
        Vue.set(state.chatData.messages, state.chatData.messages.length, message)
    }
}

export const actions = {
    getUserData (context) {
      API.getUser().then((data) => {
        context.commit('setErrorText', '')
        context.commit('setUser', data)
      })
      .catch(error => {
        context.commit('setErrorText', error.message)
      })
    },
    getChatData (context) {
      API.getChat().then((data) => {
        context.commit('setErrorText', '')
        context.commit('setChatData', data)
      })
      .catch(error => {
        context.commit('setErrorText', error.message)
      })
    },
    getChatList (context) {
      API.getChats().then((data) => {
        context.commit('setErrorText', '')
        context.commit('setChatList', data)
      })
      .catch(error => {
        context.commit('setErrorText', error.message)
      })
    },
    sendMessage (context, message) {
      const messageObj = {
        id: context.state.chatData.messages.length + 1,
          message_type: "text",
          time_sent: timeNow(),
          message_data: message,
          is_user_message: true
      }
      context.commit('addMessageToChat', messageObj)
    }
}


export default new Vuex.Store({
    state,
    plugins: [vuexLocal.plugin],
    mutations,
    actions
})
