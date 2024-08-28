/**
 * Sorteio de um número entre 1 e 16
 * @author Andrew Dantas
 */

const input = require('readline-sync')

let sorteio

console.clear()
console.log("Sorteio")
console.log("")
input.question("Pressione a tecla [ENTER] para sortear um numero")

sorteio = Math.floor(Math.random() * 16 + 1)
console.log(`Número sorteado: ${sorteio}`)
