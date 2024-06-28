/**
 * Conversor de moedas (Real - Euro)
 * @author Andrew Dantas
 */

const input = require('readline-sync')

let real,euro,total

console.clear()
console.log("Conversor Real - Euro")

//entrada
real = Number(input.question("Digite o total em reais a ser convertido: "))
euro = Number(input.question("Digite a cotacao do valor do euro: "))

//processamento
total = real / euro

//saída
console.log(`R$ ${real.toFixed(2)} equivalem = € ${total.toFixed(2)} euros `)
