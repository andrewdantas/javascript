/**
 * Regra de 3
 * @author Andrew Dantas
 */

const input = require('readline-sync')

console.clear()
console.log("Cálculo do valor da porcentagem:")
console.log("X% de Y = Valor")

//variáveis
let x,y,valor

//entrada
x = Number(input.question("Digite o valor de desconto: "))
console.log(x)
y = Number(input.question("Digite o preco do produto: "))
console.log(y)
//processamento
valor = (x * y) / 100
//saída
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)

