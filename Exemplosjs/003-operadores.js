let entrada = require('prompt-sync')();

let n, n1, n2;

n = entrada('Digite um número: ');
n1 = parseInt(n);
n = entrada('Digite um número: ');
n2  = parseInt(n)

let soma, sub, multi, div, resto;

soma = n1 + n2;
sub = n1 - n2;
multi = n1 * n2;
div = n1 / n2;
resto = n1 % n2

console.log(n1 + ' + ' + n2 + ' = ' + soma );
console.log(n1 + ' - ' + n2 + ' = ' + sub );
console.log(n1 + ' * ' + n2 + ' = ' + multi );
console.log(n1 + ' / ' + n2 + ' = ' + div.toFixed(2));
console.log(n1 + ' % ' + n2 + ' = ' + resto );
console.log(n1 + ' / ' + n2 + ' = ' + parseInt(div) + ' (inteiro da divisão) ');

console.log(' ');
console.log('Fim do programa' );
entrada();