// Exercício 3
const readline = require("readline-sync");

let salarioBruto = readline.questionFloat("Qual é o seu salário bruto? ");
console.log(`Seu salário bruto é ${salarioBruto}.`);

let addNoturno = readline.questionFloat("Qual é o valor do adicional noturno? ");
console.log(`Seu adicional noturno é ${addNoturno}.`);

let horasExtras = readline.questionFloat("Qual é o valor das horas extras? ");
console.log(`Seu valor de horas extras é ${horasExtras}.`);

let desconto = readline.questionFloat("Qual é o valor do desconto? ");
console.log(`Seu desconto é ${desconto}.`);

console.log (`Seu salário líquido é ${salarioBruto + addNoturno + (horasExtras * 5) - desconto}.`);
