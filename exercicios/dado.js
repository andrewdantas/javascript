/**
 * Jogo do dado
 * @author Andrew Dantas
 */

const input = require('readline-sync')

let face

console.clear()
console.log("Jogo do dado")
input.question("Aperte a tecla [ENTER] para jogar o dado")
// sorteio da face de um dado
// Math (classe matemática)
// .floor (conversão para números inteiros)
// .random() * 6 (gerador de números aleatórios 0 1 2 3 4 5)
face = Math.floor(Math.random() * 6)
console.log(`Face do dado: ${face}`)
switch (face) {
    case 0:
        console.log("⚀")
        break
    case 1:
        console.log("⚁")
        break
    case 2:
        console.log("⚂")
    case 3:
        console.log("⚃")
        break
    case 4:
        console.log("⚄")
        break
    case 5:
        console.log("⚅")
}
