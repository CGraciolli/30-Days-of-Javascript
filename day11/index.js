const video = document.querySelector(".viewer")
const pause_btn = document.querySelector(".toggle")
const volume = document.querySelector("input[name=volume]")
const rate = document.querySelector("input[name=playbackRate]")
const skip_buttons = document.querySelectorAll("[data-skip]")
const progress = document.querySelector(".progress")
const progress_bar = document.querySelector(".progress__filled")

function playOrPause(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚❚';
    pause_btn.textContent = icon
}

pause_btn.addEventListener("click", playOrPause)
video.addEventListener("click", playOrPause)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)

rate.addEventListener("change", ()=>{
    video.playbackRate = rate.value
})

volume.addEventListener("change", ()=>{
    video.volume = volume.value
})

function skip(){
    const time = this.dataset.skip
    video.currentTime += parseFloat(time) 
}

skip_buttons.forEach(skip_button => skip_button.addEventListener("click", skip))

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progress_bar.style.flexBasis = `${percent}%`
}

video.addEventListener('timeupdate', handleProgress)

function changeTime(e){
    new_time = (e.offsetX /progress.offsetWidth) * video.duration
    video.currentTime = new_time
}

progress.addEventListener("click", changeTime)
let mousedown = false
//if mousedown, then changeTime(e)
progress.addEventListener("mousemove", (e) => mousedown && changeTime(e))
progress.addEventListener("mousedown", () => mousedown = true)
progress.addEventListener("mouseup", () => mousedown = false)