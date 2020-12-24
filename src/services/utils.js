export const timeNow = () => {
    let currentDate = new Date()
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}
