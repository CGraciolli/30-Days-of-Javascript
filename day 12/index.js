const pressed = []
const secretcode = "jaco"
const L = secretcode.length
const jaco = document.querySelector("img")

window.addEventListener("keyup", (e) =>{
    pressed.push(e.key)
    while (pressed.length > L){
        pressed.shift()
    }
    if (pressed.join("") === secretcode){
        jaco.classList.remove("hidden")
    }
})