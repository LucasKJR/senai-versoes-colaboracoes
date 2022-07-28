const pesoMinimo = 100;
const listaMaxima = 10;
const nomeCorretoDaPeca = 'aaa';

let pesoDaPeca = 102;
let listaDePeca = 8;
let nomeDaPeca = 'roda';
console.log('---------------------------------------------------------------');
console.log('Requisitos');
console.log('Peso Minimo: '+pesoMinimo)
console.log('Lista Máxima: '+listaMaxima)
console.log('---------------------------------------------------------------');
console.log('Peça em Cadastro');
console.log('Peso : '+pesoDaPeca)
console.log('Lista da peça: '+listaDePeca)
console.log('Nome da peça: '+nomeDaPeca)
console.log('---------------------------------------------------------------');




if (pesoDaPeca > pesoMinimo) {
    console.log('---------------------------------------------------------------');
    console.log('Pode cadastrar');
    console.log('---------------------------------------------------------------');

}
else {
    console.log('---------------------------------------------------------------');
    console.log('Cadastro não pode ser efetuado, peso abaixo de 100 gramas');
    console.log('---------------------------------------------------------------');

}


if (listaDePeca > listaMaxima) {
    console.log('---------------------------------------------------------------');
    console.log('Capacidade excedida');
    console.log('---------------------------------------------------------------');

}
else {

    console.log('---------------------------------------------------------------');
    console.log('Dentro da capacidade');
    console.log('---------------------------------------------------------------');

}


if (nomeDaPeca.length >= nomeCorretoDaPeca.length) {
    console.log('---------------------------------------------------------------');
    console.log('Nome válido');
    console.log('---------------------------------------------------------------');

}
else {
    console.log('---------------------------------------------------------------');
    console.log('Nome necessita de 3 caracteres para ser validado');
    console.log('---------------------------------------------------------------');

}