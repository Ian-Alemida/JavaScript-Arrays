const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, soma) => soma + acum,0)
    return somaDasNotas/notasDaSala.length  
}

console.log(`A media da sala de JavaScript é: ${mediaSala(salaJs)}`)
console.log(`A media da sala de Java é: ${mediaSala(salaJava)}`)
console.log(`A media da sala de Python é: ${mediaSala(salaPython)}`)

const notas = [10, 6, 8, 4]

const media = notas.reduce((acum, soma) => soma + acum,0)/notas.length
console.log(`a media dos alunos é ${media}`)