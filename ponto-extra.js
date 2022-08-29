const notas = [10, 9, 8, 7, 6]
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(`As notas da sala eram: ${notas}.
 Após o ponto extra ficaram: ${notasAtualizadas}`)