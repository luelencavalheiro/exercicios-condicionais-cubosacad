const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3700000;
const limiteDeRendimento = 2855970

if (aposentada == true || portadoraDeDoenca == true) {
    console.log("ISENTA")
}
else if (totalDeRendimentos <= limiteDeRendimento) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else {
    console.log("PEGA LEÃO")
}