
import readlineSync from "readline-sync";


const cores: string[] = [];
console.log("Digite 5 cores: ");
for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Cor ${i + 1}: `);
    cores.push(cor);
}

console.log("\nCores digitadas: ");

for (const cor of cores) {
    console.log(cor);
}

console.log("\nOrdenar as cores:");

// Strings: automaticamente organiza os itens em ordem alfabética. Ele modifica o array original.
cores.sort();

// Array cores ordenado na tela.
for (const cor of cores) {
    console.log(cor);
}
