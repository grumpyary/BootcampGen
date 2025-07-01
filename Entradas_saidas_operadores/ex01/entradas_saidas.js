const readline = require("readline-sync");

const nome = readline.question("Qual é o seu nome? ");
const salario = readline.questionFloat("Qual é o seu salário? ");

console.log(`Olá ${nome}, seu salário é ${salario}.`);

const abono = readline.questionInt("Digite seu abono ");

console.log(`Olá ${nome}, seu salário com abono é ${salario + abono}.`);
    