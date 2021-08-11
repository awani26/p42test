var issImg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img, backgroundImg;
var iss, spacecraft, hasDocked;
var hasDocked = false;

function preload(){
issImg = loadImage("iss.png");
backgroundImg = loadImage("spacebg.jpg");
spacecraft1Img= loadImage("spacecraft1.png");
spacecraft2Img= loadImage("spacecraft2.png");
spacecraft3Img= loadImage("spacecraft3.png");
spacecraft4Img= loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.15
}

function draw() {
  background(backgroundImg);
 // background(255,255,255);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-30,30)

if(keyDown("UP_ARROW")){
  spacecraft.addImage(spacecraft2Img)
  spacecraft.y = spacecraft.y-2
}

if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(spacecraft1Img)
  spacecraft.y = spacecraft.y+2
}

if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spacecraft4Img);
  spacecraft.x = spacecraft.x+2
}

if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(spacecraft3Img);
  spacecraft.x = spacecraft.x-2
}

if (spacecraft.isTouching(iss)){
  text("Docking Successful",200,200);
 
}



  }

  drawSprites();
} 