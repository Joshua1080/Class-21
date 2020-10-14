var fixedRect, movingRect, gameObject1, gameObject2;

function setup() 
{
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //gameObject1 = createSprite(100,200,50,50);
  //meObject1.shapeColor = "green";
  //gameObject1.debug = true;
  //gameObject2 = createSprite(200,200,50,50);
  //gameObject2.shapeColor = "green";
  //gameObject2.debug = true;
  fixedRect.velocityY = -5;
  movingRect.velocityY = 5;

}

function  draw() 
{
    background(0,0,0); 

    bounceOff(movingRect,fixedRect);
/*
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
    background("black");
  if(isTouching(movingRect,fixedRect))
  {

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect,gameObject1))
  {
  if(isTouching(movingRect,gameObject1))
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else if(isTouching(movingRect,gameObject2))
   {    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
  } 
 */ 
  drawSprites();
}

