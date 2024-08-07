/**
 * Exemplo de uso da estrutura else if
 * @author Andrew Dantas
 */

const input = require('readline-sync')
const colors = require('colors')

let idade

console.clear()
console.log("Você pode votar?")

idade = Number(input.question("Qual a sua idade? "))

if (idade < 16) {
    console.log("Você não pode votar".red)
} else if (idade >= 18 && idade < 71) {
    console.log("Você é obrigado a votar".blue)
} else {
    console.log("Você pode votar mas não é obrigatório".magenta)
}