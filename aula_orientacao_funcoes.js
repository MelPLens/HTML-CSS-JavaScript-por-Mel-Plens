//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js


//Importação e Exportação
//como organizamos o codigo, com as importações.
//outro programa esta no arquivo :aula_imp_expor.js

// Orientação a prototipo e funções construturas.
// a herança seria o prototipo

// const pessoa = {
//     genero: 'feminino'
// }

// const mel = {
//     nome: 'mel',
//     idade: 19,
//     __proto__: pessoa //"Herança"
// }

// console.log(mel.genero)


//Funcoes

// isso da para ser resumido:
// function Pessoa(name, idade) {
//     this.name = name
//     this.idade = idade

// }

// Pessoa.prototype.falar = function () {
//     console.log(`Meu nome é : ${this.name}`) // atente-se a não colocar aspas simples '' e sim essa : ``
// }


// const mel = new Pessoa('Mel', 19)
// mel.falar()

//dessa maneira:
// class Pessoa {
//     constructor(name, idade) {
//         this.name = name,
//             this.idade = idade
//     }
//     falar() {
//         console.log(`Meu nome é : ${this.name}`)
//     }
// }

//Sobrescrita e Shadowing

//exemplo de sobrescrita, primeiro ira na mel ver sua idade,
//caso nao ache, ira na const pessoa. e se procurar na mel,
//ira imprimir o que achou.

// const pessoa={
//     idade:18
// }

// const mel = {
//     nome: 'mel',
//     __proto__: pessoa
// }

// console.log(mel.idade)

//Formas de Criação de objetos literais com prototipos

//literal
// const pessoa = {
//     idade: 18
// }

// const mel = {
//     nome: 'mel',
//     __proto__: pessoa
// }


// console.log(mel.idade)

// segunda forma
// const pessoa = {
//     idade: 18
// }


// const mel =Object.create(pessoa)
// mel.nome = 'Mel'

// console.log(mel.idade)


//Entendendo New e brincando com prototipos

// function Pessoa(nome, idade){
//     this.nome= nome
//     this.idade=idade
// }

// console.log(new Pessoa ('mel', '19'))

function Pessoa(nome, idade){
    this.nome= nome
    this.idade=idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}
 const mel ={
    genero:'Feminino'
 }

 Pessoa.call(mel , 'nome' , 19)

 console.log(mel)