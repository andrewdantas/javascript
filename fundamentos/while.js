/**
 * Estudo das estruturas while do-while
 * @author Andrew Dantas
 */

const input = require('readline-sync')

// modificar os valores para testar a diferença entre while e do-while
let x = 1
let y = 1

console.clear()

while (x < 11) {
    console.log("teste da estrutura while")
    x++
}

input.question("Pressione a tecla [ENTER] para continuar")
console.clear()
do {
    console.log("teste da estrutura do-while")
    y++
} while (y < 11)