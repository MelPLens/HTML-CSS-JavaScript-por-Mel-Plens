//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js

//Function 
// conseguimos " enxurgar " o codigo com uma simples funcoes

//Exemplo para mostrar nome

// function sayMyName(name){
//     console.log('Your name is: '+ name);
// }

// sayMyName('Mel Plens Angelis');


//Exemplo para calcular quadrado
// function quadrado(valor) {
//    return valor * valor;
// }

// const quadradodeDez = quadrado(10);
// console.log(quadradodeDez);


//Exemplo com incremento de juros

// function incrementarJuros(valor, percentualJuros) {
//     const valorDeAcrecimo = (percentualJuros / 100) * valor;
//     return valor + valorDeAcrecimo;
// }

// console.log(incrementarJuros(100, 10));
// console.log(incrementarJuros(100, 15));


// como organizar funções, será tudo dentro da function main

// function main() {
//     console.log('programa principal');
// }

// main();

// Desafio do IMC de variaveis sendo reorganizando com funcoes:
//as setas ao passar o mouse conseguimos "guardar"ou abrir.
// quando esta fechada aparece ...

// //Calculo
// function calcularImc(peso, altura){
//     return peso /Math.pow(altura,2);

// }

// //classificacao do IMC
// // ao inves de console.log, será return

// function classificacaoImc(imc){
//     if (imc < 18.5) {
//         return 'Abaixo do Peso';

//     } else if (imc >= 18.5 && imc <= 25) {
//         return 'Peso Normal';

//     } else if (imc >= 25 && imc <= 30) {
//         return 'Acima do Peso';

//     } else if (imc >= 30 && imc <= 40) {
//         return 'Obeso';

//   } else {
//         return 'Obesidade Grave';
//     }
// }

// // Somente para isolar o codigo principal, como se fosse gavetas e esta tudo organizado.
// function main (){
//     const peso = 64;
//     const altura = 1.53;
//     const imc = calcularImc(peso,altura);
//     console.log(imc.toFixed(2));
//     console.log(classificacaoImc(imc))
// }

// //main para executar o codigo por inteiro.
// main();


//Exercícios

//Exercício 1

// function escrevaMeuNome(nome){
//   return 'Meu nome é ' + nome;
//  }

// //Verificar maior ou menos de 18 anos



// function verificarIdade(idade) {
//     if (idade >= 18) {
//         console.log( escrevaMeuNome('Mel Plens') +' e sou Maior de idade!') ;
//     } else {
//         console.log("Menor") ;
//     }
// }

// verificarIdade(19);





//Calculcar preço sendo organizado



//Desafio 3 (Valor pago de um produto)
//Elabore um algoritmo que elabore o que deve ser pago de um produto 
//considerando o preço normal de etiqueta e a escolha do pagamento.
// utilize os codigos da tabela a seguir para ler a condição
//de pagamento escolhida e efetuar o calculo.

/*Codigo Condição de pagamento
- A vista Débito, receber 10% de desconto;
- A vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

// function aplicarDesconto(valor, desconto) {
//     return (valor - (valor *(desconto / 100)));
// }

// function aplicarJuros(valor, juros) {
//     return (valor + (valor *(juros / 100)));
// }


// const precoEtiqueta = 100;
// const condicaoPagamento = 4;

// function calculoDeValor(precoEtiqueta, condicaoPagamento) {

//     if (condicaoPagamento === 1) {
//         console.log(aplicarDesconto(precoEtiqueta, 10));

//     } else if (condicaoPagamento === 2) {
//         console.log(aplicarDesconto(precoEtiqueta, 15));
//     } else if (condicaoPagamento === 3) {
//         console.log(precoEtiqueta);

//     } else {
//         console.log(aplicarJuros + (precoEtiqueta,10));

//     }

// }

// console.log(100*0.1);