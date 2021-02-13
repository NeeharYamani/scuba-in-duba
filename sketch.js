var bgimg;
var ground;
var PLAY = 1,END = 0;
var gameState = PLAY;
var obs1,obs2,obs3,obs4,obs5;
var re1,re2,re3,re4;
var rulesimg;
var diveranime_diving;
var diver;
var bubbleGroup;
var obstacleGroup;


function preload(){
  bgimg = loadImage("images/bg5.jpg");
  diveranime_diving = loadAnimation("images/s.png", "images/c.png", "images/u.png",  "images/b.png", "images/a.png", "images/d.png"," images/i.png", "images/v.png");

  bubble1 = loadImage("images/bubble1.png");
  bubble2 = loadImage("images/bubble2.png");
  bubble3 = loadImage("images/bubble3.png");
  bubble4 = loadImage("images/bubble4.png");

  obs1 = loadImage("images/obs1.png");
  obs2 = loadImage("images/obs2.png");
  obs3 = loadImage("images/obs3.png");
  obs4 = loadImage("images/obs4.png");
  obs5 = loadImage("images/obs5.png");

  re1 = loadImage("images/re1.png");
  re2 = loadImage("images/re2.png");
  re3 = loadImage("images/re3.png");
  re4 = loadImage("images/re4.png");

  rulesimg = loadImage("images/ready.jpg");

 
}
function setup() {
  createCanvas(displayWidth-5, displayHeight-205);
  bg=createSprite(displayWidth/2, displayHeight-550,displayWidth, displayHeight);
  bg.addImage(bgimg);
  bg.scale= 2.8;

  diver = createSprite(250,400,70,50);
  diver.addAnimation("diving",diveranime_diving);
  

  bubbleGroup = new Group();
  obstacleGroup = new Group();
  obs1 = new Group();
  obs2 = new Group();
  obs3 = new Group();
  obs4 = new Group();
  obs5 = new Group();
  
}

function draw() {
  //background(bgimg)
  if(gameState==PLAY){
    bg.velocityX = -2;
    if(bg.x <600){
      bg.x = displayWidth/2+10 ;
    }
    if(keyDown(UP_ARROW)){
      diver.y = diver.y-4
    }
   }
   
   if(keyDown(DOWN_ARROW)){
     diver.y = diver.y+4
   
    spwanBubbles();
    spawnObstacles();
    
   
  }
  
  else if(gameState==END){

  }
  drawSprites();
  
}

function spwanBubbles(){
  if(frameCount % 100 == 0){
    var bubble = createSprite(random(displayWidth/2-600,displayWidth/2+600),displayHeight/2+200);
    bubble.velocityY = -4;
    var rand= Math.round(random(1,4));
    switch(rand){
      case 1: bubble.addImage(bubble1);
      break;
      case 2: bubble.addImage(bubble2);
      break;
      case 3: bubble.addImage(bubble3);
      break;
      case 4: bubble.addImage(bubble4);
      break;
      default: break;
    }
    bubble.scale = 0.5;
    bubble.liftime = 300;
    bubbleGroup.add(bubble);
  }
}
function spawnObstacles(){
  if(frameCount % 60 ==0){
    var obstacle  = createSprite(displayWidth/2+750,random(displayWidth/2-500));
    obstacle.velocityX = -4;
    var rand= Math.round(random(1,5));
    switch(rand){
      case 1: obstacle.addImage(obs1);
      break;
     
      default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}
