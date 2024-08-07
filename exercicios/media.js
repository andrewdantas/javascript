/**
 * Cálculo da média de 2 notas
 * @author Andrew Dantas
 */

//importar o pacote readline-sync (input no console)
const input = require('readline-sync')
const colors = require('colors')

// variáveis
let  nota1, nota2, media

console.clear()
console.log("Cálculo da média")
// captura da nota pelo pacote readline-sync

//entrada
nota1 = Number(input.question("Digite a nota1: "))
nota2 = Number(input.question("Digite a nota2: "))
//processamento
media = (nota1 + nota2) / 2
//saída
console.log(`Média: ${media.toFixed(1)}`)

if (media < 2) {
    console.log("Você está reprovado".red)
} else if (media >= 2 && media < 5) {
    console.log("Você está de recuperação".yellow)
} else {
    console.log("Você está aprovado".blue) 
}