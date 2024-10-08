/**
 * Estrutura de dados
 * Array (vetor)
 * @author Andrew Dantas
 */

// array simples
//              [0]             [1]         [2]         [3]
let times = ["Corinthians", "São Paulo", "Santos", "Palmeiras"]
console.log(times)
console.table(times)
console.log(times[0])

// array multidimensaional (matriz)
let boletim = [[8, 7, 9, 3], [4, 5, 8, 6]] // "linhas de uma tabela"
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1]) // [linha] [coluna]

// Estrutura de Dados
let alunosEM1 = ["Andrew", "André", "Davi", "Felipe", "Nicolas", "Renan"]
// Exibindo o Tamanho do Vetor
console.log(alunosEM1.length)

//CRUD (Create - Read - Update - Delete) - São as 4 Operações Básicas com Dados

// CRUD Read
console.log(alunosEM1)
console.table(alunosEM1)

// CRUD Create (Adicionando Dados ao Vetor)
alunosEM1.push("Tharles")
alunosEM1.push("Arthur")
console.log(alunosEM1)
console.table(alunosEM1)

// CRUD Update (Alterando um Registro do Vetor)
alunosEM1[4] = "Nicollas"
console.log(alunosEM1)
console.table(alunosEM1)

// CRUD (Excluindo um Registro do Vetor)
delete alunosEM1[7]
console.log(alunosEM1)
console.table(alunosEM1)

// Percorrendo um Vetor >>>>>>>>>>>>>>>>>>>>
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)
// Laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}
// forEach (Simplificação do Laço for Para Percorrer um Vetor)
notas.forEach( (n) => {
    console.log(n)
}) 

// map() Mapeamento dos Dados de Um Vetor (percorrer e Mapear)
// Exemplo 1: Adicionar 1 Ponto as Notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)
// Exemplo 2: COnversão do Sistema dse Ponto Para Letras
// NA (Não Atendeu) nota < 5
// PA (Parcialmente Atendido) nota entre 5 e 7
// A (Atendeu) nota > 7
let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return("NA")
    } else if (nc > 7) {
        return("A")
    } else {
        return("PA")
    }
})
console.log(notas)
console.log(notasConvertidas)

// Iniciando (Criando) um Vetor Como um Objeto
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

// Estrutura de Dados Usando Array e Objetos
let alunosEM3 = [
    {
        nome: "Andrew",
        idade: 17,
        bolsista: true
    },
    {
        nome: "Felipe",
        idade: 17,
        bolsista: false
    },
    {
        nome: "Andre",
        idade: 17,
        bolsista: false
    },
    {
        nome: "Renan",
        idade: 19,
        bolsista: true
    }
]

console.log(alunosEM3)
console.table(alunosEM3)

// Filtros
// Exemplo 1: Ordenas A-Z
alunosEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosEM3)
// Exemplo 2: Ordenar por Idade
alunosEM3.sort((x, y) => {
    return (x.idade - y.idade)
})
console.table(alunosEM3)

// ATENÇÂO !!!
// Na Filtragem Criar uma Cópia para Exibição (... Cópia do Array)
let alunosOrdenados = [...alunosEM3]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

// Buscas Personalizadas
// Exemplo 1: Alunos Bolsistas
console.log(alunosEM3.filter((b) => {
    return b.bolsista === true
}))
// Exemplo 2: Alunos com Idade Superior a 40 Anos
console.log(alunosEM3.filter((i) => {
    return i.idade < 19
}))