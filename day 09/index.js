const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("Hello!")

// Interpolated
console.log("Hello %s!", "Caro")

// Styled
console.log("%c Hello!", "font-size: 20px; background:violet; color:white; text-shadow: 2px 2px 0 gray")

// warning!
console.warn("It's a trap!")

// Error :|
console.error("Ops")

// Info
console.info("The Eiffel Tower can be 15 cm taller during the summer")

// Testing
//only shows the message if the assertion is false
console.assert(1 === 2, 'Wrong!')

// clearing
console.clear()

// Viewing DOM Elements
const p = document.querySelector("p")
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
        console.log(`This is ${dog.name}.`)
        console.log(`${dog.name} is ${dog.age} years old.`)
        console.log(`${dog.name} is ${dog.age*7} in dog years.`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count("Jaco")
console.count("Jaco")
console.count("Frida")
console.count("Jaco")
console.count("Jaco")
console.count("Jaco")
console.count("Frida")

// timing
console.time("fetching data")
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});