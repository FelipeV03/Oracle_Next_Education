function dibujarCuadrado(x, y, color) {
    let pantalla = document.querySelector('canvas');
    let pincel = pantalla.getContext('2d');


    pincel.fillStyle = color;
    pincel.fillRect(x, y, 50, 50);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x, y, 50, 50);
}


// let x = 0;
// while (x < 600) {
//     dibujarCuadrado(x, 0, 'yellow');
//     dibujarCuadrado(x, 50, 'blue');
//     dibujarCuadrado(x, 100, 'red');
//     x = x + 50;
// }


for (let x = 0; x < 600; x = x + 50) {
    dibujarCuadrado(x, 0, 'yellow');
    dibujarCuadrado(x, 50, 'blue');
    dibujarCuadrado(x, 100, 'red');
}