let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade: ');

if (idade == 18) {
    console.log('Você tem idade para carteira de habilitação!');
}

if (idade > 18) {
    console.log('Você ja poderia estar derigindo se tivesse habilitação!');
}

if (idade < 18) {
    console.log('Você só anda de carona!');
}

// outro jeito de usar o if 

if (idade > 18) {
    console.log('Você ja poderia estar dirigindo se tivesse habilitação! ');
}else if (idade < 18) {
    console.log('Você só anda de carona! ');
}else {
    console.log('Você tem idade para carteira de habilitação! ');
}