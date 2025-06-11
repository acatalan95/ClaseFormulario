const nombre = document.getElementById("name");
const appelido = document.getElementById("surname");
const profesion = document.getElementById("profesion");
const edad = document.getElementById("edad");

const nombreResultado = document.getElementById("respuestaNombre")
const apellidoResultado = document.getElementById("respuestaApellido")
const profesionResultado = document.getElementById("respuestaProfesion")
const edadResultado = document.getElementById("respuestaedad")
const mayorRespuesta = document.getElementById('respuestaMayor')

const respuestasBox = document.getElementById('respuestas')

function enviarFormulario(){
    //alert("nombre "+ nombre.value +"\napellido: "+ appelido.value);
    //nombreResultado.innerText = "Nombre: " + nombre.value
    nombreResultado.innerText = `Nombre: ${nombre.value}`
    apellidoResultado.innerText = `Apellido: ${appelido.value}`
    profesionResultado.innerText = `Profesion: ${profesion.value}`
    edadResultado.innerText = `Edad : ${edad.value}`

    if (parseInt(edad.value) < 18)  {
        //alert("La persona es menor de edad");
        mayorRespuesta.innerText = `¿es Mayor o menor?: La persona es menor de edad `;
        respuestasBox.classList.remove("modal")
        respuestasBox.classList.add("menor")

    } else {
        //alert("La persona es mayor de edad");
        mayorRespuesta.innerText = `¿es Mayor o menor?: La persona es mayor de edad `;
        respuestasBox.classList.remove("menor")
        respuestasBox.classList.add("modal")
    }
}

