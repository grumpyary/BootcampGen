import * as readline from 'readline-sync';

import { Stack } from './script';


const pilha = new Stack<string>();
let opcao: number;


while (true) {
    console.log("\n*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Adicionar Livro na pilha             ");
    console.log("            2 - Listar todos os Livros               ");
    console.log("            3 - Retirar Livro da pilha               ");
    console.log("            0 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");

    opcao = parseInt(readline.question("Entre com a opcao desejada: "));

    
    switch (opcao) {
        case 1:
            const nome = readline.question("Digite o nome do Livro: ");
            pilha.push(nome);
            console.log("\nLivro Adicionado!");
            pilha.printStack();
            break;

        case 2:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                console.log("\nLista de Livros na Pilha:");
                pilha.printStack();
            }
            break;

        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                const livroRetirado = pilha.pop();
                console.log(`\nO Livro ${livroRetirado} foi retirado da pilha!`);
                pilha.printStack();
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!");
            process.exit(0); // Encerra o programa

        default:
            console.log("\nOpção inválida. Tente novamente.");
            break;
    }
}
