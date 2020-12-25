import { actions, mutations, state } from '@/store/index'
import { testAction } from '@/store/helpers'
import { userData, chatData, chatListData } from '@/services/data'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

beforeEach(() => {
  fetch.resetMocks()
})


describe('mutations', () => {
  it('setUser should set correct user data', () => {
    mutations.setUser(state, userData)
    expect(state.user).toEqual(userData)
  })

  it('setChatData should set correct data', () => {
    mutations.setChatData(state, chatData)
    expect(state.chatData).toEqual(chatData)
  })

  it('setChatList should set correct data', () => {
    mutations.setChatList(state, chatListData)
    expect(state.chatList).toEqual(chatListData)
  })

  it('setErrorText should set correct data', () => {
    const error = "Something went wrong"
    mutations.setErrorText(state, error)
    expect(state.errorText).toEqual(error)
  })

  it('addMessageToChat should add message to chat', () => {
    const message = "New message is here"
    mutations.addMessageToChat( state, message )
    expect(state.chatData.messages[state.chatData.messages.length - 1]).toEqual(message)
  })
})


describe('actions', () => {
  it('getUserData should commit user with correct payload', done => {
    fetch.mockResponseOnce(userData)
    testAction({
      action: actions.getUserData,
      expectedMutationsPayload: [
        { type: 'setErrorText', payload: false },
        { type: 'setUser', payload: userData }
      ]
    }, done)
  })

  it('getChatData should commit setChatData with correct payload', done => {
    fetch.mockResponseOnce(chatData)
    testAction({
      action: actions.getChatData,
      expectedMutationsPayload: [
        { type: 'setErrorText', payload: '' },
        { type: 'setChatData', payload: chatData }
      ]
    }, done)
  })

  it('getChatList should commit chatListData with correct payload', done => {
    fetch.mockResponseOnce(chatListData)
    testAction({
      action: actions.getChatList,
      expectedMutationsPayload: [
        { type: 'setErrorText', payload: '' },
        { type: 'setChatList', payload: chatListData }
      ]
    }, done)
  })

})
