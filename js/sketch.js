var starbgimage, starbg
var spaceship, spaceshipimg
var obstacleGroup, alien, meteors, asteroids
var planetGroup
var bulletimg, bullet, bulletGroup
//var gameState="First"

function preload()
{

 starbgimage=loadImage("images/star.jpg")
 spaceshipimg=loadImage("images/beginningSc1.png")
// bulletimg=



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

  bulletGroup=new Group();
  obstacleGroup=new Group();
  
//form =new Form()
//form.screen1()

}

function draw() 
{
  //background(10); 
  //if (gameState==="START")
  //{
  
if(keyDown(LEFT_ARROW))
{
spaceship.x=spaceship.x-5
}
if(keyDown(RIGHT_ARROW))
{
spaceship.x=spaceship.x+5
}
 
  //calling
  spawnObstacles();

  if(keyWentUp(32))
  {
    spawnBullets();
  }

  bulletGroup.overlap(obstacleGroup,function(bu,ob){
  ob.destroy()
  bu.destroy()

  })
  
  drawSprites();
//}


}

function spawnBullets()
{
  bullet=createSprite(spaceship.x,spaceship.y,20,20)
  bullet.velocityY=-5
  bulletGroup.add(bullet)
  bulletGroup.lifetime=200
}


function spawnObstacles()
{
if(frameCount%100===0)
{
var obstacles=createSprite(random(width/4,0.75*width),-10,100,100)
obstacles.velocityY=3
obstacles.lifetime=300;
obstacleGroup.add(obstacles);
//switch function
}



}


//make the forms beautiful-->Aadya
//add images to obstacles -->Aadya
//load images for planets -->Aadya
//background for the form -SARU
//attribut of placaholder-->SARU
//switch construct for the obstacles-->Aadya
//score 
//5 time obst touch ,spce ship get destroyed-->SARU
//spawn power ups  -->Aadya
//adaptivity

