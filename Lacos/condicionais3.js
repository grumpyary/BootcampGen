
const readline = require('readline-sync');


const nome = readline.question("Digite o Nome do doador: ");
const idade = parseInt(readline.question("Digite a idade do doador: "));
const primeiraDoacao = readline.question("Primeira doacao de sangue? (sim/nao): ") === 'sim';


const apto = (idade >= 18 && idade <= 59) || (idade >= 60 && idade <= 69 && !primeiraDoacao);


if (apto) {
    console.log(`${nome} esta apto para doar sangue!`);
} else {
    console.log(`${nome} nao esta apto para doar sangue!`);
}