export const timeNow = (d = Date.now()) => {
    const currentDate = new Date(d)
    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
    return formattedTime
}
