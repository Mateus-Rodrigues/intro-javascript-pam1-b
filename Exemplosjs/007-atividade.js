/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
    DICA: TENTE UTILIZAR A ESTRUTURA DO WHILE.
*/

let entrada = require('prompt-sync')();

console.log('Repetição');
let valor;
valor = entrada('Insira o valor inicial');
let n1 = ParseInt (valor);
valor = entrada('Insira o valor final');
let n2 = ParseInt (valor);

let contador = n1; 

do{
    contador <= n2
    contador++
} while(contador >= n2)