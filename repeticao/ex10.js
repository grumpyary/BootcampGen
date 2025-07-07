const readline = require('readline-sync');

// Matriz para guardar as notas e um vetor para guardar as médias calculadas."

const notasParticipantes = [
    [4.0, 5.0, 7.0, 3.0],
    [2.5, 6.5, 4.7, 8.0],
    [4.8, 5.4, 9.0, 7.8],
    [10.0, 8.5, 9.5, 8.0],
    [9.0, 6.5, 7.6, 8.2],
    [5.0, 5.0, 5.0, 6.3],
    [7.0, 8.0, 9.0, 8.5],
    [5.5, 3.5, 2.5, 1.0],
    [8.0, 9.0, 10.0, 9.5],
    [5.6, 5.8, 6.5, 7.0]
];

// O vetor que armazena as médias de cada participante. Começa vazio e é preenchido a cada participante
const mediasParticipantes = [];


// Percorrer a matriz para calcular a média de cada linha (cada participante)
// Dois laços: o de fora para os participantes e o de dentro para as notas."

// O laço de fora percorre cada LINHA (cada participante). 'l' vai de 0 a 9.
for (let l = 0; l < notasParticipantes.length; l++) {

    // Variável para somar as notas. Precisa ser declarada aqui dentro do laço, para que seja zerada a cada novo participante.
    // Se declararmos fora do laço, ela acumularia as notas de todos os participantes.
    let somaDasNotas = 0;

    // O laço percorre cada COLUNA (cada nota do participante atual). 'c' vai de 0 a 3.
    for (let c = 0; c < notasParticipantes[l].length; c++) {
        // Somamos a nota atual à soma do participante.
        somaDasNotas += notasParticipantes[l][c];
    }

    // Calcula a média depois de somar as quatro notas.
    let media = somaDasNotas / notasParticipantes[l].length;

    // Adiciona a média calculada ao final do vetor de médias. Push adiciona um novo elemento ao final do vetor.
    // A média do primeiro participante vai para a posição 0, do segundo para a posição 1, e assim por diante.
    mediasParticipantes.push(media);
}

console.log("Médias dos participantes:");

// Laço simples para percorrer o vetor de médias.
for (let i = 0; i < mediasParticipantes.length; i++) {
    // Mostra a média de cada participante
    console.log(`Participante ${i + 1}: ${mediasParticipantes[i].toFixed(1)}`);
}