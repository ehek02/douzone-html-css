console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    let hour = new Date().getHours();
    let min = new Date().getMonth();
    let second = new Date().getSeconds();

    return Number((hour * 60 * 60) + (min * 60) + second) + '초나 흘렀습니다. 시간을 소중히 씁시다^^';
}

function getSecondsToTomorrow() {
    let rHour = 24 - new Date().getHours();
    let rMin = 60 - new Date().getMonth();
    let rSecond = 60 - new Date().getSeconds();

    return Number((rHour * 60 * 60) + (rMin * 60) + rSecond) + '초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^';
}
