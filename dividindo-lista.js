const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Guilherme', 'Aline', 'Andre', 'Carlos', 'Bia']

console.log(`O tamanho da lista de alunos é de: ${nomes.length}`)

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`)