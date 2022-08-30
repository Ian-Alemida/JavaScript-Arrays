const nomes = ["Ana", "Paulo", "Marcos", "Leo", " Igor", "Juão", " Paloma", " Britney"]
const notas = [7, 4.5, 8, 7.5, 3, 10, 2, 0]

const reprovados = nomes.filter((_,indice) => notas [indice] < 5)

console.log(`alunos reprovados: ${reprovados}`)