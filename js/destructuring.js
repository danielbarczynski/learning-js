// Arrays
const numbers = [1, 2, 3, 4, 5, 6]
const names = ['Nathan', 'Elizabeth', 'Marcus', 'Kayla' ]

const [item1, , item3, ...rest] = numbers
console.log(item1 + " " + item3 + " " + rest)

const concatArray = [...numbers, ...names]
const concatArray2 = numbers.concat(names)
console.log(concatArray)
console.log(concatArray2)

// Functions
function sumAndMultiply(x, y) {
    return [x + y, x * y]
}

const result = sumAndMultiply(5, 5)
const [res1, res2, res3 = 'no division'] = sumAndMultiply(6, 6) 
console.log(result)
console.log([res1,  res2, res3])

//Objects
const player1 = {
    fname: 'Kyle',
    age: 33,
    favouriteFood: 'pizza',
    city: {
        street: 'pizza street',
        nr: 699
    }
}

const player2 = {
    fname: 'Sarah',
    age: 35,
    height: 180,
    weight: 80
}

const {fname, age, height = 190, city: { street }} = player1
const {fname: firstName, ...r} = player2
const concatPlayers = {...player1, ...player2} // concats into one with all props
console.log({fname, age, height, street})
console.log(firstName, r)
console.log(concatPlayers)

// Params
function printPlayer(player) {
    console.log(player)
}
function printPlayer2({fname, age, favouriteFood = 'fries'}) {
    console.log(fname + " " + age + " " + favouriteFood)
}

const print = printPlayer(player1)
const print2 = printPlayer2(player1)