//valor do produto comprado em centavos transformado para reais
const valorDoProduto = 100000 / 100;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago em reais
const valorPago = 500;
let valorCadaParcela = valorDoProduto / quantidadeDoParcelamento;
let parcelasAPagar = quantidadeDoParcelamento - (valorPago / valorCadaParcela);
console.log(`Restam ${parcelasAPagar} parcelas no valor de R$${valorCadaParcela}`);
