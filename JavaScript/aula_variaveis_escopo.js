//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js

//VARIAVEIS

// var var1 =10;
// var var2 = 'Teste';

// console.log(var1+var2);

//HOISTING - INÇAMENTO 

//primeiro exemplo, podemos chamar a funcao apos a sua declaracao.
// function teste(){
//     console.log('teste');
// }

// teste();

//segundo exemplo, tambem podemos chamar a funcao antes a sua declaracao.
// function teste(){
//     console.log('teste');
// }

// teste();
//isso se chama hoisting, o inçamento de jogar para cima 

//Diferença de var, let e const

//var sempre e permitesofre o hoisting 

// let se restringe a qualquer bloco:
// if(true){
//     let var1 = 10;
// }
// console.log(var1);

//const restringe ao bloco e nao deixa ser alterado.


//tipo de dados

//Wrappers,coerção de tipos, boolean, null e undefined.

/* podem ser alterado
boolean:
true, false
new Boolean(true) // objeto
null
undefined
number
string
symbol
*/

//object - nao pode ser alterado

//coerção de dados com + :
// console.log(10 + "10")

// //coerção de dados com - :
// console.log(10 - "10")

//Comparação:
// console.log(10 == "10") // comparar

// console.log(10 === "10")// desconsidera o tipo

// //Diferente:
// console.log(10 != "10")

// console.log(10 !== "10")



//Boolean

// console.log(!''); // tornar verdadeiro
// console.log(!!'10'); // tornar verdadeiro
// const nome =' ';

//  if(nome){
//      console.log('preenchido');// o vazio é preenchido para false  
//  }


//Diferença do null e undefined

// null - ausencia de valor :
//  const x = null;
//  console.log(x);

//  //undefined -  variavel não existe, ausencia de declaracao;
// let y;
// console.log(y);


/*
Numbers
String
Symbol
*/

//todos os numeros sao numbers
// tres tipos de dados que nao numbers:
// +Infinity  -Infinity  e NaN.
//Double precision 64-bit binary format IEEE 754
// entender porque gerava esse restante das contas  no site 30000000000004.com fala sobre

//string
// 'texto' //melhor para js
// "texto" // melhor para html
// `Texto` //para concatenar

// //Symbol
// //imutavel
// const x = Symbol ('10');
// console.log(x);


//Objetos
//coleção dinamica de chave e valor.

// const x ={
//     nome : "Renan",
//     idade: 30
// }

// x.sobrenome = 'Oliveira'

// console.log(typeof x)


// const x = {
//     nome: "Renan",
//     idade: 30
// }

// //retribuir :
// x['nome']= 'Mel'
// console.log(x['nome'])

// //atraves da chave ver valor:
// console.log(x.nome)


//funções/metodos:


// const x = {
//     nome: "Renan",
//     idade: 30
// }

// x.falar = function(){
//     console.log('teste')
// }

// x.falar()

// ou dentro tambem:

// const pessoa = {
//     nome: "Renan",
//     idade: 30,
//     falar : function(){ //this para o objeto.
//         console.log('teste')
//     }
// }

// pessoa.falar()

//resumo da aula

//Qual o formato de precisão de pontos flutuantes que o JavaScript utiliza?
//Resposta: Formato IEEE 754