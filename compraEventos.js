var cntCompra = [];
var readlineSync = require('readline-sync')
const eventos = [1,2,3,4]

const today = new Date();

let agora = new Date;
let dia = agora.getDate()
let mes = agora.getMonth()+1; 
let ano = agora.getFullYear()


do 

{
var cad;
var email;
var nome;
var cpf;
var telefone;
var verIdade;
var VeriEvento;
var DayDate;
var MounthDate;
var vagas=99;

cad = readlineSync.question('Ja possui cadastro?(s/n)')

if (cad == 'n')
{
    verIdade = readlineSync.question('Qual sua idade:')
    if(verIdade >= 18)
    {
    nome = readlineSync.question('Informar Nome: ')
    cpf = readlineSync.question('Informar CPF: ')
    telefone = readlineSync.question('Informar Telefone: ')
    }
    else
    {
        console.log('Sua idade não permite o cadastramento')
        break;
       
    }
}
else

{

email = readlineSync.question('Informar Email: ')

}

console.log(eventos)
VeriEvento = readlineSync.question('De qual evento deseja participar:')
do

{

 //        EVENTO LOTADO TROCAR DATA

let b = 0;

do

{

let a =0;

DayDate = readlineSync.question('Qual o DIA do evento:')

MounthDate = readlineSync.question('Qual o mes do evento:')

YearDate = readlineSync.question('Qual o ano do evento:')

if(ano <= YearDate && mes < MounthDate  || ano <= YearDate && mes == MounthDate && dia < DayDate)

{

 console.log('Cadastro Realizado')
 a++;

}

console.log('Data invalida')

}
while( a == 1 );

if(vagas > 100)
{
    console.log('O evento ' +VeriEvento+' tem ' + (100-vagas) +' vagas diponiveis')
}
else
{

console.log('Este evento esta lotado')

}

}while(b == 1)

}while (cntCompra == 'n||N||nao||não||Não||Nao')



