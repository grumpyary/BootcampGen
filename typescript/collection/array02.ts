import readline from 'readline-sync';

const numerosArray: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Valores no Array:", numerosArray.join(', '));
const numeroDesejado = parseInt(readline.question("\nDigite o numero que voce deseja encontrar: "));


const posicao = numerosArray.indexOf(numeroDesejado);


if (posicao !== -1) {
    // Se a posição for diferente de -1, significa que o número foi encontrado.
    console.log(`\nO numero ${numeroDesejado} esta localizado na posicao: ${posicao}`);
} else {7
    // Se a posição for igual a -1, o número não faz parte do Array.
    console.log(`\nO numero ${numeroDesejado} nao foi encontrado.`);
}

