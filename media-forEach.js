const notas = [10, 8, 5, 8]

let somaNotas = 0

notas.forEach(nota => {
    somaNotas += nota;
})

let media = somaNotas/notas.length

console.log(media)