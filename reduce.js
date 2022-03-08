let salaJS= [7.8,8,7,10,6.5,4,10,7];
let salaJava = [6,5,8,9,5,6];
let salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum,atual)=>atual+acum,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`A média de notas da sala de JS foi: ${mediaSala(salaJS)}`)

console.log(`A média de notas da sala de Java foi: ${mediaSala(salaJava)}`)

console.log(`A média de notas da sala de Python foi: ${mediaSala(salaPython)}`)