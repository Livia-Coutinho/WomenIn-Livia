function Adição() {
    var a = Number(document.querySelector("#valor").value)
    var b = a + 1
    document.querySelector("#res_soma").innerHTML = `Resultado da adição: ${b}`
}

function Subtração() {
    var c = Number(document.querySelector("#valor").value)
    var d = c - 1
    document.querySelector("#res_sub").innerHTML = `Resultado da subtração: ${d} `

}