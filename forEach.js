let numeros = [1,2,3,4,5,6,7,8,9,10]

let mult = 0

numeros.forEach(index=>{
    if(mult<numeros.length){
        numeros.forEach((tabuada,index)=>{
            console.log(`${mult} X ${index} é: ${tabuada* mult}.`)
        }
        )}
    mult++
})