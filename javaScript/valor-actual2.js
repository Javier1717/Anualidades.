var formulario = document.forms.formulario_VA
var resultado = document.getElementById("res-valor-actual2")

formulario.renta.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = r*((1)-(1+i)**(-n))/i

    resultado.innerHTML = total.toFixed(2)
}
