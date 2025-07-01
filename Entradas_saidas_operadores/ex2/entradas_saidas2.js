const readline = require("readline-sync");

// Exercício 2

let name1 = readline.question("Qual é o seu nome? ");
let grade1 = readline.questionFloat("Digite a primeira nota: ");

let grade2 = readline.questionFloat("Digite a segunda nota: ");

let grade3 = readline.questionFloat("Digite a terceira nota: ");

let grade4 = readline.questionFloat("Digite a quarta nota: ");
console.log(`Olá ${name1}, sua nota é ${grade4}.`);

let media = (grade1 + grade2 + grade3 + grade4) / 4;
console.log(`Olá ${name1}, sua média das quatro notas é ${media.toFixed(1)}.`);
