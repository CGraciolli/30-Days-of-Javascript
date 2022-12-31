const handSec = document.querySelector(".second")
const handMin = document.querySelector(".minute")
const handHour = document.querySelector(".hour")

function setSec(date){
    const sec = date.getSeconds()
    const secDeg = sec*6 + 90
    handSec.style.transform = `rotate(${secDeg}deg)`
}

function setMin(date){
    const min = date.getMinutes()
    const minDeg = min*6 + 90
    handMin.style.transform = `rotate(${minDeg}deg)`
}

function setHour(date){
    const hour = date.getHours()
    const hourDeg = hour*30 + 90
    handHour.style.transform = `rotate(${hourDeg}deg)`
}

function setDate(){
    const now = new Date()
    setSec(now)
    setMin(now)
    setHour(now)
}

setInterval(setDate, 1000)