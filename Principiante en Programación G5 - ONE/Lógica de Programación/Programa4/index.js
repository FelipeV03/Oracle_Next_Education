let pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);


function dibujarCicunferencia(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpiar() {
    pincel.clearRect(0, 0, 600, 400);
}

let x = 0;
function actualizarPantalla() {
    limpiar();
    dibujarCicunferencia(x, 200, 100, 'blue');
    x++;
}

setInterval(() => {
    actualizarPantalla();
}, 1000 / 60);
