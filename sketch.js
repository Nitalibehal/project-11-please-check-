
function preload(){
  track = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(track);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(50,180,20,50);
  boy.addAnimation("running",runner_running);
  boy.scale = 1.4;

}

function draw() {
  background(6);
  
  if(path.y > 400){
    path.y = height/2;
  }

  if(keyRight("space")&& trex.x >= 50) {
    trex.velocityX = -13;
}

if(keyLeft("shift")&& trex.x >= 50) {
  trex.velocityX = -13;
}

}