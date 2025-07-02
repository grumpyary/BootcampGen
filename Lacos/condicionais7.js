const readline = require('readline-sync');

console.log("--- Calculadora Simples ---");
console.log("Código | Operação");
console.log("------------------");
console.log("1      | Soma");
console.log("2      | Subtracao");
console.log("3      | Multiplicacao");
console.log("4      | Divisao");
console.log("------------------");

let numero1 = parseFloat(readline.question("Digite o primeiro numero: "));
let numero2 = parseFloat(readline.question("Digite o segundo numero: "));
let codigoOperacao = parseInt(readline.question("Operacao: "));


switch (codigoOperacao) {
    case 1:
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
        break;
    case 2: 
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
        break;
    case 4:
        if (numero2 !== 0) {
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
        } else {
            console.log("Erro");
        }
        break;
    default:
        console.log("Operacao invalida");
        break;
}
