import { somar } from "./exemplosFuncao";
import readline from "readline-sync";

export function main() {

    console.log(`A soma é: ${somar(readline.questionInt('Digite o primeiro número: '), readline.questionInt('Digite o segundo número: '))}`);
}


