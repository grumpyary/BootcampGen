const readline = require('readline-sync');


console.log("--- Menu da Lanchonete ---");
console.log("Código | Produto         | Preço");
console.log("--------------------------------");
console.log("1      | Cachorro Quente | R$ 10.00");
console.log("2      | X-Salada        | R$ 15.00");
console.log("3      | X-Bacon         | R$ 18.00");
console.log("4      | Bauru           | R$ 12.00");
console.log("5      | Refrigerante    | R$  8.00");
console.log("6      | Suco de laranja | R$ 13.00");
console.log("--------------------------------");


let codigoProduto = parseInt(readline.question("Codigo do Produto: "));

let quantidade = parseInt(readline.question("Quantidade: "));


let nomeProduto = "Produto invalido"; // Variável para armazenar o nome do produto
let precoUnitario = 0;               // Variável para armazenar o preço unitário


switch (codigoProduto) {
    case 1: // codigoProduto é case 1
        nomeProduto = "Cachorro quente";
        precoUnitario = 10.00;
        break; 
    case 2:
        nomeProduto = "X-Salada";
        precoUnitario = 15.00;
        break;
    case 3: 
        nomeProduto = "X-Bacon";
        precoUnitario = 18.00;
        break;
    case 4: 
        nomeProduto = "Bauru";
        precoUnitario = 12.00;
        break;
    case 5: 
        nomeProduto = "Refrigerante";
        precoUnitario = 8.00;
        break;
    case 6: 
        nomeProduto = "Suco de laranja";
        precoUnitario = 13.00;
        break;
    default:
        console.log("Codigo de produto não reconhecido.");

        break;
}


let valorTotal = quantidade * precoUnitario;


console.log(`Produto: ${nomeProduto}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`); 