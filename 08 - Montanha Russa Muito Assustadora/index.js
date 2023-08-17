const idade = 15;
const possuiPatologia = false;
const altura = 120;
const ehEstudante = false;


if (idade < 12 || idade > 65 || possuiPatologia == true || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante == true || idade < 18) {
    console.log("Meia entrada, 10 reais");
} else {
    console.log("Inteira, 20 reais");
}
