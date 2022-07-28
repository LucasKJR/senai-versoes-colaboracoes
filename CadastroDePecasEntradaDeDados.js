let listadepecas = [];
var readlineSync = require('readline-sync')
do {
    let pesodapeca = readlineSync.question("Digite o peso da peca: ");
    if (pesodapeca > 100) {
        let nomedapeca = readlineSync.question("Digite o nome da peca: ");
        if (nomedapeca.length >= 3) {
            listadepecas.push(nomedapeca);
            console.log(listadepecas);
            let continuar = readlineSync.question("Deseja cadastrar outra peca? S / N")
            if (continuar == "S" || continuar == 's') {
                continue;
            } else {
                break;
            }
        } else {
            console.log("O nome da peça é inferior a 3 caracteres.");
            respostaNome = readlineSync.question("Deseja cadastrar uma nova peca? S / N");
            if (respostaNome == "S" || respostaNome == "s") {
                continue
            } else {
                break
            }
        }
    } else {
        console.log("O peso da peca é inválido.");
        respostaPeso = readlineSync.question("Deseja cadastrar uma nova peca? S / N");
        if (respostaPeso == "S" || respostaPeso == "s") {
            continue
        } else {
            break
        }
    }
}

while (listadepecas.length < 10)

if (listadepecas.length == 10) {
    console.log("A caixa atingiu o número máximo de pecas.")
}