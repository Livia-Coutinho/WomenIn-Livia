function caixa () {
    var quantia = document.getElementById("quantia").value;
    var nota10 = Math.floor(quantia/10)
    var nota1 = (quantia%10)%5
    var nota5 = (quantia - nota10*10 - nota1)/5
    
    document.getElementById('saída').innerHTML = "Quantidade de notas de R$10,00:" + nota10 + "</br>" + "Quantidade de notas de R$5,00:" + nota5 + "</br>" + "Quantidade de notas de R$1,00:" + nota1
}