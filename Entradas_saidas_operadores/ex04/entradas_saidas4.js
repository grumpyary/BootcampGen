// Exercício 4
const readline = require("readline-sync");

let numero1 = readline.questionInt("Digite o primeiro número: ");
let numero2 = readline.questionInt("Digite o segundo número: ");
let numero3 = readline.questionInt("Digite o terceiro número: ");
let numero4 = readline.questionInt("Digite o quarto número: ");

console.log(`O resultado é ${(numero1 * numero2) - (numero3 * numero4)}.`);