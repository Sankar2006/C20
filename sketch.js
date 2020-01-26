var frect, mrect;




function setup() {
  createCanvas(800,400);
  frect = createSprite(650,175,20,40);
  frect.shapeColor = "yellow";
  mrect = createSprite(480, 300,20,30);
  mrect.shapeColor = "black";
}

function draw() {
  background(255,255,255); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 
  if(mrect.x - frect.x < frect.width/2 + mrect.width/2 
  && frect.x - mrect.x < frect.width/2 + mrect.width/2 
  && mrect.y - frect.y < frect.height/2 + mrect.height/2 
  && frect.y - mrect.y < frect.height/2 + mrect.height/2){
    frect.shapeColor = "blue";
    mrect.shapeColor = "orange";
  }
  else{
    frect.shapeColor = "yellow";
    mrect.shapeColor = "black";
  }
  drawSprites();
}