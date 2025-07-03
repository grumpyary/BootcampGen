import readline from "readline-sync";

const numerosSet: Set<Number> = new Set<Number>();
console.log("Digite 10 números: ");

for (let i = 0; i < 10; i++) {
    // Pede um número ao usuário e o convertemos para inteiro.
    const numeroDigitado = parseInt(readline.question(`Numero ${i + 1}: `));
    // '.add()' vai adicionar o número na Collection Set.
    numerosSet.add(numeroDigitado);
}

// Set preenchido, exibe os dados.
// laço 'for...of' para percorrer todos os itens de uma Collection Set."
console.log("\nListar dados do Set:");

for (const numero of numerosSet) {
    console.log(numero);
}
