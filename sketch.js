var bullet,speed,weight;
var wall,thickness;

function setup(){
  createCanvas(1600,400)
  bullet = createSprite(20,200,40,20);
  bullet.shapeColor = 'white';
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  speed = random(223,321)
  weight = random(30,52)
  console.log(thickness);
  console.log(speed+","+weight);
  bullet.velocityX = speed;
}


function draw(){
  background('black')
  drawSprites();
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage < 10){
      wall.shapeColor = 'green';
    }
    else{
      if(damage > 10){
        wall.shapeColor = 'red';
      }
      else{
        console.log("Something went wrong");
      }
    }
  }

}