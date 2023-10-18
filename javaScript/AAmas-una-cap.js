var formulario = document.forms.formulario_ACapi
var resultado = document.getElementById("res-aCapi")

formulario.renta.oninput = calcularAV
formulario.Capi.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.tiempo.oninput = calcularAV


function calcularAV() {
    let r = parseFloat(formulario.renta.value)
    let m = parseFloat(formulario.Capi.value)
    let n = parseFloat(formulario.tiempo.value)
    let i = parseFloat((formulario.interes.value)/100)

 

    let total = r*(((1+(i/m))**m)*((((1+(i/m))**(m*n))-1)/(i/m))*((i/m)/(((1+(i/m))**m)-1)))

    resultado.innerHTML = total.toFixed(2)
}