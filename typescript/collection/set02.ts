import readline from "readline-sync";

// Array com os valores definidos
const numerosSet: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);


let valoresParaExibir = "";
for (const numero of numerosSet) {
    valoresParaExibir += numero + " ";
}
console.log("Valores no Set:", valoresParaExibir.trim());

const numeroDesejado = parseInt(readline.question("\nDigite o numero que voce deseja encontrar: "));


if (numerosSet.has(numeroDesejado)) {
    // Se .has() retornar true...
    console.log(`\nO numero ${numeroDesejado} foi encontrado.`);
} else {
    // Se .has() retornar false...
    console.log(`\nO numero ${numeroDesejado} nao foi encontrado.`);
}
// Exibe o tamanho do set
console.log(`\nO tamanho do set é: ${numerosSet.size}`);

