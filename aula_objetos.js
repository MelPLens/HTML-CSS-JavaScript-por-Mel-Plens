//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js

//Objetos

// const pessoa = {
//     nome: 'Mel',
//     idade: 19,
//     //métodos para objetos
//     descrever: function () {
//         console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
//       }
// }

// //conseguimos alterar :
// pessoa.nome='Bruno';
// pessoa.idade= 20;

// pessoa.descrever();

// //acessando dinamicamente os valores do objeto
// console.log(pessoa['nome']);



// quando a const era mel:

// //conseguimos incrementar apos a criaco do objeto:
// mel.altura = 1.53;

// //deletando:

// delete mel.nome;


// //executando
// console.log(mel.nome);
// console.log(mel.idade);
// console.log(mel.altura);
// console.log(mel);





//Classes


//classe é a definicao do obejto.
//instancia é uma ocorrência daquele objeto.
// para não repetir varias const mel por exemplo:

// class Pessoa {
//     nome;
//     idade;
//     descrever() {
//         console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);

//     }
// }
// //instancia da classe Pessoa:
// const mel=new Pessoa();
// mel.nome='Mel Plens';
// mel.idade= '19';
// console.log(mel);
// mel.descrever();


// const Bruno=new Pessoa();
// Bruno.nome='Bruno ';
// Bruno.idade= '20';
// console.log(Bruno);
// Bruno.descrever();


//Com Construtor:

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome,idade) {
//         this.nome = nome;
//         this.idade= idade;
//         this.anoDeNascimento=2023 - idade;
//     }

//     descrever() {
//         console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);

//     }
// }
// //instancia da classe Pessoa:
// const mel = new Pessoa('Mel',19);
// const Bruno = new Pessoa('Bruno',20);
// mel.descrever();
// Bruno.descrever();
// console.log(mel);
// console.log(Bruno);

//Funções recebendo objetos:

// class Pessoa {
//     nome;
//     idade;
//     anoDeNascimento;

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2023 - idade;
//     }

//     descrever() {
//         console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);

//     }
// }
// //comparando pessoas:
// function compararPessoas(p1, p2) {
//     if (p1.idade > p2.idade) {
//         console.log(p1.nome + ' é mais velho que ' + p2.nome);
//     } else if (p2.idade > p1.idade) {
//         console.log(p2.nome + ' é mais velho que ' + p1.nome);
//     } else {
//         console.log(p1.nome + ' e ' + p2.nome + ' tem a mesma idade');
//     }
// }


// const mel = new Pessoa('Mel', 19);
// const bruno = new Pessoa('Bruno', 20);
// compararPessoas(mel,bruno);

//Exercicios

/*Exercicio 1
Crie uma classe para representar carro
os carros possuem uma marca,uma cor e um gasto médio de combustivel 
por kilometro rodado, crie um metodo que dado a quantidade
de quilometros e o preço do combustivel nos dê o valor gasto em 
reais para realizar o percurso.
*/

// class Carro {
//     marca;
//     cor;
//     gastoMedioporKm;

//     //caso seja obrigatorio crie o construtor

//     constructor(marca, cor, gastoMedioporKm) {
//         this.cor = cor;
//         this.marca = marca;
//         this.gastoMedioporKm = gastoMedioporKm;

//     }

//     calcularGastoViagem(distancia, precoCombustivel) {
//         return distancia * this.gastoMedioporKm * precoCombustivel;

//     }
// }
// const fusca = new Carro('fiat', 'cinza', 1 / 12);
// console.log(fusca.calcularGastoViagem(70,5));
// const yaris = new Carro('Yaris', 'cinza', 1 / 5);
// console.log(yaris.calcularGastoViagem(70,5));


/*Exercicio 2
Crie uma classe para representar pessoas
para cada pessoa teremos os atributos nome,peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC 
(IMC= peso/altura*altura));
instancie uma pessoa chamada jose que tenha 70kg de peso
e 1,75 de altura e peça para jose dizer o valor do seu IMC;
*/

// class pessoa {
//     nome = this.nome;
//     peso = this.peso;
//     altura = this.altura;

//     constructor(nome, peso, altura) {
//         this.peso = peso;
//         this.nome = nome;
//         this.altura = altura;

//     }

//     calcularImc() {
//         return this.peso / (this.altura * this.altura);

//     }

//     classificarImc() {
//         const imc = this.calcularImc();
//         if (imc < 18.5) {
//             return 'Abaixo do Peso';

//         } else if (imc >= 18.5 && imc <= 25) {
//             return 'Peso Normal';

//         } else if (imc >= 25 && imc <= 30) {
//             return 'Acima do Peso';

//         } else if (imc >= 30 && imc <= 40) {
//             return 'Obeso';

//         } else {
//             return 'Obesidade Grave';
//         }
//     }
// }

// const jose = new pessoa('José', 70, 1.75);
// console.log(jose.classificarImc('José', 70, 1, 75));