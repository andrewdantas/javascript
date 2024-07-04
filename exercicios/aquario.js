/**
 * Cálculo do volume de um aquário
 * @author Andrew Dantas
 */

const input = require('readline-sync')

//varíaveis
let comprimento,largura,altura,litros

console.clear()
console.log("Cálculo do volume de um aquario: ")
console.log("______________________________________________")

//entrada
comprimento = Number(input.question("Digite o comprimento em Cm do aquario: "))
largura = Number(input.question("Digite a largura em Cm do aquario: "))
altura = Number(input.question("Digite a altura em Cm do aquario: "))

//processamento
litros = (comprimento * largura * altura) / 1000
console.log("______________________________________________")

//saída
console.log(`No aquario cabem ${litros.toFixed(1)} litros`)
