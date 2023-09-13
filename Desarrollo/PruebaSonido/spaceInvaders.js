let fondo;
let nave;
let sonido;
let reproduciendo = false;

const canvasX = window.innerWidth;
const canvasY = window.innerHeight;

function preload() {
  fondo = loadImage('assets/fondo.jpg');
  sonido = loadSound('assets/win_loud.mp3');
}

function Nave() {
  this.posicion = createVector(canvasX / 2, canvasY - 200);
  this.asset = loadImage('assets/spaceship1.png');
  this.direccion = createVector(1, 0);
  this.rotacion = 0;
  this.velocidad = createVector(0, 0);
  
  this.movimiento = function(){
    this.posicion.add(this.velocidad);
    this.velocidad.mult(0.99);
    
    if (this.posicion.x < 0) {
      this.posicion.x = 0;
      this.velocidad.x = 0;
    } else if (this.posicion.x > canvasX) {
      this.posicion.x = canvasX;
      this.velocidad.x = 0;
    }
    if (this.posicion.y < 0) {
      this.posicion.y = 0;
      this.velocidad.y = 0;
    } else if (this.posicion.y > canvasY) {
      this.posicion.y = canvasY;
      this.velocidad.y = 0;
    }
  }
  
  this.aceleracion = function(){
    let acc = p5.Vector.fromAngle(this.direccion.heading() + PI / 2);
    this.velocidad.add(acc.mult(-0.08));
  }

  this.draw = function () {
    push(); // Guardar la configuración actual de transformación
    translate(this.posicion.x, this.posicion.y);
    rotate(this.direccion.heading()); // Aplicar la rotación basada en la dirección
    imageMode(CENTER);
    image(this.asset, 0, 0, 50, 50);
    pop(); // Restaurar la configuración de transformación
  };

  this.setRotacion = function (angulo) {
    this.rotacion = angulo;
  };

  this.giro = function () {
    this.direccion.rotate(this.rotacion); //Actualizar la dirección con la rotación
  };
}

function setup() {
  createCanvas(canvasX, canvasY);
  frameRate(60);

  nave = new Nave();
}

function keyPressed() {
  // Verifica si la tecla presionada es una de las teclas WASD y si el sonido no se está reproduciendo
  if ((key === 'w' || key === 'a' || key === 's' || key === 'd') && !reproduciendo) {
    sonido.loop();
    reproduciendo = true;
  }
}

function draw() {
  background(fondo);
  
  nave.draw();
  nave.giro();
  nave.movimiento();
  
  if (keyIsDown(87)) { //si presiona la tecla w
    nave.aceleracion();
  } 

  if (keyIsDown(65)) { //si presiona la tecla a
    nave.setRotacion(-0.08); //Asigna rotación hacia la izquierda
  } 
  else if(keyIsDown(68)){ //si presiona la tecla d
    nave.setRotacion(0.08); //Asigna rotación hacia la derecha
  } 
  else {
    nave.setRotacion(0); //Ninguna otra tecla genera rotación
  }
  
}
