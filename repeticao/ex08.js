const readline = require('readline-sync');
// Armazena os números em um vetor e calcula a soma, a média, os elementos nos índices ímpares e os elementos pares.
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let soma = 0;
let media = 0.0;
let elementosIndicesImpares = "";
let elementosPares = "";

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];

    if (i % 2 !== 0) {
        elementosIndicesImpares += vetor[i] + " ";
    }

    if (vetor[i] % 2 === 0) {
        elementosPares += vetor[i] + " ";
    }
}

media = soma / vetor.length;

console.log("Lugares impares:");
console.log(elementosIndicesImpares.trim());

console.log("Elementos pares:");
console.log(elementosPares.trim());

console.log(`Soma: ${soma}`);
console.log(`Media: ${media.toFixed(2)}`);
