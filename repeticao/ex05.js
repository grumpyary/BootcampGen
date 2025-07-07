
const readline = require('readline-sync');


let somaPositivos = 0; // Variável acumuladora para a soma dos positivos
let numero;            // Variável para guardar o número digitado a cada interação

console.log("Digite números inteiros. O programa irá parar quando você digitar 0.");


do {
    // Pede um número ao usuário e o converte para inteiro
    numero = parseInt(readline.question("Digite um número: "));

    // 4. Laço Condicional: verifica se o número é positivo
    if (numero > 0) {
        // Operador de Adição: adiciona o número positivo à soma total.
        somaPositivos += numero;
    }

} while (numero !== 0); // O laço continua ENQUANTO o número for diferente de zero


console.log(`A soma dos números positivos é: ${somaPositivos}`);