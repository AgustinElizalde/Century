let fondo; //Variable para llamar al fondo
let x = 1350; //Ancho de la pantalla
let y = 690; //Alto de la pantalla


//Funcion para cargar las imagenes antes de inicar el programa
function preload(){
  fondo = loadImage('assets/fondo.jpg');
}

function setup() {
  
  createCanvas(x, y);
}


function draw() {
  
  //Llamamos al fondo en el background
  background(fondo);
}
