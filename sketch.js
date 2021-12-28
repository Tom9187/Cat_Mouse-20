var bgImage,Cat,Mouse;
function preload() {
    //load the images here
    bgImage = loadImage("garden.png");
    cImage1 = loadAnimation("cat1.png");
    cImage2 = loadAnimation("cat2.png");
    cImage3 = loadAnimation("cat3.png");
    mImage1 = loadImage("mouse4.png");
    mImage2 = loadAnimation("mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.scale =0.2;
    cat.addAnimation("catSit",cImage1);
    Mouse = createSprite(200,600);
    Mouse.addImage(mImage1)
    Mouse.scale = 0.2;
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - Mouse.x < (cat.width - Mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("CatEnding",cImage3)
        cat.changeAnimation("CatEnding")
        cat.x = 300;
        cat.scale = 0.2;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
    Mouse.addAnimation("MouseTeasing",mImage2)
    Mouse.changeAnimation("MouseTeasing");
    Mouse.frameDelay = 25;

    cat.velocityX = -5;
    cat.changeAnimation(cImage2);
 }

}
