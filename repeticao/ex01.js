const readline = require("readline-sync");


let numero1 = parseInt(readline.question("Digite o primeiro numero do intervalo: "));

let numero2 = parseInt(readline.question("Digite o ultimo numero do intervalo: "));


// Verifica se o primeiro número é menor do que o segundo número.
if (numero1 < numero2) {
    // Se o intervalo for válido, exibe a mensagem indicando o intervalo
    console.log(`No Intervalo entre ${numero1} e ${numero2}:`);

    // Percorre cada número do numero1 até o numero2
    for (let i = numero1; i <= numero2; i++) {
        // Verifica se o número atual 'i' é múltiplo de 3 e 5.
        // Um número é múltiplo de 3 se o resto da divisão por 3 for 0 (i % 3 === 0).
        // Um número é múltiplo de 5 se o resto da divisão por 5 for 0 (i % 5 === 0).
        // '&&' garante que ambas as condições devem ser verdadeiras.
        if (i % 3 === 0 && i % 5 === 0) {

            console.log(`${i} é múltiplopw de 3 e 5`);
        }
    }
} else {

    console.log("Intervalo invalido!");
}
