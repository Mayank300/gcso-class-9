
var car1,car2,car3,wall;
var speed,weight;

speed  = random (55,90);
weight = random(400,1500);

function setup() {
  createCanvas(800,400);

  car1 = createSprite(50,200, 50, 50);
  car1.shapeColor("white");

  car2 = createSprite(50,200, 50, 50);
  car2.shapeColor("white");

  car3 = createSprite(50,200, 50, 50);
  car3.shapeColor("white");
 
  wall = createSprite(1500,200, 60, height/2);
  wall.shapeColor("white");

}

function draw() {
  background(255,255,255);  
  drawSprites();
}