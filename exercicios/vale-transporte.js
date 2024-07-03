/**
 * Cálculo do valor de desconto do Vale-Transporte
 * @author Andrew Dantas
 */

const input = require('readline-sync')

//variáveis
let salario,vt,vtdesconto

console.clear()
console.log("Cálculo do valor de desconto do Vale-Transporte")
//entrada
salario = Number(input.question("Digite o valor do salário: "))
vt = Number(input.question("Digite o valor do desconto em porcentagem: "))

//processamento 1 
valor = (vt * salario) / 100

//saída 1
console.log("_______________________________________________")
console.log(`Valor do salário: R$ ${salario.toFixed(2)}`)
console.log(`Desconto do Vale-Transporte: ${vt}%`)
console.log(`Valor de desconto do Vale-Transporte: R$ ${valor.toFixed(2)}`)

//processamento 2
vtdesconto = salario - valor

//saída 2
console.log(`Valor final do salário: R$ ${vtdesconto.toFixed(2)}`)