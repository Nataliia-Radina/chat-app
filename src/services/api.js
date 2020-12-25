import { userData, chatData, chatListData } from '@/services/data'

function mockFetch (dataReference) {
    return new Promise((resolve, reject) => {
        if (!dataReference) {
            reject(new Error('Something went wrong'));
        }
        setTimeout(() => {
            resolve(dataReference)
        }, 150)
    })
}
const getUser = () => mockFetch(userData)
const getChat = () => mockFetch(chatData)
const getChats = () => mockFetch(chatListData)

export default {
    getUser,
    getChat,
    getChats
}
