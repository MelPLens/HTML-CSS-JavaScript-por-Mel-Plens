//JAVASCRIPT E FUNDAMENTOS
// CODIGO INTEIRO COM COMENTARIO, PARA EXECUTAR TIRE AS //

//EXECUTAR o código usamos no terminal a seguinte escrita:
//node nomedoarquivo.js


//Importação e Exportação
//como organizamos o codigo, com as importações.
//outro programa esta no arquivo :aula_imp_expor.js

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor =entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

//objetos literal , exportando um objeto que tem a funcao gets e print
module.exports = { gets, print };