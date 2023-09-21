// Esta variable es la que contiene el canvas del HTML en el que vamos a dibujar
let pantalla = document.querySelector('canvas');
// Esta variable es la que contiene el contexto 2D del canvas en el que vamos a dibujar (es decir, el pincel)
let pincel = pantalla.getContext('2d');


pincel.fillStyle = 'blue'; // Color de relleno
pincel.fillRect(0, 0, 600, 400); // Dibuja un rectángulo relleno en la posición (0, 0) con un ancho de 600 y un alto de 400

pincel.fillStyle = 'yellow';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = 'red';
pincel.fillRect(400, 0, 200, 400);


pincel.fillStyle = 'black';
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = 'white';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * Math.PI);
pincel.fill();
