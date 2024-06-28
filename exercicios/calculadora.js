/**
 * Calcular desconto do Vale-Transporte
 * @author Andrew Dantas
 */

const input = require('readline-sync')

let valor,desconto

console.clear()
console.log("Cálculo do desconto do Vale-Transporte")
//entrada
salario = Number(input.question("Digite o valor do salário: "))
vt = Number(input.question("Digite o valor do desconto do Vale-Transporte: "))

//processamento 1
salario = (valor * desconto) / 100

//saída 1
console.log("________________________________")
console.log(`Valor do salário: R$ ${salario.toFixed(2)}`)
console.log(`Desconto do Vale-Transporte: ${vt}`)
console.log(`Salário final: R$ ${salario.toFixed(2)}`)

