// comentario de uma linha
console.log("estou desenvolvendo em java-script");

/*
comentario de mais 
de uma linha
*/

let nome = 'Mateus';
let idade = 29;
let trabalha = true;
let altura_pessoa = 1.64;
let alturaPessoa = 1.64;
let coresFavoritas = ['Laranja', 'Verde', 'Preto',"Branco", 'Azul']; //arrey
let endereco = {
    logradouro: 'Rua',
    nmlog: 'Basil',
    num: 1200,
    bairro: 'parque dos Anturios',
}; //objeto

let covid = null;
let dengue;

console.log(altura_pessoa);
console.log('Nome: ' +nome);
console.log(' O ' +nome+ ' Tem ' +idade+ ' Anos. ');

console.log(typeof(coresFavoritas));

// Aula do dia 27/02/23 sobre como saber se uma variavél é ou não um array 
const ehArray = Array.isArray(coresFavoritas);

console.log(ehArray === true ? 'É um Array' : 'Não é um Array');

if (ehArray === true) {
    console.log('É array');
} else {
    console.log('Não é um array')
}
