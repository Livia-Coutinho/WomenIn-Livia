var g=10
var VelocidadeInicial
var AlturaMaxima
var TempoSubida
function Am ()
{
    VelocidadeInicial = document.getElementById("velocidadeInicial").value;
    AlturaMaxima= ((VelocidadeInicial*VelocidadeInicial)/2*g)
    TempoSubida= VelocidadeInicial/g
    alert("velocidade inicial = " + AlturaMaxima + "metro(s)");
    alert ("tempo de subida = " + TempoSubida + " segundo(s)")
}
