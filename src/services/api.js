
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


const userData = {
    id: 888,
    user_img: "erke-rysdauletov.jpg",
    user_name: "Suzan Winterson",
    profile_description: "Today is a better day",
    user_status: "online"
}

const chatData = {
    id: 1,
    chat_img: "christopher-campbell.jpg",
    chat_name: "Annette Black",
    chat_status: "online",
    messages: [
        {id: 1, message_type: "text", time_sent: "08:15",
            message_data: "Hey, hey, hey... <br/> It's morning here in Alpes 😊",
            is_user_message: false
        },
        {id: 2, message_type: "text", time_sent: "08:15", message_data: "Send me some pictures",
            is_user_message: true},
        {id: 3, message_type: "text", time_sent: "11:40", message_data: "Ok... sending.",
            is_user_message: false},
        {id: 4, message_type: "images", time_sent: "11:40", message_data: [
                {id: 5678, src: "jean-baptiste-henry.jpg"},
                {id: 5679, src: "eddy-billard.jpg"}],
            is_user_message: false},
        {id: 5, message_type: "text", time_sent: "11:43", message_data: "😱😱😱😱😱 so beautiful",
            is_user_message: true},
        {id: 6, message_type: "text", time_sent: "11:43",
            message_data: "You need to see it by yourself. <br/> When you come?", is_user_message: false}
    ]
}

const chatListData = [
    {id: 1, chat_name: "Annette Black", last_message: "Hey, did you talk to her?", last_chatted: "2min ago",
        chat_images: ["christopher-campbell.jpg"]},
    {id: 2, chat_name: "Hey guuurll", last_message: "Brb, watch some Dark here", last_chatted: "5min ago",
        chat_images: ["tamara-bellis.jpg", "sigmund-jzz.jpg"]},
    {id: 3, chat_name: "Cameron Williamson", last_message: "Ok, Cya.  🤗?", last_chatted: "35min ago",
        chat_images: ["sigmund-jzz.jpg"]},
    {id: 4, chat_name: "Jane Cooper", last_message: "Thanks, ill call you there.", last_chatted: "1d ago",
        chat_images: ["tamara-bellis.jpg"]},
    {id: 5, chat_name: "Brennda Smily", last_message: "Sent a picture", last_chatted: "1d ago",
        chat_images: ["ana-itonishvili.jpg"]},
    {id: 6, chat_name: "Jacob Jones", last_message: "Miss a call", last_chatted: "1d ago",
        chat_images: ["john-arano.jpg"]},
]

export default {
    getUser,
    getChat,
    getChats
}
