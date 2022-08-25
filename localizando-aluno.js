const alunos = ['Laika', 'Juão', 'Pamela', 'Jhonson']
const mediaDosAlunos = ['10', '4', '7.5', '8']

const listaDeNotasEAlunos= [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ' sua media é ' + listaDeNotasEAlunos [1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota('Laika'))