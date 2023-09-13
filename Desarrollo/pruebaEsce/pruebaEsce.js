let fondo;
let velocidad = 6; //velocidad de movimiento del circulo

//dimensiones del canvas

let x = 1366;
let y = 780;

//posicionamiento inicial de la nave

let xNave = 200;
let yNave = y / 2;

function preload(){
  fondo = loadImage('assets/fondo.jpg');
}

function setup() {
  createCanvas(x, y);
  frameRate(60);
}

function draw() {
  background(fondo);
  
  ellipse(xNave, yNave, 50, 50);

  if (keyIsDown(87)) { // w
    if (yNave > 25) { //se define un limite utilizando el radio de la ellipse para que no se salga del canvas
      yNave -= velocidad; //se mueve hacia arriba
    }
  }
  
  if (keyIsDown(65)) { // a
    if (xNave > 25) {
      xNave -= velocidad; //se mueve hacia la izquierda
    }
  }
  
  if (keyIsDown(83)) { // s
    if (yNave < y - 25) {
      yNave += velocidad; //se mueve hacia abajo
    }
  }
  
  if (keyIsDown(68)) { // d
    if (xNave < x - 25) {
      xNave += velocidad; //se mueve hacia la derecha
    }
  }
}
