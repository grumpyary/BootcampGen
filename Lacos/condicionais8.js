const readline = require('readline-sync');

console.log("--- Tabela de Cargos e Reajustes ---");
console.log("Codigo da operacao | Operacao");
console.log("   1   |    Saldo  ");
console.log("   2   |    Saque");
console.log("   3   |    Deposito");

let codigoOperacao = parseInt(readline.question("Digite o codigo da operacao: "));
let saldo = 1000.00; // Saldo inicial

switch (codigoOperacao) {
    case 1:
        console.log("Operacao - Saldo");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        console.log("Operacao - Saque");
        let valorSaque = parseFloat(readline.question("Valor: R$ "));
        if (valorSaque <= 0) console.log("Erro. Valor do saque deve ser positivo.");
        else if (saldo < valorSaque) console.log("Saldo insuficiente.");
        else {
            saldo -= valorSaque;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;
    case 3:
        console.log("Operacao - Deposito");
        let valorDeposito = parseFloat(readline.question("Valor: R$ "));
        if (valorDeposito <= 0) console.log("Erro. Valor do deposito deve ser positivo.");
        else {
            saldo += valorDeposito;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;
    default:
        console.log("Operacao invalida");
        break;
}
