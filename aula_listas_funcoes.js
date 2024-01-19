//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js

//Funções

//First Class Functions
//Higher Order Functions 


//Atribuindo uma funçao a varivel:

// function falarMeuNome(){
//     console.log('Meu nome é mel')
// }

// const referenciaNova= falarMeuNome
// referenciaNova()


//Atribuindo uma funçao a uma função:
// function falarMeuNome() {
//     console.log('Meu nome é Mel')
// }

// function falarMeuNomeCompleto(falarMeuNome) {
//     falarMeuNome()
//     console.log('Mel Plens Angelis')
// }

// falarMeuNomeCompleto(falarMeuNome)

//Function Declaration
//sofre o hoisting

// function nomeDaFuncao() {
//     console.log('nome da funcao')
// }

// //Function Expression
// // nao sofre hoisting
// const nomeDeOutraFuncao = function () {
//     console.log('nome da outra funcao')

// }

// nomeDaFuncao()
// nomeDeOutraFuncao()



//Declaracao Explicita e Arrow Function
// function funcao1() {
//  console.log (this)
// }


// //Arrow Function
// const funcao2 = () => {
//     console.log (this) // nao funciona o this

// }

// const mel = {
//     nome: 'Mel',
//     funcao1,
//     funcao2
// }

// mel.funcao1()
// mel.funcao2()


//Closures e Fechamentos
//lembra o contexto que ela foi declarada:

// function soma(x) {
//     return function (y) {
//         return x + y; //ela lembrou da sua estrutura de conta
//     }
// }

// const somaParcial = soma(10)

// console.log(somaParcial(20))
// console.log(somaParcial(30))
// console.log(somaParcial(40))

//Invocação Direta, Call, Apply e Operador New


// const pessoa = {
//     nome: 'mel',
//     idade:19
// }
// function gritar(prefixo){
//     console.log(prefixo, this.nome)
// }

// //apply

// //nao esta dentro do contexto do obj pessoa:
// gritar.apply(pessoa, ['olaaaa']) ///passa o contexto e argumento
// //call
// gritar.call(pessoa,'Olaaaa')4

//Menção honrosa aos callbacks

// function adicao(x, y) {
//     return x + y;
// }

// function multiplicacao(x, y) {
//     return x * y;
// }

// function calculadora(x, operacao, y) {
//     console.log(operacao(x, y))
// }

// calculadora(10, adicao, 20)
// calculadora(10, multiplicacao, 20)


//Manipulação de Listas

//Foreach
//Executa a ação especificada para cada elemento de uma matriz.
//Forma de percorrer a lista orientada a funções
// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// lista.forEach((value, i, listRef) => {
// console.log(value, i , listRef)
// })

//filter
//Retorna os elementos de uma matriz que atendem 
//à condição especificada em uma função de retorno de chamada.
//caso se mantem na funcao/ resultado
// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const listaDeNumerosPares= lista.filter((element) => {
//     return (element % 2 === 0)
// })

// console.log(listaDeNumerosPares)

//Map
//Chama uma função de retorno de chamada definida em cada
//elemento de uma matriz e retorna uma matriz que contém os resultados.

// class Pessoa {
//     constructor(name) {
//         this.name = name
//     }
// }
// const lista = [new Pessoa('Mel'), new Pessoa('Davi'), new Pessoa('Bruno')]

// //so o nome das pessoas
// const listaNomes = lista.map((element) => {
//     return element.name
// })
// console.log(listaNomes)


//Reduce
//percorrendo toda lista, e transformando em um unico valor.
// const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const somosTodosOsNumeros = lista.reduce((previous, current) =>{
//     return previous + current
// },0)

// console.log(somosTodosOsNumeros)



//Join e Combinação de funções de manipulação
//tranforma e junta em string:
// const lista = [{ nome: 'Mel' }, { nome: 'Davi' }, { nome: 'Bruno' }, { nome: 'Ana' }, { nome: 'Alessandra' }]

// //  pegar somente nome com A

// console.log(
//     lista.map(e => e.nome)
//         .filter((e) => e.startsWith('A'))
//         .join('; ')


// )

// //numeros separados por ;
// // console.log (lista.map((e)=>e.nome).join ('; '))


//Exercicios
//Quais características da linguagem JavaScript permitem 
//a atribuição de funções a variáveis, passagem de funções 
//por parâmetro e o retorno de funções como resposta de outras funções?

//Resposta: First Class Functions e Higher Order Functions

//Diferença das arrow functions das funcoes convencionais?
//Resposta: Sintaxe reduzida e a inexistencia do this.

//Reduce - Reduz elemento
//FotEach - Percorre o elemento
// map - transforma o elemento
//filter - filtra o elemento

//Closures é a capacidade das funções lembrarem do contexto
//onde as mesmas foram criadas

//Qual a principal diferença de
//"Function declaration" e "Function Expression"?
//A influência do Hoisting na Function declaration tem e a expression não.


