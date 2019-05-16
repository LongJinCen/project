function getDate() {
    var date = new Date()
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate() + 1;
    month = month < 10 ? '0' + month: month
    day = day < 10 ? '0' + day: day
    return year + '/' + month + '/' + day
}

export {
    getDate
}