/**
 * Calculadora usando função
 * @author Andrew Dantas
 * @author João Fonseca
 */

const input = require('readline-sync')
const colors = require('colors')

let num1, num2, operacao
let confirma = "n"

num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
console.log("")

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular a porcentagem")
console.log("")
operacao = Number(input.question("Digite a opcao desejada: "))
console.log("-----------------------------------")

do {
    console.clear()
    num1 = Number(input.question("Digite o primeiro numero: "))
    num2 = Number(input.question("Digite o segundo numero: "))
    console.log("")

    console.log("1. Somar")
    console.log("2. Subtrair")
    console.log("3. Multiplicar")
    console.log("4. Dividir")
    console.log("5. Calcular a porcentagem")
    console.log("")
    operacao = Number(input.question("Digite a opcao desejada: "))
    console.log("-----------------------------------")
    switch (operacao) {
        case 1:
            let somarAFS = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`)
            somarAFS(num1, num2)
            break

        case 2:
            let subtrairAFS = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`)
            subtrairAFS(num1, num2)
            break

        case 3:
            let multiplicarAFS = (num1, num2) => console.log(`${num1} x ${num2} = ${num1 * num2}`)
            multiplicarAFS(num1, num2)
            break

        case 4:
            let dividirAFS = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`)
            dividirAFS(num1, num2)
            break

        case 5:
            let porcentagemAFS = (num1, num2) => console.log(`${num1} % ${num2} = ${(num1 * num2) / 100}`)
            porcentagemAFS(num1, num2)
    }

    console.log("")
    confirma = input.question("Deseja calcular novamente (s/n): ".blue)
} while (confirma === "s");