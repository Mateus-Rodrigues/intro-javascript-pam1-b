//chamando a biblioteca que será ultilizada
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');

console.log('Nome digitado foi: ' + nome);

// Toda entrada é String
let num; // criação de variavél

// entrada
num = entrada('Digite um número: ');
let n1 = parseInt(num);
num = entrada('Digite outro número: ');
let n2 = parseInt(num);


// processamento
let soma = n1 + n2

// saida
console.log('A soma do número: ' + n1 + ' com o numero: ' + n2 + ' é: ' + soma)

entrada();
console.log('Fim do programa')