import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/services/api'
import { timeNow } from '@/services/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
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
  },
  actions: {
    getUserData (context) {
      API.getUser().then((data) => {
        context.commit('setUser', data)
      })
    },
    getChatData (context) {
      API.getChat().then((data) => {
        context.commit('setChatData', data)
      })
      .catch(error => {
        context.commit('setErrorText', error)
      })
    },
    getChatList (context) {
      API.getChats().then((data) => {
        context.commit('setChatList', data)
      })
    },
    sendMessage(context, message) {
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
})
