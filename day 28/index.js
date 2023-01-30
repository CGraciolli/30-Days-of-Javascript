const speed = document.querySelector(".speed")
const bar = document.querySelector(".speed-bar")
const video = document.querySelector(".flex")


speed.addEventListener("mousemove", function(e) {
    const y = e.pageY - this.offsetTop
    const percent = y / this.offsetHeight
    const min = 0.5
    const max = 3
    const height = Math.round(percent * 100) + "%"
    const rate = percent*(max-min) + min
    bar.style.height = height
    bar.textContent = rate.toFixed(2) + "x"
    video.playbackRate = rate
})