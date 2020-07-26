g = 981
L = 0

alfa = 0
da = 0
a = 0
dt = 0.000224
dx = 0 

x = 0
y = 220

reflex = 0 // sirve para voltear la función seno
efectividad = 0.998 //efectividad del péndulo 

function setup() {
  createCanvas(400, 400);  
  L = sqrt((x - 200)*(x - 200)+(y - 15)*(y - 15))
  alfa = acos((y - 15)/L) 
}

function draw() {
background(220);
  
  // Dibujo de Escenario
  rect(0,0,400,15)
  ellipse(x,y,20)
  line(200,15,x,y)
  
  //Seguidor de Inicio
  if (mouseIsPressed){
    x = pmouseX
    y = pmouseY
    da = 0
    L = sqrt((x - 200)*(x - 200)+(y - 15)*(y - 15))
    alfa = acos((y - 15)/L) 
    
    if (x > 200)
      reflex = 1
    if (x < 200)
      reflex = -1   
    }
  
  // Crecimiento del ángulo respecto a dt
  alfa = alfa + da
  da = (+ da - (g/L)*sin(alfa)*dt)*efectividad // Porcentaje de efectividad
  
  if (keyIsPressed){
    efectividad = 1.002                                       
  }else{
    efectividad = 0.998
  }
  
  movimiento()
  
  // Posiciónde la pelota
  x = 200+ L*sin(alfa*reflex) 
  y = L*cos(alfa)
  
  //Periódo de la ondulación
  text('T: ' + 2*PI*sqrt(L/g),30,30,30)
  text("L: " + L, 30, 60, 30)
}

function movimiento (){
  if(keyIsDown(UP_ARROW)){
      L = L - 1
  }
  if(keyIsDown(DOWN_ARROW)){
      L = L + 1
  }
}
