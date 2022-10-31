function normalSum(a, b) {
    return a + b
}

console.log(`Soma normal: ${normalSum(2,2)}`)

const anonymousSum = function(a, b) {
    return a + b
}

console.log(`Soma anônima: ${anonymousSum(3,8)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`Soma arrow function: ${arrowSum(5,10)}`)

const subtract = (a, b) => a -b
console.log(`Subtração: ${subtract(10, 5)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Albert']
const startingWithP = towns.filter(towns => towns[0] === 'P')
console.log(startingWithP)