const readline = require("readline-sync");

let numero = readline.question("Digite um número: ");
console.log(`O número digitado foi: ${numero}`);

if (numero > 0) {
  console.log("O número é positivo.");
}   else if (numero < 0) {       
  console.log("O número é negativo.");
} else if (numero == 0) {
  console.log("O número é zero.");
} else {
  console.log("Erro ao identificar o número.");
}