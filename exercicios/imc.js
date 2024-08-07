/**
 * Cálculo do IMC
 * @author Andrew Dantas
 */

const input = require('readline-sync')
const colors = require('colors')

// varíaveis
let nome, idade, peso, altura, imc;

console.clear()

console.log(" ___ __  __  ___")
console.log("|_ _|  \\/  |/ __")
console.log(" | || |\\/| | (__")
console.log("|___|_|  |_|\\___|")
console.log("")

//entrada
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso em Kg: ").replace(",", "."))
altura = Number(input.question("Digite a sua altura em Cm: "))
console.log("")
console.log("------------------------------")

//processamento
imc = peso / ((altura / 100) * (altura / 100))

//saída
console.log("Ficha do aluno".italic.bold)
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc >= 25) {
    console.log("Peso normal".green)
} else if (imc >= 30) {
    console.log("Acima do peso".yellow)
} else if (imc >= 35) {
    console.log("Obesidade I".yellow)
} else if (imc >= 40) {
    console.log("Obesidade II (severa)".red)
} else {
    console.log("Obesidade III (mórbida)".red.bold)
}
console.log("")
console.log("------------------------------")