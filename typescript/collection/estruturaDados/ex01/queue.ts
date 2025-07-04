
import readline from 'readline-sync';
import { Queue } from './script';


const fila = new Queue<string>();
let opcao: number;

// 'while(true)' para que o menu continue aparecendo até que o usuário escolha sair.
while (true) {
    console.log("\n*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Adicionar Cliente na Fila            ");
    console.log("            2 - Listar todos os Clientes             ");
    console.log("            3 - Retirar Cliente da Fila              ");
    console.log("            0 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");

    opcao = parseInt(readline.question("Entre com a opcao desejada: "));

    
    switch (opcao) {
        case 1:
            const nome = readline.question("Digite o nome: ");
            fila.enqueue(nome);
            console.log("\nCliente Adicionado!");
            fila.printQueue();
            break;

        case 2:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                console.log("\nLista de Clientes na Fila:");
                fila.printQueue();
            }
            break;

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                const clienteChamado = fila.dequeue();
                console.log(`\nO Cliente ${clienteChamado} foi Chamado!`);
                fila.printQueue();
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
