//Índice       0   1   2   3   4   
const notas = [10, 5, 8.5, 9, 6.5,]

notas.push(9) //Adiciona o numero 9 ao array das notas, o numero 9 entrará como o elemento de índice 5

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5]) / notas.length

console.log( `a media das notas é ${media}`)