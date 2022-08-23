//Índice       0   1   2   3   4   5
const notas = [10, 5, 8.5, 9, 6.5, 9]

notas.pop() //exclui o ultimo elemento do array

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

console.log( `a media das notas é ${media}`)