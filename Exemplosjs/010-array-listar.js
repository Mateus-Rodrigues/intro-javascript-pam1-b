let alunos = [
    {
        nome: 'Sebastião da Silva',
        dt_nasc: '11/11/1957',
        sexo: 'M'
    },
    {
        nome: 'Sebastiãna da Silva',
        dt_nasc: '10/01/1959',
        sexo: 'F'
    },
    {
        nome: 'Tião da Silva',
        dt_nasc: '01/12/1977',
        sexo: 'M'
    },
    {
        nome: 'Tiãna da Silva',
        dt_nasc: '22/06/1970',
        sexo: 'F'
    },
]

for(let cont = 0; cont < alunos.length; cont++){
    console.log((cont + 1) + ' ° aluno');
    console.log('nome: ' + alunos[cont].nome);
    console.log('Data de Nascimento: ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('---------------------------');
}

//ou faça como esta abaixo

for(var cont in alunos){
    console.log((parseInt(cont) + 1) + '° alunos: ');
    console.log('nome: ' + alunos[cont].nome);
    console.log('Data de Nascimento: ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('---------------------------');
}

