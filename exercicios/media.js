/**
 * Cálculo da média de 2 notas
 * @author Andrew Dantas
 */

//importar o pacote readline-sync (input no console)
const input = require('readline-sync')

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