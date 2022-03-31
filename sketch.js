
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(100,100,30,30)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 //The ground
 ground=createSprite(300,190,600,20)
}

function draw(){
  background("white")
  if(keyDown("space"))
{
  trex.velocityY=-12;
}
trex.velocityY+=0.8;
 drawSprites() 
 trex.collide(ground)


}