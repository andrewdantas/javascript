/**
 * Estudo das variáveis - tipagem dinâmica
 * @author Andrew Dantas
 */

console.clear()
console.log("strings____________________")
let nome = "Andrew"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texto com o conteúdo de uma variável)
console.log("jogador: " + nome) //evitar concatenar desta forma
console.log(`jogador: ${nome}`)
console.log("números____________________")
let peso = 54
let altura = 1.75
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arrendondar  2 casas decimais
// ATENÇÃO !!!
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2) 
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos____________________")
let chave = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)
