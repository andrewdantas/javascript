/**
 * APP Flex
 * @author Andrew Dantas
 */

//importação de pacotes
const input = require('readline-sync')
const colors = require('colors')

//variáveis
let etanol, gasolina 

console.clear()
console.log("Etanol ou Gasolina")

//entrada
etanol = Number(input.question("Digite o valor Etanol: "))
gasolina = Number(input.question("Digite o valor Gasolina: "))

//processamento/saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol".green)
    
} else {
    console.log("Abastecer com Gasolina".blue)   
}