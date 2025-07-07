const readline = require('readline-sync');

const matriz = [
    [1, 2, 3], // Linha 0
    [4, 5, 6], // Linha 1
    [7, 8, 9]  // Linha 2
];

// Variáveis para a diagonal principal
let elementosDiagonalPrincipal = "";
let somaDiagonalPrincipal = 0;

// Variáveis para a diagonal secundária
let elementosDiagonalSecundaria = "";
let somaDiagonalSecundaria = 0;


// Para percorrer a matriz, usamos dois laços aninhados.
// O laço de fora controla as LINHAS e o de dentro, as COLUNAS.
// 'l' para linha e 'c' para coluna"

for (let l = 0; l < matriz.length; l++) { // 'l' vai de 0 a 2
    for (let c = 0; c < matriz[l].length; c++) { // 'c' vai de 0 a 2

        if (l === c) {
            somaDiagonalPrincipal += matriz[l][c];
            elementosDiagonalPrincipal += matriz[l][c] + " ";
        }
        // Verifica se estamos na diagonal secundária.
        
        if (l + c === matriz.length - 1) {
            somaDiagonalSecundaria += matriz[l][c];
            elementosDiagonalSecundaria += matriz[l][c] + " ";
        }
    }
}


console.log("Elementos da Diagonal Principal:");
console.log(elementosDiagonalPrincipal());

console.log("Elementos da Diagonal Secundária:");
console.log(elementosDiagonalSecundaria());

console.log("Soma dos Elementos da Diagonal Principal:");
console.log(somaDiagonalPrincipal);

console.log("Soma dos Elementos da Diagonal Secundária:");
console.log(somaDiagonalSecundaria);
