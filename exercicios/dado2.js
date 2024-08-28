/**
 * Jogo do dado - Exemplo de uso da estrutura do-while
 * @author Andrew Dantas
 */

const input = require('readline-sync')
let face
let confirma = "n"

do {
    console.clear()
    console.log("Jogo do dado")
    input.question("Aperte a tecla [ENTER] para jogar o dado")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`)
    confirma = input.question("Deseja jogar novamente (s/n): ")
} while (confirma === "s")
