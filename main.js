//function que faz a conta
function potencia(base, expoente) {
    if (expoente === 0) {
        return 1
    }
    return base * potencia(base, expoente - 1);
}

alert ("calculadora de potência");
let numeroBase = parseInt(prompt ('Qual é o número base?'));
let numeroExpoente = parseInt(prompt ('Qual o expoente'));

//Guarda o resultado da conta numa variável
const resultadoPotencia = potencia(numeroBase, numeroExpoente)

//Mostra um alert com o resultado e logo após, escreve na página
alert (`O resultado é:  ${resultadoPotencia}`);
document.write ('O resultado de ', numeroBase,' elevado por ', numeroExpoente, ' é: ', resultadoPotencia);
