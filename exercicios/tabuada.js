/**
 * Tabuada
 * @author Andrew Dantas
 */

const input = require('readline-sync')

let valor

console.clear()
console.log("Tabuada")
valor = Number(input.question("Digite o valor da tabuada: "))
console.log("")

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}