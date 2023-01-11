const panels = document.querySelectorAll(".panel")

function toggleOpen(){
    //toggle adds a class
    this.classList.toggle("open")
}

function toggleActive(e){
    //toggle adds a class
    //we dont use e.propertyName === "flex-grow" because of Saffari
    if (e.propertyName.includes("flex")){
        this.classList.toggle("open-active")
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen))
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive))