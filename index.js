// Média Simples

const average = (...numbers) => {
    const sum = numbers.reduce((acmu, num) => acmu + num, 0)
    return sum / numbers.length
}

console.log(average(5, 5, 10,4))

// Média Ponderada
const weightedAvarege = (...entries) => {
    const sum = entries.reduce((acmu, {number, weight}) => acmu + (number * (weight ?? 1)),0)
    const weightSum = entries.reduce((acmu, entry) => acmu + (entry.weight ?? 1), 0)
    return sum / weightSum
}
console.log(`Média Ponderada: ${weightedAvarege(
    {number: 9, weight: 3},
    {number: 7,},
    {number: 10, weight: 1},
)}`)

// Merdiana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)

    if(orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)

}
console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

// Moda

const mode = (...numbers) => {
    const quantities = numbers.map(num => [num, numbers.filter(n => num === n).length])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}
console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
