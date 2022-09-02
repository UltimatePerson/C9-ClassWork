var ball ,edge;
function setup() {
  createCanvas(400,400);
ball = createSprite(200,200);
ball.velocityX = 5
ball.velocityY = 5
edge = createEdgeSprites();


}

function draw() 
{
  background("black");
  ball.bounceOff(edge);
drawSprites();
}




