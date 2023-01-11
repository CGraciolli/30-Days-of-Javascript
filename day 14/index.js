// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)

age = 200
console.log(age, age2)

let name = "Caro"
let name2 = name
console.log(name, name2)

name = "Carolina"
console.log(name, name2)

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log(players, team)

// You might think we can just do something like this:
team[3] = "Jaco"

// however what happens when we update that array?
console.log(team, players)

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice()
team2[0] = "Caro"
console.log(players, team2)

// or create a new array and concat the old one in
const team3 = [].concat(players)
team3[1] = "Eze"
console.log(team3, players)

// or use the new ES6 Spread
const team4 = [...players]
team4[0] = "Graciolli"


// now when we update it, the original one isn't changed
console.log(team4, players)

const team5 = Array.from(players)
team5[0] = "Lua"
console.log(team5, players)

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
const captain = person
captain.age = 99

console.log(person.age)

// how do we take a copy instead?
const leader = Object.assign({}, person, {age:70, number:1})
console.log(leader)
console.log(person)

// Or we can use object ...spread
const cap2 = {...person}
cap2.age = 10
console.log(cap2)
console.log(person)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.