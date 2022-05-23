var numero1
var numero2
var resultado

function adição() {
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    resultado = Number(numero1) + Number("numero2")
    document.getElementById("resultado").value = resultado
}

function subtração() {
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    resultado = Number(numero1) - Number("numero2")
    document.getElementById("resultado").value = resultado
}

function multiplicação() {
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    resultado = number(numero1) * number(numero2)
    document.getElementById("resultado").value = resultado
}

function divisão() {
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    resultado = number(numero1) / number(numero2)
    document.getElementById("resultado").value = resultado
}

function divisãoInt() {
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    resultado = number(numero1) / number(numero2)
    document.getElementById("resultado").value = parseInt(resultado)
}

function divisãoResto() {
    numero1 = document.getElementById("numero1").value 
    numero2 = document.getElementById("numero2").value
    resultado = number(numero1) % number(numero2)
    document.getElementById("resultado").value = resultado
}
