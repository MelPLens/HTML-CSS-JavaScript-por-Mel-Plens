//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js


//Funcionamento das promises e Assincronismo

//assincronismo , quando demora para executar.
//exemplo: ler um arquivo do disco, quero ler este arquivo, o sistema aciona
//vai ate o disco, e na hora que acha e  devolve lido.
//nao temos o controle, mas em qualquer momento volta.
//para lidar com assincronismo usamos as PROMISES(PROMESSA).

//CRIAR
// const promessaDeUmNumeroQualquer = new Promise( (resolve, reject)=>{
// const numero = parseInt(Math.random()*100)
// resolve(numero)
// })

// promessaDeUmNumeroQualquer
// .then((value)=>{
//     console.log(value) // quando der certo
// })
// .catch((error)=>{
//     console.error(error) // quando houver erro
// })
// .finally(()=>{
//     console.log('Finalizou!') // independente de sucesso e erro execute isso
// })

//manipulando arquivos atraves de promises

// const fs = require('fs')
// const promessaDaLeituraDoArquivoTarefasCsv = fs.promises.readFile('tarefas.csv')
// promessaDaLeituraDoArquivoTarefasCsv.then((arquivo) => {
//     console.log(arquivo.toString('utf8'))
// }).catch((error) => {
//     console.log('Deu ruim!', error)
// })



//Async Await = algo procedural
// forma de escrever o codigo assíncrono como se estivesse
//escrevendo codido síncrono,

//Exercicios
//Qual o callback utilizado para finalizar uma promessa com sucesso?
//Resposta:resolve

//Qual o método de uma "Promise" que deve ser utilizado para
// receber o resultado do processamento executado com sucesso?
// Resposta: Then
