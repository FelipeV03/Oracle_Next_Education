// ** Primer console.log **
conosle.log("Hola mundo");


// ** Variables **
var nombre = "Felipe";
let puesto = 25;
const PI = 3.1416;


// ** Tipos de datos **
// String
var nombre = "Felipe";

// Number
var edad = 25;

// Boolean
var esMayor = true;

// Array
var amigos = ["Juan", "Pedro", "Pablo"];

// Object
var persona = {
    nombre: "Felipe",
    edad: 25,
    esMayor: true,
    amigos: ["Juan", "Pedro", "Pablo"]
};

// Undefined
var variable;

// Null
var variable = null;


// ** Operadores **
// Aritmeticos
var suma = 5 + 5;
var resta = 5 - 5;
var multiplicacion = 5 * 5;
var division = 5 / 5;
var modulo = 5 % 5;

// Incremento
var incremento = 5;
incremento++;

// Decremento
var decremento = 5;
decremento--;

// Asignacion
var asignacion = 5;
asignacion += 5; // asignacion = asignacion + 5;
asignacion -= 5; // asignacion = asignacion - 5;
asignacion *= 5; // asignacion = asignacion * 5;
asignacion /= 5; // asignacion = asignacion / 5;
asignacion %= 5; // asignacion = asignacion % 5;

// Comparacion
var comparacion = 5 == 5; // Compara solo el valor (no recomendado)
var comparacion = 5 === 5; // Compara el tipo de dato tambien (recomendado)
var comparacion = 5 != 5; // Compara solo el valor (no recomendado)
var comparacion = 5 !== 5; // Compara el tipo de dato tambien (recomendado)
var comparacion = 5 > 5;
var comparacion = 5 >= 5;
var comparacion = 5 < 5;
var comparacion = 5 <= 5;

// Logicos
var logico = 5 == 5 && 5 == 5; // Y (and) (no recomendado)
var logico = 5 == 5 || 5 == 5; // O (or) (no recomendado)
var logico = !(5 == 5); // Negacion (no recomendado)


// ** Condicionales **
// If
if (5 == 5) {
    console.log("Es verdad");
}

// If else
if (5 == 5) {
    console.log("Es verdad");
}
else {
    console.log("No es verdad");
}

// If else if
if (5 == 5) {
    console.log("Es verdad");
}
else if (5 == 5) {
    console.log("Es verdad");
}
else {
    console.log("No es verdad");
}

// Switch
var opcion = 1;
switch (opcion) {
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("Opcion 2");
        break;
    default:
        console.log("Opcion no valida");
        break;
}


// ** Ciclos **
// For
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// While
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do while
var i = 0;
do {
    console.log(i);
    i++;
}
while (i < 10);


// ** Funciones **
function nombreFuncion(parametro1, parametro2) {
    return parametro1 + parametro2;
}

var resultado = nombreFuncion(5, 5);


// ** Objetos **
var persona = {
    nombre: "Felipe",
    edad: 25,
    esMayor: true,
    amigos: ["Juan", "Pedro", "Pablo"],
    saludar: function () {
        console.log("Hola");
    }
};

persona.nombre;
persona.edad;
persona.esMayor;
persona.amigos;
persona.saludar();


// ** Arreglos **
var amigos = ["Juan", "Pedro", "Pablo"];
var edades = [20, 25, 30];
amigos[0];
amigos[1];
amigos[2];

amigos.push("Peli", "Polo"); // Agrega elementos al final del arreglo
amigos.unshift("tu", "Siu"); // Agrega elementos al inicio del arreglo
amigos.pop(); // Elimina el ultimo elemento del arreglo
amigos.shift(); // Elimina el primer elemento del arreglo
amigos.splice(1, 2); // Elimina elementos del arreglo (posicion, cantidad)
amigos.splice(1, 0, "Peli", "Polo"); // Agrega elementos al arreglo (posicion, cantidad, elementos)
amigos.slice(1, 3); // Extrae elementos del arreglo (posicion, cantidad)
amigos.indexOf("Juan"); // Busca un elemento en el arreglo y devuelve su posicion
amigos.join(", "); // Convierte el arreglo en un string (separador)
amigos.sort(); // Ordena el arreglo alfabeticamente
amigos.reverse(); // Ordena el arreglo alfabeticamente de forma inversa
amigos.length(); // Devuelve la cantidad de elementos del arreglo
amigos.filter((e) => {return e === "Juan";}); // Filtra elementos del arreglo
amigos.concat(edades); // Concatena arreglos

