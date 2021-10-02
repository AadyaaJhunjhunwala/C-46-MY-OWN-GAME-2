var starbgimage, starbg
var spaceship, spaceshipimg
var obstacleGroup
var planetGroup

function preload()
{

  starbgimage=loadImage("star bg.png")
  spaceshipimg=loadImage("beginningSc1.png")



}



function setup() 
{
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  starbg=createSprite(400,200,10,10);
  starbg.addImage(starbgimage);
  starbg.scale=5

  spaceship=createSprite(width/2,height-100,10,10);
  spaceship.addImage(spaceshipimg)
  spaceship.scale=0.6




}

function draw() 
{
if(keyDown(LEFT_ARROW))
{
spaceship.x=spaceship.x-5
}
if(keyDown(RIGHT_ARROW))
{
spaceship.x=spaceship.x+5
}
  background(10); 

  //calling
  spawnObstacles();

  drawSprites();
}


function spawnObstacles()
{
if(frameCount%100===0)
{
var obstacles=createSprite(random(width/4,0.75*width),-10,100,100)
obstacles.velocityY=3
}

}