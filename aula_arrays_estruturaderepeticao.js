//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js

//Arrays

//exemplo
const alunos = ['João', 'Vitor', 'Marina'];
//console.log(alunos);

//  //Caso queira pegar uma posição dessa lista:
//  //começa sempre do 0;

//  console.log(alunos[0]);
//  console.log(alunos[1]);
//  console.log(alunos[2]);

//  //adicionar:

//  alunos.push('Mel');
//  console.log(alunos[3]);

//  //Ou
//  alunos[4]='Bruno';
//  console.log(alunos[4]);

//  //remover:

//  console.log(alunos);
//  console.log(alunos.pop()); // sera o ultimo
//  console.log(alunos);

// assim sera o primeiro
//  console.log(alunos);
//  console.log(alunos.shift());
//  console.log(alunos);


//Necessidade da estrutura de repetição:

// const notas = [];

// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(2);
// notas.push(5);

// const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

// console.log(soma/5);

// console.log(notas.length); // tamanho da lista

//Mas e se o professor coloca mais uma prova? quebra nosso codigo!
//por isso a importancia da estrutura de repeticao:

//Praticando:

// const nome = 'Mel Plens';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);    
//     }



//Exercicio - Notas

// const notas = [];

// notas.push(5);
// notas.push(7);
// notas.push(8);
// notas.push(5);
// notas.push(6);

// let soma = 0;
// for (let i = 0; i < notas.length; i++) {
//     const nota = notas[i];
//     soma = soma + nota;
// }
// const media = soma/ notas.length;
// console.log(soma);
// console.log(media);



//Exercicio - Tabuada
//Crie um programa que dado um numero imprima a sua tabuada:

// const numero =7;
// for (let i = 1; i < 10; i++) {
//     console.log(i * numero);
// }

//Exercicio - Números Pares
//Crie um programa que seja capax de percorrer uma lista de numero e 
//imprima cada numero par encontrado:


// const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     const numero = numeros[i];

//     if (numero % 2 === 0) { // % resto da divisao por 2
//         console.log(numero);

//     }
// }