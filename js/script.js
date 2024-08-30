function updateSubtotal(row, price) {
  const quantity = document.querySelector(`input[name="qtd${row}"]`).value;
  const subtotal = (quantity * price).toFixed(2).replace(".", ",");
  document.querySelector(`#sub${row}`).value = subtotal;
}

function carrinho() {
  // Peguei os valores dos subtotais com querySelector e armazenei em variáveis
  const sub1 = parseFloat(
    document.querySelector("#sub1").value.replace(",", ".")
  );
  const sub2 = parseFloat(
    document.querySelector("#sub2").value.replace(",", ".")
  );
  const sub3 = parseFloat(
    document.querySelector("#sub3").value.replace(",", ".")
  );
  const sub4 = parseFloat(
    document.querySelector("#sub4").value.replace(",", ".")
  );
  const sub5 = parseFloat(
    document.querySelector("#sub5").value.replace(",", ".")
  );
  const sub6 = parseFloat(
    document.querySelector("#sub6").value.replace(",", ".")
  );
  const sub7 = parseFloat(
    document.querySelector("#sub7").value.replace(",", ".")
  );
  const sub8 = parseFloat(
    document.querySelector("#sub8").value.replace(",", ".")
  );
  const sub9 = parseFloat(
    document.querySelector("#sub9").value.replace(",", ".")
  );
  const sub10 = parseFloat(
    document.querySelector("#sub10").value.replace(",", ".")
  );
  const sub11 = parseFloat(
    document.querySelector("#sub11").value.replace(",", ".")
  );
  const sub12 = parseFloat(
    document.querySelector("#sub12").value.replace(",", ".")
  );
  const sub13 = parseFloat(
    document.querySelector("#sub13").value.replace(",", ".")
  );
  const sub14 = parseFloat(
    document.querySelector("#sub14").value.replace(",", ".")
  );
  const sub15 = parseFloat(
    document.querySelector("#sub15").value.replace(",", ".")
  );
  const sub16 = parseFloat(
    document.querySelector("#sub16").value.replace(",", ".")
  );
  const sub17 = parseFloat(
    document.querySelector("#sub17").value.replace(",", ".")
  );
  const sub18 = parseFloat(
    document.querySelector("#sub18").value.replace(",", ".")
  );
  const sub19 = parseFloat(
    document.querySelector("#sub19").value.replace(",", ".")
  );
  const sub20 = parseFloat(
    document.querySelector("#sub20").value.replace(",", ".")
  );
  const sub21 = parseFloat(
    document.querySelector("#sub21").value.replace(",", ".")
  );
  const sub22 = parseFloat(
    document.querySelector("#sub22").value.replace(",", ".")
  );

  // Somei todos os valores dos subtotais
  const total =
    sub1 +
    sub2 +
    sub3 +
    sub4 +
    sub5 +
    sub6 +
    sub7 +
    sub8 +
    sub9 +
    sub10 +
    sub11 +
    sub12 +
    sub13 +
    sub14 +
    sub15 +
    sub16 +
    sub17 +
    sub18 +
    sub19 +
    sub20 +
    sub21 +
    sub22;

  // Exibi o valor total em uma janela de alerta
  window.alert("Você tem de pagar " + total.toFixed(2).replace(".", ","));
}
