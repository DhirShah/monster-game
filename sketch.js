var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,player;
var invisibleGround,zombie;
var zombieImg,bg,boy,skullImg,handImg,deadImg,bg2,coinImg;
var gameOverImg,restartImg;

var handGroup,coinsGroup,skullGroup;
var gameOver,restart,score;

var point,point2,bgm,growl;

function preload(){
    bg=loadImage("images/Cartoon_Forest_BG_03.png");
    boy=loadAnimation("images/PC_AttackSwing1.png");
    /*
    Monster6Img=loadAnimation("images/monster6/1.png","images/monster6/2.png","images/monster6/3.png","images/monster6/4.png","images/monster6/5.png","images/monster6/6.png","images/monster6/7.png","images/monster6/8.png");
   Monster10Img=loadAnimation("images/monster10/1.png","images/monster10/2.png","images/monster10/3.png","images/monster10/4.png");
   */
   
     

    bgm = loadSound("sounds/bgm.wav");
    point = loadSound("sounds/point.wav");
    point2 = loadSound("sounds/point2.wav");
    growl = loadSound("sounds/zombiegrowl.wav");
}

function setup(){
    createCanvas(800,500);
    ground = createSprite(500,120,0,0);
    ground.scale = 0.6;
    
        ground.x = ground.width/2;
    
    
    ground.velocityX = -4;
    ground.addImage(bg);

    player = createSprite(300,420,20,100);
    player.addAnimation("a",boy);
    player.scale = 0.5
    player.setCollider("rectangle",0,0,player.width,player.height);



   
}

function draw(){

    background(bg);

   if(gameState===PLAY){
    if(ground.x<0){
        ground.x = ground.width/2;
    }  
   }

   

   

drawSprites()
    
}

