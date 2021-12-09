var bgIMG;
var cat, mouse;

function preload() {
    bgIMG = loadImage("images/garden.png");
    catIMG1 = loadImage("images/cat1.png");
    mouseIMG1 = loadImage("images/mouse1.png");
    catIMG2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseIMG2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseIMG3 = loadImage("images/mouse4.png");
    catIMG3 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(870,600);
    cat.addAnimation("gatoparado", catIMG1);
    cat.scale = 0.2;
    mouse = createSprite(300,600);
    mouse.addAnimation("ratoparado", mouseIMG1);
    mouse.scale = 0.2;}

function draw() {
    background(bgIMG);

    if(cat.x - mouse.x <= cat.width/2 - mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("gato3", catIMG3);
        cat.changeAnimation("gato3");
        cat.x = 330
        cat.scale = 0.2

        mouse.addAnimation("rato3", mouseIMG3);
        mouse.changeAnimation("rato3");}
    drawSprites();}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("ratoprovocando", mouseIMG2);
    mouse.changeAnimation("ratoprovocando");
    mouse.frameDelay = 25;

    cat.velocityX = -5;
    cat.addAnimation("gatoandando", catIMG2);
    cat.changeAnimation("gatoandando");
    cat.frameDelay = 5;}}
