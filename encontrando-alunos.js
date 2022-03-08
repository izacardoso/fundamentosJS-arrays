let alunos = ['Ana', 'Lucas', 'Felipe'];
let mediaAlunos = [10,7,9]

let listaAlunosEMedias = [alunos, mediaAlunos];

let exibeNomeMedia = (nomeDoAluno) => {
    if(listaAlunosEMedias[0].includes(nomeDoAluno)){
        let indice= listaAlunosEMedias[0].indexOf(nomeDoAluno)

        return listaAlunosEMedias[0][indice] + ' sua média é ' + listaAlunosEMedias[1][indice]
    } else{
        return 'Alunos não encontrado'
    }
}

console.log(exibeNomeMedia("Felipe"))