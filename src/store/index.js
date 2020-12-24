import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/services/api'

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
    }
  }
})
