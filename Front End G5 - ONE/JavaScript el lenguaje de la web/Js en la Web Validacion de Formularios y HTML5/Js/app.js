import { validarFormulario } from "./validaciones.js";

// Obtener todos los elementos de entrada del DOM
const inputs = document.querySelectorAll("input");

// Asignar un evento "blur" a cada campo de entrada
inputs.forEach(input => {
    // Cuando un campo de entrada pierde el foco (blur), llamar a la función "validarFormulario"
    input.addEventListener("blur", (e) => {
        // Pasar el campo de entrada que desencadenó el evento "blur" a la función "validarFormulario"
        validarFormulario(e.target);
    });
});