const readline = require('readline-sync');

// 1. Inicializa os contadores
let totalMenor21 = 0;
let totalMaior50 = 0;

// 2. Cria um laço que só é interrompido com uma idade negativa.
while (true) {
    const idade = parseInt(readline.question("Digite uma idade:"));

    if (idade < 0) {
        break; // Encerra o laço
    }

    if (idade < 21) {
        totalMenor21++;
    } else if (idade > 50) {
        totalMaior50++;
    }
}

// 3. Mostra o resultado final na tela
console.log(`Total de pessoas menores de 21 anos: ${totalMenor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${totalMaior50}`);
