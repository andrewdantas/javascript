/**
 * POO - Fundamentos da programação orientada a objetos
 * Abstração - Herança - Polimorfismo
 * @author Andrew Dantas
 */

class Carro {
    constructor(nome, ano, cor) {
        this.nome = nome
        this.ano = ano
        this.cor = cor
    }

    criarCarro() {
        console.log("------------------------------------")
        console.log(`Nome do carro: ${this.nome}🚗`)
        console.log(`Ano do carro: ${this.ano}`)
        console.log(`Cor do carro: ${this.cor}`)
    }

    ligar() {
        console.log(`Ligar ${this.nome}`)
    }

    desligar() {
        console.log(`Desligar ${this.nome}`)
    }

    acelerar() {
        console.log(`Acelerar ${this.nome} ⏩`)
    }
}

class Aviao extends Carro {
    constructor(nome, ano, cor, envergadura) {
        super(nome, ano, cor)
        this.envergadura = envergadura
    }

    criarAviao() {
        console.log("------------------------------------")
        console.log(`Nome do avião: ${this.nome}✈️`)
        console.log(`Ano do avião: ${this.ano}`)
        console.log(`Cor do avião: ${this.cor}`)
        console.log(`Envergadura do avião: ${this.envergadura}`)
    }

    acelerar() {
        console.log(`Descolar o avião`)
        
    }

    aterrizar() {
        console.log(`Aterrizar ${this.nome}`)
    }
}

console.clear()
const carro1 = new Carro("GRT-R34", 1998, "Roxo")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()

const carro2 = new Carro("HB20", 2017, "Prata")
carro2.criarCarro()
carro2.ligar()
carro2.acelerar()
carro2.desligar()

const aviao1 = new Aviao("Boeing 777-300", 2015, "Preto", 60,8)
aviao1.criarAviao()
aviao1.ligar()
aviao1.acelerar()
aviao1.aterrizar()
aviao1.desligar()