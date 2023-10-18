var formulario = document.forms.formulario_TiempoAmortizaciones
var resultado = document.getElementById("res-TiempoAmortizaciones")

formulario.renta.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let v = parseFloat(formulario.monto.value)
    let i = parseFloat((formulario.interes.value)/100)
    let total = (Math.log10(r) - Math.log10(r-i*v))/ (Math.log10(1+i))


    resultado.innerHTML = total.toFixed(2)
}