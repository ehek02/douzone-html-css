function getWeekDay(year, month, date) {
    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    let day = new Date(year + '-' + month + '-' + date);

    return WEEKDAY[day.getDay()];
}

console.log(getWeekDay(2022, 6, 21));
console.log(getWeekDay(2022, 12, 12));



