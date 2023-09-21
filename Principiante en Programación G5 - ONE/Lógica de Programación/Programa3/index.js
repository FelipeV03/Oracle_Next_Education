let pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

function alerta(e) {
    let x = e.x - pantalla.offsetLeft;
    let y = e.y - pantalla.offsetTop;

    console.log(e);
    alert(`Hizo click en la posición: ${x}, ${y}`);
}

function dibujarCirculo(e) {
    let x = e.x - pantalla.offsetLeft;
    let y = e.y - pantalla.offsetTop;

    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * Math.PI);
    pincel.fill();
    console.log(x + ' ' + y);
}

// pantalla.onclick = alerta;
pantalla.onclick = dibujarCirculo;
