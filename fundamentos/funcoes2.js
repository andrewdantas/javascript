/**
 * Estudo das Funções JS
 * Função com parâmetros
 * @author Andrew Dantas
 */

//IMPORTANTE !!! Funções atribuídas obrigatoriamente precisam ser criadas no início do código (antes de serem executadas)

// função literal com parâmetros
function somar(num1, num2) {
    return (console.log(num1 + num2))
}

somar(2, 5)

// função atribuída (função anônima) com parâmetros
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(4, 9)

// função atribuída simplificada (arrow function) com parâmetros
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(2, 2)

// função atribuída simplificada (arrow function) com parâmetros 1 linha de código (neste caso o return é implícito)

let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS (3, 3)