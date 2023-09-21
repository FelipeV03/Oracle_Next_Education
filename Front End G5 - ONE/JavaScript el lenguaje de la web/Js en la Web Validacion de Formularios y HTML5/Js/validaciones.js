// // Obtener el elemento del DOM con el id "birth" (presumiblemente un campo de entrada de fecha)
// const inpuitNacimiento = document.getElementById("birth");

// // Agregar un evento "blur" al campo de entrada de fecha
// inpuitNacimiento.addEventListener("blur", (e) => {
//     // Aca imprimimos el elemento que disparo el evento blur (el campo de entrada de fecha)
//     // console.log(e.target);

//     // Cuando el campo de entrada pierde el foco, llamar a la función validarNacimiento
//     validarNacimiento(e.target);
// });


// Función que valida el formulario basado en el tipo de entrada del campo
export function validarFormulario(input) {
    // Obtener el tipo de entrada del campo del atributo "data-tipo"
    const tipoInput = input.dataset.tipo;

    // Verificar si el tipo de entrada del campo tiene un validador registrado en el objeto "validadores"
    if (validadores[tipoInput]) {
        // Si hay un validador registrado para el tipo de entrada, llamar a la función de validación correspondiente
        validadores[tipoInput](input);
    }


    // Verificar si el campo de entrada es válido
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector("span").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector("span").innerHTML = mostrarMensajeError(tipoInput, input);
    }
}

const mensajesDeError = {
    // Registro del mensaje de error
    nombre: {
        valueMissing: "El campo no puede estar vacio"
    },
    email: {
        valueMissing: "El campo no puede estar vacio",
        typeMismatch: "El campo debe ser un correo electrónico",
    },
    password: {
        valueMissing: "El campo no puede estar vacio",
        tooShort: "El campo debe tener al menos 6 caracteres",
    },
    nacimiento: {
        valueMissing: "El campo no puede estar vacio",
        customError: "Debe ser mayor de edad",
    },
    numero: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El campo debe ser un número de teléfono",
    },
    numero: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El campo debe ser un número de teléfono",
    },
    direccion: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El campo debe ser una dirección",
    },
    ciudad: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El campo debe ser una ciudad",
    },
    estado: {
        valueMissing: "El campo no puede estar vacio",
        patternMismatch: "El campo debe ser un estado",
    },
}

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "tooShort",
    "rangeUnderflow",
    "rangeOverflow",
    "customError",
    "patternMismatch"
];


// Objeto "validadores" que contiene funciones de validación para diferentes tipos de entradas
const validadores = {
    // Registro de la función de validación para el tipo de entrada "nacimiento"
    nacimiento: input => validarNacimiento(input),
};


function mostrarMensajeError(tipoInput, input) {
    let mensaje = "";
    tiposDeErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoInput][error];
        }
    });
    return mensaje;
}


// Función que valida la fecha de nacimiento
function validarNacimiento(input) {
    // Obtener el valor del campo de entrada (cadena con formato de fecha)
    // const fehcaNacimiento = inpu.value;
    const fechaNacimiento = new Date(input.value);
    // console.log(fehcaNacimiento);

    // Variable para almacenar el mensaje de validación
    let mensaje = '';

    // Verificar si la fecha de nacimiento indica que el usuario es mayor de edad
    if (!mayorDeEdad(fechaNacimiento)) {
        // Si no es mayor de edad, establecer el mensaje de validación
        mensaje = "Debe ser mayor de edad";
    }

    // Establecer el mensaje de validación en el campo de entrada
    input.setCustomValidity(mensaje);
}

// Función que verifica si la persona es mayor de edad
function mayorDeEdad(fecha) {
    // Obtener la fecha actual
    const fechaActual = new Date();
    // Imprimimos la fecha actual y la fecha de nacimiento para verificar que sean correctas
    // console.log(fecha, "---" ,fechaActual);

    // Calcular la edad restando el año de nacimiento del año actual
    const edad = fechaActual.getFullYear() - fecha.getFullYear();
    // Mostrar la edad del usuario en la consola (opcional, solo para fines de depuración)
    console.log("Edad del usuario: ", edad, " años");

// Verificar si la edad es mayor o igual a 18 años
if (edad >= 18) {
    // Si la edad es mayor o igual a 18, mostrar mensaje de que el usuario es mayor de edad
    console.log("El usuario es mayor de edad");
} else {
    // Si la edad es menor a 18, mostrar mensaje de que el usuario es menor de edad
    console.log("El usuario es menor de edad");
}

    // Verificar si la edad es mayor o igual a 18 años
    return edad >= 18;
}