/**
 * Cálculo do valor do desconto
 * @author Andrew Dantas
 */

const input = require('readline-sync')

//variáveis
let total,desconto,totaldesconto

console.clear()
console.log("Cálculo do valor de Desconto")
//entrada
total = Number(input.question("Digite o valor total: "))
desconto = Number(input.question("Digite o valor do desconto em porcentagem: "))

//processamento 1 
valor = (desconto * total) / 100

//saída 1
console.log("_______________________________________________")
console.log(`Valor total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor de desconto: R$ ${valor.toFixed(2)}`)

//processamento 2
totaldesconto = total - valor

//saída 2
console.log(`Valor final: R$ ${totaldesconto.toFixed(2)}`)

