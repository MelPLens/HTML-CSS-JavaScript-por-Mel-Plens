//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js

//"conversar" com o terminal:
//console.log("Oi!"); 


//Variaveis e Constantes

//Let
//let variavel =10; //pode ser modificada.
//variavel=20

//Const
//const pq=3.54; //const é constante e nao muda.


//Teste 1
//let variavel =10;
//console.log(variavel);

//Desafio 1
//Faça um programa para calcular o valor de uma viagem
//Você terá 3 variaveis, sendo elas:
//1- Preço do combustivel
//2- Gasto medio de combustivel do carro por Km
//3- Distancia em KM da viagem;

//Desenvolvimento do Desafio

//const precoCombustivel= 5.79; // em ingles é o ponto //
//const kmPorLitros = 10;
//const distanciaEmKm = 100;

//Calculo

//const litrosConsumidos= distanciaEmKm/kmPorLitros;
//const valorGasto = litrosConsumidos* precoCombustivel;
//console.log(valorGasto.toFixed(2)); //arrendondando para duas casas decimais.

//valor ficou grande e precisa fazer um arredondamento das casas decimais
//variavel em "texto".

// ESTRUTURAS CONDICIONAIS

//CONCEITO DE BOOLEAN E CONDICIONAIS

//BOOLEAN - VERDADEIRO OU FALSO (Binário 0 e 1)
//EXEMPLO:

//const camisaRenanAzul = true;
//const camisajoseAzul = false;

//Prático
//const numero = 3;

//const numeroPar = (numero % 2) === 0; 

//console.log(numeroPar);

//Iguais ===

// = um é apenas para atribuição
// == dois é para igualdade
// === três é para respeitar mais um tipo 

//Estrutura condicional com If e Else

//const numero = 3;

//const numeroPar = (numero % 2) === 0; 


// if(numeroPar){
// console.log("Par");
// }

// if(!numeroPar){ //negacao
//     console.log("Impar");
//     }

//     //ou

//     if(numeroPar){
//         console.log("Par");
//     } else{
//      console.log("Impar");
//      }


//outro exemplo:
//formato invalido, como colocar:

// const numero = 0;

// const numeroDivisivelPor5 = (numero % 5) === 0; 

// if (numero ===0){
// console.log("O numero é inválido");
// } else if(numeroDivisivelPor5){ // caso seja verdadeiro continua
//       console.log("Sim");
// } else{
//    console.log("Não");
// }


//Desafio 1.2 Incrementado

//Faça um programa para calcular o valor de uma viagem
//Você terá 3 variaveis, sendo elas:
//1- Preço do etanol
//2- Preço da gasolina
//3- o tipo de combustivel que esta no seu carro
//4- Gasto medio de combustivel do carro por Km
//5- Distância em KM de viagens
//Imprima no console o valor que será gasto para realizar a viagem.


// const precoEtanol = 5.79;
// const precoGasolina = 4.69;
// const tipoCombustivel = 'Gasolina';
// const distanciaEmKm = 420;
// const kmPorLitros = 10;

// const litrosConsumidos = distanciaEmKm / kmPorLitros;


// if (tipoCombustivel === 'Etanol') {
//     const valorGasto = litrosConsumidos * precoEtanol;
//     console.log(valorGasto.toFixed(2));

// } else {
//     const valorGasto = litrosConsumidos * precoGasolina;
//     console.log(valorGasto.toFixed(2));

// }


//alt+shift+ f para formatar o codigo


//Desafio 2 (Media das notas)
//Faça um algoritmo que dado as 3 notas tiradas 
//por um aluno no semestre da faculdade
//calcule e imprima a sua media e sua classificação conforma tabela abaixo:

//Media = (nota 1 + nota 2 + nota 3 ) / 3 ;

//Classificação
//- Média menor que 5, reprovação.
//- Média entre 5 e 7, recuperação.
//- Média acima de 7, passou de semestre.

// const nota1 = 7;
// const nota2 = 8;
// const nota3 = 9;
// const media = (nota1 + nota2 + nota3) / 3;

// if (media < 5) {
//     console.log('Reprovado');
// } else if (media >= 5 && media <=7) {
//     console.log('Recuperação');
// } else {
//     console.log('Passou de semestre!')
// }



//Desafio 3 (IMC)
//IMC - Indicação de pesso sobre a pessoa adulta
//Formula IMC:
//IMC=peso/(altura * altura)

//Elabore um algoritmo que dado o peso e a altura de um adulto
//mostre sua condição de acordo com a tabela abaeixo:

//IMC em adultos - Condição:
// Abaixo de 18.5 -Abaixo do peso.
// Entre 18.5 e 25 - Peso normal.
// Entre 25 e 30 - Acima do peso.
// Entre 30 e 40 - Obeso.
// Acima de 40 - Obesidade Grave.


// const peso = 75;
// const altura = 1.53;
// const CalculoImc = peso / (altura * altura);



// if (CalculoImc < 18.5) {
//     console.log('Abaixo do Peso');

// } else if (CalculoImc >= 18.5 && CalculoImc <= 25) {
//     console.log('Peso Normal');

// } else if (CalculoImc >= 25 && CalculoImc <= 30) {
//     console.log('Acima do Peso');

// } else if (CalculoImc >= 30 && CalculoImc <= 40) {
//     console.log('Obeso');

// }else {
//     console.log('Obesidade Grave');
// }


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


// const preço = 50;
// const condicaoPagamento = 3;

// if (condicaoPagamento === 1) {
//     console.log(preço-(preço * 0.1));

// } else if (condicaoPagamento === 2) {
//     console.log(preço-(preço * 0.15));

// } else if (condicaoPagamento === 3) {
//     console.log(preço);

// }else  {
//     console.log(preço + (preço * 0.1));

// }