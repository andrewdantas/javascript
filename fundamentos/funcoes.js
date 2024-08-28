/**
 * Estudo das Funções JS
 * Função simples
 * @author Andrew Dantas
 */

function hello() {
    console.log("Hello function")
}
// função simples (literais)
function hello() {
    console.log("Helllo Function")
}
// para executar uma função basta escrever o nome dela seguido de parênteses
hello()
// console.log(typeof(hello))

// função atribuída (função anônima)
const hello2 = function () {
    console.log("Hello function atribuída")
}
//console.log(typeof(hello2))
hello2()

// função atribuída simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
}

hello3()

// função atribuída simplificada (arrow function) 1 linha de código
const hello4 = _ => console.log("Hello arrow function one line")

hello4()