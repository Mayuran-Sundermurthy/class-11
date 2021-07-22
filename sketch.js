//creating the variables
var trex, trex_running, edges, ground;
var groundImage;
var invisibleground;

//loading the images
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

//initializing the variables
function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(300,190,600,10);
  ground.addImage("ground", groundImage);
  invisibleground = createSprite(300,200,600,10);
  invisibleground.visible = false;

}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  ground.velocityX = -5;
  //jump when space key is pressed
  if(keyDown("space") && trex.y > 170){
    trex.velocityY = -10;
  }
  //adding the gravity
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleground);
  drawSprites();

  if(ground.x < 0){
    ground.x = width/2;
  }
}