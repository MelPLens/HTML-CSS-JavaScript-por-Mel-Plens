//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js


//Importação e Exportação
//exportantando do arquivo aula_importacao_exportacao.js

//Uso do Object Destructuring - Destruir o objeto:

// const {gets,print} = require ('./aula_importacao_exportacao');

// print(gets());


//Exercicios
/*
Uma Sala contem 5 alunos e para cada aluno foi sorteado um numero de 
1-100.
Faça um programa que recebe os 5 números sorteados para os alunos
e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98
*/

const { gets, print } = require('./aula_importacao_exportacao');

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numeroSortado = gets();
    numerosSorteados.push(numeroSortado);
}

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSortado = numerosSorteados[i];
    if (numeroSortado > maiorValor) {
        maiorValor = numeroSortado;
    }
}

print(maiorValor);