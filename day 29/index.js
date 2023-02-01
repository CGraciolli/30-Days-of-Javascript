let countdown 
const display = document.querySelector(".display__time-left")
const endtime = document.querySelector(".display__end-time")
const buttons = document.querySelectorAll(".timer__button")

function timer(seconds){
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds*1000
    displayTimeLeft(seconds)
    displayEndTime(then)
    
    countdown = setInterval(() =>{
        const secondsLeft = Math.round((then - Date.now())/1000)
        if (secondsLeft < 0){
            clearInterval(countdown)
            return
        }
        displayTimeLeft(secondsLeft)
    }, 1000)

}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60)
    seconds = seconds % 60
    const time = `${minutes}:${seconds > 9 ? "" : "0"}${seconds}`
    display.textContent = time
    document.title = time
}

function displayEndTime(timestamp){
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes = end.getMinutes()

    endtime.textContent = `Be back at ${hour}:${minutes > 9 ? "" : "0"}${minutes}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener("click", startTimer))

document.customForm.addEventListener("submit", function(e){
    e.preventDefault()
    const min = this.minutes.value
    timer(min*60)
})