var fixedRect,movingRect,gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(500,300,50,100);
  gameObject1 = createSprite(200, 200, 50, 50);
  gameObject2 = createSprite(100, 200, 50, 50);
  gameObject1.velocityX = -1;
  gameObject2.velocityX = 1;
}

function draw() {
  console.log("Hello");
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  bounceOff(gameObject1,gameObject2);
  
  drawSprites();
}
