let shift_pressed = false

let lastChecked

const checkboxes = document.querySelectorAll("input")

window.addEventListener("keydown", (e) => {
    if(e.key == "Shift"){
        shift_pressed = true
    }
})

window.addEventListener("keyup", (e) => {
    if(e.key == "Shift"){
        shift_pressed = false
    }
})

function handleCheck(e){
    let inBetween = false
    if (shift_pressed && this.checked){
        checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween
        }

        if (inBetween){
            checkbox.checked = true
        }
    })
    }
    lastChecked = this
}

checkboxes.forEach(checkbox =>{
    checkbox.addEventListener("change", handleCheck)
})

