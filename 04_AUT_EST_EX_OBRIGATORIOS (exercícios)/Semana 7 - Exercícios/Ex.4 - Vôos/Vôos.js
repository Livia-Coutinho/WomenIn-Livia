function calculus() {
  var periodo = document.getElementById("turno");
  var total;
  console.log(periodo)

  if (document.getElementById("dia").checked){
    var nPassageiros = parseInt(document.getElementById("passageiros").value);
    console.log(nPassageiros)
    if (nPassageiros > 50) {
    total = nPassageiros * 120;
    console.log(total)
    document.getElementById("calcular").innerHTML = total;
    }
    else {
      total = nPassageiros * 200;
      console.log(total)
      document.getElementById("calcular").innerHTML = total;
    }
  } 
  
    else if (document.getElementById("noite").checked) {
    var nPassageiros = parseInt(document.querySelector("#passageiros").value);
    if (nPassageiros > 50) {
      total = nPassageiros * 80;
      document.getElementById("calcular").innerHTML = total;
    } else {
      total = nPassageiros * 100;
      document.getElementById("calcular").innerHTML = total;
    }
  }
}
