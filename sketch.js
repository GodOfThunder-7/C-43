var track1, track2, track3, track4, track5, track6, trackGroup;
var start, startImage, end, endImage;
var player,playeranimation;
var rail1,rail2,rail3,railgroup;
var bombs,bombsImage, bombrand, bombgroup;
var energy, energyImage, energyRand,energygroup;
var coin, coinrand,coinimage,coingroup;
var score=0;
var sound;
var START = 1;
var PLAY = 2;
var END = 3;
var gameState=START;

function preload(){
    playeranimation=loadAnimation("sprite1.png","sprite2.png", "sprite3.png", "sprite4.png", "sprite5.png");
    coinimage=loadImage("coin.png");
    bombsImage = loadImage("bomb.png");
    energyImage = loadImage ("energyDrink.png");
    startImage = loadImage ("subway-surfers.jpg");
    endImage = loadImage ("game-over-1.jpeg");
}
function setup(){
createCanvas(windowWidth,windowHeight);
player= createSprite(windowWidth/2,windowHeight-windowHeight/3,20,20);
player.addAnimation("running",playeranimation);
player.visible = false;

coinrand = Math.round(random(1,3));
energyRand = Math.round(random(1,3));
bombrand = Math.round(random(1,3));

start = createSprite(windowWidth/2, windowHeight/2, 10, 10);
start.addImage ("start", startImage);
start.visible = false;

end = createSprite(windowWidth/2, windowHeight/2, 10, 10);
end.addImage("end", endImage);
end.visible = false;

coingroup = new Group();
bombgroup = new Group();
energygroup = new Group();
railgroup = new Group;
trackGroup = new Group();
track1 = createSprite(50, -500, 10,1200);
track1.shapeColor = "brown";
track1.velocityY = 5;
track2 = createSprite(150, -500, 10,1200);
track2.shapeColor = "brown";
track2.velocityY = 5;
track3 = createSprite(350, -500, 10,1200);
track3.shapeColor = "brown";
track3.velocityY = 5;
track4 = createSprite(450, -500, 10,1200);
track4.shapeColor = "brown";
track4.velocityY = 5;
track5 = createSprite(650, -500, 10,1200);
track5.shapeColor = "brown";
track5.velocityY = 5;
track6 = createSprite(750, -500, 10,1200);
track6.shapeColor = "brown";
track6.velocityY = 5;
}
function draw(){
background("cyan");


    drawcoin();
    drawSprites();
}

function drawcoin(){
    if(frameCount%100===0){
    coin = createSprite(100,-40,20,20);
    coin.addImage("coins",coinimage);
    coin.velocityY=5;
    coin.scale=0.5
    coingroup.add(coin);
    if (frameCount % 150 === 0){
        switch (coinrand){
        case 1: coin.x = width/2;
        coin.velocityY = 7;
        break;
        case 2: coin.x = width/4;
        coin.velocityY = 7;
        break;
        case 3: coin.x = width/8;
        coin.velocityY = 7;
        break; 
        default: break;
    }
    }
}
}
