/**
 * Soma dos números dentro de um laço for
 * @author Andrew Dantas
 */

let soma = 0
console.clear()

for (let i = 1; i < 101; i++) {
    console.log(`${i} + ${soma} = ${soma += i}`)
}
