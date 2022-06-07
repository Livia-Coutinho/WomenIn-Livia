function calculus() {
  var periodo = document.getElementByName("turno");
  var total;

  if (periodo[0].checked) {
    var nPassageiros = parseInt(document.querySelector("#passageiros").value);
    if (nPassageiros > 50) {
      total = nPassageiros * 120;
      document.querySelector("#calcular").innerHTML =
        "O valor total é R$${total}.";
    }
    else {
      total = nPassageiros * 200;
      document.querySelector("#calcular").innerHTML =
        "O valor total é R$${total}";
    }
  } 
  
    else if (periodo[1].checked) {
    var nPassageiros = parseInt(document.querySelector("#passageiros").value);
    if (nPassageiros > 50) {
      total = nPassageiros * 80;
      document.querySelector("#calcular").innerHTML =
        "O valor total é R$${total}";
    } else {
      total = nPassageiros * 100;
      document.querySelector("#calcular").innerHTML =
        "O valor total é R$${total}";
    }
  }
}
