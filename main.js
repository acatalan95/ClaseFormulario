const nombre = document.getElementById("name");
const appelido = document.getElementById("surname");

const nombreResultado = document.getElementById("respuestaNombre")
const apellidoResultado = document.getElementById("respuestaApellido")

function enviarFormulario(){
    //alert("nombre "+ nombre.value +"\napellido: "+ appelido.value);
    //nombreResultado.innerText = "Nombre: " + nombre.value
    nombreResultado.innerText = `Nombre: ${nombre.value}`
    apellidoResultado.innerText = `Apellido: ${appelido.value}`
    
}

