/**
 * Estrutura de Dados
 * Objetos
 * @author Andrew Dantas
 */

const funcionario1 = {}
console.log(typeof(funcionario1))
// Adicionar Dados a Estrtura (CRUD Create)
funcionario1.nome = "Andrew"
funcionario1.cargo = "Aluno"
funcionario1.email = "rizexff@gmail.com"
funcionario1.salario = 2000
funcionario1.instagram = "@luvdreew"
// Listar os Dados da Estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
// Modificar os Dados da Estrutura (CRUD Update)
funcionario1.nome = "Andrew Dantas"
console.log(funcionario1)
// Excluir Dados da Estrutura (CRUD Delete)
delete funcionario1.instagram
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 500000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Ghotam City",
    estado: "New Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    salario: 20000,
    ...endereco1 //...spread operador (união de duas estruturas)
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: 20000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@outlook.com",
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    switUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.switUp()