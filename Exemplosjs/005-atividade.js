/* Crie um programa que receba notas de 0 a 10 
e exiba as seguintes mensagens para cada faixa de valores 
nota <5 = I, nota >=5, e nota <6.5 = R, nota > 6.5 e 8.5 = B
e nota >= 8.5 MB, */

let entrada = require("prompt-sync")();

let n, n1, n2, n3, n4;

n = entrada('Digite sua nota: ')
n1 = parseFloat(n)
n = entrada('Digite sua nota: ')
n2 = parseFloat(n)
n = entrada('Digite sua nota: ')
n3 = parseFloat(n)
n = entrada('Digite sua nota: ')
n4 = parseFloat(n)

let media = (n1 + n2 + n3 + n4) / 4

if (media < 5) {
    console.log(' nota I')
}

if ((media >= 5) && (media < 6)) {
    console.log('Nota R')
}

if ((media > 6.5 ) && (media < 8.5)) {
    console.log('Nota B')
}

if (media >= 8.5)  {
    console.log('Nota MB')
}

/*
confirmar com o professor oque esta errado

if ((n < 0) && (n > 10)){
    console.log('Nota digitada invalida')
} else{
    if (media < 5) {
        console.log(' nota I')
    }
    
    if ((media >= 5) && (media < 6)) {
        console.log('Nota R')
    }
    
    if ((media > 6.5 ) && (media < 8.5)) {
        console.log('Nota B')
    }
    
    if (media >= 8.5)  {
        console.log('Nota MB')
    }
}
*/