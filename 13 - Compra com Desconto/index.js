//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";
//valor da mercadoria (centavos para reais)
const valorDoProduto = 13000 / 100;
const descontoCredito = valorDoProduto - (valorDoProduto * 0.05);
const descontoCheque = valorDoProduto - (valorDoProduto * 0.03);
const descontoDinheiro = valorDoProduto - (valorDoProduto * 0.10);

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${descontoCredito}`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${descontoCheque}`);
} else {
    console.log(`Valor a ser pago: R$${descontoDinheiro}`);
}


