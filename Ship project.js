var ship,edges;
var seaImg;
var sea;

function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600,400);

  sea=createSprite(200,180,400,20);
  sea.addImage("sea.png",seaImg);
  sea.x=sea.width/2;

  ship = createSprite(300,200,20,50);
  ship.addAnimation("floating", shipImg1);
  ship.scale = 0.5;
  ship.x = 50;
  edges = createEdgeSprites();
}

function draw() {
  background("blue");
  drawSprites();
  ship.collide(edges);
  ship.velocityY = ship.velocityY + 0.5;
  
  
  sea.velocityX=-2
  if(sea.x < 0){
    sea.x=sea.width/2;
  }
  console.log(sea.y);
}