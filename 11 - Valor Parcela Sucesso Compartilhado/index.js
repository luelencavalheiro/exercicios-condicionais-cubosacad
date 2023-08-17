//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 250000;
// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 42;
// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1100000 / 100;
// divisão do valor em centavos por 100 para conseguir ver o valor em reais
let rendaMensalEmReais = rendaMensalEmCentavos / 100;
const rendaMinima = 200000 / 100;
let calculoPorcentagemAPagar = 18 / 100;
const valorDoCurso = 1800000 / 100;

if (totalJaPagoPeloAluno >= valorDoCurso) {
    console.log("Não precisa pagar nada, pois você já quitou sua dívida. Parabéns!");
}
else if (rendaMensalEmReais > rendaMinima && mesesDecorridos <= 60) {
    let valorDaParcela = (calculoPorcentagemAPagar * rendaMensalEmReais).toFixed(2);
    console.log(`O valor da parcela desse mês é R$${valorDaParcela} reais`);
} else if (rendaMensalEmReais <= rendaMinima) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else {
    console.log("Não precisa pagar nada, pois já se passaram mais de 60 meses do curso.");
} 
