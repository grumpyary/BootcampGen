const readline = require('readline-sync');

console.log("--- Tabela de Cargos e Reajustes ---");
console.log("Código | Cargo         | Reajuste");
console.log("----------------------------------");
console.log("1      | Gerente       | 10%");
console.log("2      | Vendedor      |  7%");
console.log("3      | Supervisor    |  9%");
console.log("4      | Motorista     |  6%");
console.log("5      | Estoquista    |  5%");
console.log("6      | Técnico de TI |  8%");
console.log("----------------------------------");

let nomeColaborador = readline.question("Nome do colaborador: ");
let codigoCargo = parseInt(readline.question("Codigo do Cargo: "));
let salarioAtual = parseFloat(readline.question("Salario: R$ "));

let nomeCargo = "Cargo Desconhecido";
let percentualReajuste = 0;

switch (codigoCargo) {
    case 1:
        nomeCargo = "Gerente";
        percentualReajuste = 0.10;
        break;
    case 2:
        nomeCargo = "Vendedor";
        percentualReajuste = 0.07;
        break;
    case 3:
        nomeCargo = "Supervisor";
        percentualReajuste = 0.09;
        break;
    case 4:
        nomeCargo = "Motorista";
        percentualReajuste = 0.06;
        break;
    case 5:
        nomeCargo = "Estoquista";
        percentualReajuste = 0.05;
        break;
    case 6:
        nomeCargo = "Tecnico de TI";
        percentualReajuste = 0.08;
        break;
    default:
        console.log("Codigo de cargo nao reconhecido.");
        break;
}

let novoSalario = salarioAtual * (1 + percentualReajuste);

console.log(`\nNome do colaborador: ${nomeColaborador}`);
console.log(`Cargo: ${nomeCargo}`);
console.log(`Salário: R$ ${novoSalario.toFixed(2)}`);
