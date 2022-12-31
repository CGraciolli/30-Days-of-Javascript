function playSound(e) {
    const audio = document.querySelector(`audio[data-key=${e.key}]`)
    const key = document.querySelector(`.btn[data-key=${e.key}]`)
    if(!audio)return
    audio.currentTime = 0 //rewind to the start
    audio.play()
    key.classList.add("playing")
}

const keys = document.querySelectorAll(".btn")

window.addEventListener("keydown", playSound)

function removeTransition(e){
    if(e.propertyName != "transform") return
    this.classList.remove("playing")
}

keys.forEach(key =>
    key.addEventListener("transitionend", removeTransition)
)

