var formulario = document.forms.formulario_RentaAMOR
var resultado = document.getElementById("res-renta-AMOR")

formulario.monto.oninput = calcularAV
formulario.tiempo.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let v = parseFloat(formulario.monto.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = v*((i*(1+i)**n)/(((1+i)**n)-1))


    resultado.innerHTML = total.toFixed(2)
}