var car,wall;

var speed,weight;


function setup() {
createCanvas(1400,400);

 speed=random(55,90)
 weight=random(400,1300)

car=createSprite(50, 200, 50, 50);
car.velocityX = speed;
car.shapeColor=color="red";

wall=createSprite(1300,200,60,height/2)
wall.shapeColor=color="white";

}

function draw() {
  background(0);  

if(wall.x-car.x < (car.width + wall.width) /2)
      
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation>180)
{
  car.shapeColor=color=("red");
}   
    
if(deformation<180 && deformation>100)
{
  car.shapeColor=color="blue";
}

if(deformation<100)
{
  car.shapeColor=color="green";
}   

drawSprites();
}