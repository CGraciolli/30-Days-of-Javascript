const triggers = document.querySelectorAll(".cool > li")
const background = document.querySelector(".dropdownBackground")
const nav = document.querySelector(".top")

function handleEnter(){
    this.classList.add("trigger-enter")
    setTimeout(() => this.classList.add("trigger-enter-active"), 150)
    background.classList.add("open")

    const dropdown = this.querySelector(".dropdown")
    const dropdownCoord = dropdown.getBoundingClientRect()
    const navCoord = nav.getBoundingClientRect()

    const coord = {
        height: dropdownCoord.height,
        width: dropdownCoord.width,
        top: dropdownCoord.top -navCoord.top,
        left: dropdownCoord.left -navCoord.left
    }

    background.style.setProperty("height", `${coord.height}px`)
    background.style.setProperty("width", `${coord.width}px`)
    background.style.setProperty('transform', `translate(${coord.left}px, ${coord.top}px)`)

}

function handleLeave(){
    this.classList.remove("trigger-enter", "trigger-enter-active")
    background.classList.remove("open")
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter))
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave))

