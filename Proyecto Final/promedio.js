function calcularPromedio(){
  var cantidad=parseFloat((document.getElementById("calificaciones").value));
  var promedio=0;
  var calif;
  for(var i=0;i<cantidad;i++){
    calif=prompt("Ingrese calificación "+(parseInt(i)+1),"calificación "+(parseInt(i)+1))
    calif=parseFloat(calif);
    promedio=(promedio+calif);
  }
  promedio=promedio/cantidad;
  document.getElementById('lbPromedio').innerHTML = promedio;
}
function calcula_IMC()
{
  var estatura = parseFloat(document.getElementById("estatura").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var resultado = (peso/(estatura*estatura));
  document.getElementById('lbResultado').innerHTML = resultado;
}
