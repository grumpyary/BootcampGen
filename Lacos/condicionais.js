const readline = require("readline-sync");

// Exercício 1
let numero1 = readline.question("Digite o primeiro numero: ");
let numero2 = readline.question("Digite o segundo numero: ");
let numero3 = readline.question("Digite o terceiro numero: ");

let soma = numero1 + numero2

if (soma > numero1 + numero2) {
  console.log(`A soma de ${numero1} e ${numero2} e maior que ${numero3}.`);
} else if (soma < numero1 + numero2) {
    console.log(`A soma de ${numero1} e ${numero2} e menor que ${numero3}.`);
} else if (soma === numero1 + numero2) {
  console.log(`A soma de ${numero1} e ${numero2} e igual a ${numero3}.`);
} else {
  console.log("Erro ao calcular a soma.");
};
