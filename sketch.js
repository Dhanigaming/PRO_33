 var snow1;
 var backgroundImg;
 var boy , boyImg;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  boyImg = loadImage("boy.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 snow1 = new Snow(Math.round(random(0,800)),0,10);
 boy = createSprite(100,400,10,10);
 boy.add(boyImg);
}

function draw() {
  background(backgroundImg);  
  if(frameCount % 10 === 0){
    snow1 = new Snow(Math.round(random(0,800)),0,10)
  }
  
 snow1.display();
  drawSprites();

}
function Spacebar(){
  if(keyDown("space") && boy.y >= 400) {
    boy.velocityY = -12;
  }
}
function moving(){
  if(keyDown = "left"){
    boy.x = boy.x-2;
  }

  if(keyDown = "right"){
    boy.x = boy.x+2;
  }
}