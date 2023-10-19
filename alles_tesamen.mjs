import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let naam;
let namen = [];

while (naam != '') {
    naam = await userInput.question("Geef een naam: ");
    namen.push(naam);
}
namen.pop();

console.log(namen);

process.exit(); 