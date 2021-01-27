var cat,mouse,garden;
var catImg2,catImg3,catImg1,catImg4,mouseImg1,mouseImg2,mouseImg3,mouseImg4,gardenImg,catLastImage;


function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);


    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation(catImg1);
    cat.scale = 0.15;
    
     mouse = createSprite(200,600);
     mouse.addAnimation(mouseImg1);
     mouse.scale = 0.1;

    

}

function draw() {

    background(gardenImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catEnd",catImg3);
        cat.changeAnimation("catEnd");
        cat.velocityX = 0;

        mouse.addAnimation("mouseEnd",mouseImg3);
        mouse.changeAnimation("mouseEnd");
    }


    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouseRunning",mouseImg2);
      mouse.changeAnimation("mouseRunning");
  }



}
