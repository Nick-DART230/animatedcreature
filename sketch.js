let x = 100;
let ellipseSize = 50;
let yPos = 0;
let sunSize = 0;
let time= 0

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  noFill();
  
  
  time++;
  
  //sun
  fill(255,219,172);
  ellipse(180,180, 215, 355);
  

  
  fill(255,255,255)
  ellipse(180,230, 59, 150);
  
  
  if(time>20){
    fill(255,0,0);
    if(time>40){
        time=0;
    }
       }
  else{
    fill(255,255,255)
  }
  
  //fill(255,255,255)
  ellipse(140,80, 40, 40);
  
  //fill(255,255,255)
  ellipse(220,80, 40, 40);
  
  fill(255,0,0)
  ellipse(140,80, 15, 15);
  
  fill(255,0,0)
  ellipse(220,80, 15, 15);
  
  fill(0,0,0)
  ellipse(140,80, 10, 10);
  
  fill(0,0,0)
  ellipse(220,80, 10, 10);
  
   noFill();
  curve(220, 130, 120, 180, 120, 300, 220, 330);
  
  noFill();
  curve(140, 330, 240, 280, 240, 180, 140, 130);

  
}
