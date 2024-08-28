/**
 * Tabuada usando while
 * @author Andrew Dantas
 */

const input = require('readline-sync')

let x
let y = 1

console.clear()
console.log("Tabuada")
x = Number(input.question("Digite o valor da tabuada: "))
console.log("")

while (y < 11) {
    console.log(`${x} x ${y} = ${x * y}`)
    y++
}