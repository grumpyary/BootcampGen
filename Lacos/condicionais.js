const readline = require("readline-sync");

// Exercício 1
let numero1 = readline.question("Digite o primeiro número: ");
let numero2 = readline.question("Digite o segundo número: ");
let numero3 = readline.question("Digite o terceiro número: ");

let soma = numero1 + numero2

if (soma > numero1 + numero2) {
  console.log(`A soma de ${numero1} e ${numero2} é maior que ${numero3}.`);
} else if (soma < numero1 + numero2) {
    console.log(`A soma de ${numero1} e ${numero2} é menor que ${numero3}.`);
} else if (soma === numero1 + numero2) {
  console.log(`A soma de ${numero1} e ${numero2} é igual a ${numero3}.`);
} else {
  console.log("Erro ao calcular a soma.");
};
