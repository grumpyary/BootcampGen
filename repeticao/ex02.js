const readline = require('readline-sync');


let totalPares = 0;   // Variável para armazenar a contagem de números pares
let totalImpares = 0; // Variável para armazenar a contagem de números ímpares


for (let i = 1; i <= 10; i++) {
 
    const numero = parseInt(readline.question(`Digite o ${i}º numero: `));
    
    // Usa o operador (%) para verificar se o número é par ou ímpar
    // Se o resto da divisão por 2 for 0, o número é par.
    if (numero % 2 === 0) {
        totalPares++; // Incrementa o contador de números pares
    } else {
        totalImpares++; // Incrementa o contador de números ímpares
    }
}


console.log(`Total de numeros pares: ${totalPares}`);
console.log(`Total de numeros impares: ${totalImpares}`);