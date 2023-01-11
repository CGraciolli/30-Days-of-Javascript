const hero = document.querySelector(".hero")
const text = document.querySelector("h1")
const walk = 100 //the shadow will be 100px at its longest

function shadow(e){
    const width = hero.offsetWidth
    const height = hero.offsetHeight
    // const {offsetWidth: width, offsetHeight: height} = hero
    let x = e.offsetX
    let y = e.offsetY

    // this is always hero (where we are listening to)
    //e.target is wherever we have our mouse on (could be hero os its children)
    if(this != e.target){
        x += e.target.offsetLeft
        y += e.target.offsetTop
    }

    const xWalk = Math.round((x*walk/width) - walk/2)
    const yWalk = Math.round((y*walk/width) - walk/2)

    console.log(xWalk, yWalk)
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgb(190, 158, 230),
    ${-xWalk}px ${yWalk}px 0 rgb(120, 196, 240),
    ${xWalk}px ${-yWalk}px 0 rgb(150, 237, 179),
    ${-xWalk}px ${-yWalk}px 0 rgb(237, 222, 140)
    `

}

hero.addEventListener("mousemove", shadow)

