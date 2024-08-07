/**
 * Estudo da estrutura de controle if-else
 * @author Andrew Dantas
 */

const input = require("readline-sync")

let idade

console.clear()
console.log("Estudo da estrtura if-else")
console.log("Validar maioridade")
idade = Number(input.question("Digite a sua idade: "))
// uso da estrutura if-else para validar a idade
if (idade < 18) {
    console.log("Você é menor de idade")
} else {
    console.log("Maior de idade")
}
