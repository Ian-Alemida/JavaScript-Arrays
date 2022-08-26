const notas = [10, 7, 8, 9.5, 5.5]

let somaNotas = 0

for(let i = 0; i<notas.length; i++){
    somaNotas += notas[i];
    console.log(somaNotas)
}

let media = somaNotas/notas.length;

console.log(`A media das notas é ${media}`)