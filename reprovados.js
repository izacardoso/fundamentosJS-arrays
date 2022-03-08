const nomes = ['Ana', 'Clara', 'João','Vini']
const notas = [6,8,3,4]

const reprovados = nomes.filter((_,indice)=>notas[indice]<5)

console.log(`Os alunos reprovados foram ${reprovados}`)