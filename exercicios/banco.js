/**
 * Exercício de fixação do conceito de POO
 * Agência bancaria
 * @author Andrew Dantas
 */

const input = require('colors')

// classe modelo
class Conta {
    //atributos encapsulados
    constructor(numero, titular, saldo) {
        this._numero = numero
        this._titular = titular
        this._saldo = saldo
    }
    //métodos
    getNumero() {
        return this._numero
    }
    getTitular() {
        return this._titular
    }
    getSaldo() {
        return this._saldo
    }
    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
    depositar(valor) {
        this._saldo += valor
        console.log(`Crédito de RS$ ${valor.toFixed(2)}`.green)
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log(`* Débito de R$ ${valor.toFixed(2)}`.red)
            console.log("Saque recusado, saldo insuficiente".red.bold)
        } else {
            this._saldo -= valor
            console.log(`Débito de R$ ${valor.toFixed(2)}`.red)
        }
    }
    pix(valor, destino) {
        if (valor > this._saldo) {
            console.log(`PIX de R$ ${valor.toFixed(2)} não realizado, saldo insuficiente`.red.bold)
        } else {
            this._saldo -= valor
            destino.depositar(valor)
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso`.blue.bold)
        }
    }
}

class ContaPoupanca extends Conta {
    //atributos
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo)
    }
    //método
    exibirSaldoPoupanca() {
        console.log(`O saldo da conta poupança de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
    }
}

console.clear()
console.log(" ____    _    _   _  ____ ___".magenta.bold)
console.log("| __ )  / \\  | \\ | |/___ / _ \\ ".magenta.bold)
console.log("|  _ \\ / _ \\ |  \\| | |  | | | |".white.bold)
console.log("| |_) / __  \\| |\\  | |__| |_| |".white.bold)
console.log("|____/_/   \\_\\_| \\_|\\____\\___/ ".red.bold)

let cc1 = new Conta(1, "Robson Vaamonde", 3000)
console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.bold)
cc1.exibirSaldo()
cc1.depositar(100000)
cc1.exibirSaldo()
cc1.sacar(2000)
cc1.exibirSaldo()
cc1.exibirSaldo()
console.log("")

let cc2 = new Conta(2, "Sirlene Sanches", 4000)
console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.bold)
cc2.exibirSaldo()
cc2.depositar(1000)
cc2.exibirSaldo()
cc2.sacar(1000)
cc2.exibirSaldo()
console.log("")

let cc3 = new Conta(3, "Leandro Ramos", 1000)
console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.bold)
cc3.exibirSaldo()
cc3.depositar(50000)
cc3.exibirSaldo()
cc3.sacar(4000)
cc3.exibirSaldo()
cc3.sacar(7000)
cc3.exibirSaldo()
cc3.pix(10000, cc2)
console.log("")

console.log("_________________________________________")
let cp1 = new ContaPoupanca(10, "Robson Vaamonde", 50000)
console.log(`Cliente: ${cp1.getTitular()} | conta: ${cp1.getNumero()}`.yellow.bold)
cp1.exibirSaldoPoupanca()