function convertor() {
  let valDolar = document.querySelector('#valDolar').value;
  let qtdDolar = document.querySelector('#qtdDolar').value;

  valDolar = parseFloat(valDolar);
  qtdDolar = parseFloat(qtdDolar);
  result = valDolar * qtdDolar;
  document.querySelector('#result').innerHTML = `Valor em reais R$: ${result.toFixed(2)}`;

}