    
const readline = require('readline-sync');


const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

// Começamos com o -1 porque não existe posição -1 em um vetor, assim podemos identificar se o número foi encontrado ou não.
let posicaoEncontrada = -1; 

console.log("Vetor de números:", vetor);

const numeroPesquisado = parseInt(readline.question("Digite o numero que voce deseja encontrar: "));


for (let i = 0; i < vetor.length; i++) {

    if (vetor[i] === numeroPesquisado) {
        
        posicaoEncontrada = i;
        // Se o número for encontrado, armazena a posição e sai do laço
        break; 
    }
}


if (posicaoEncontrada !== -1) {
    // Se 'posicaoEncontrada' for diferente de -1, o número foi achado
    console.log(`\nO numero ${numeroPesquisado} esta localizado na posicao: ${posicaoEncontrada}`);
} else {
    // Caso contrário, a variável continua com o valor inicial -1.
    console.log(`\nO numero ${numeroPesquisado} nao foi encontrado!`);
}