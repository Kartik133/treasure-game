var background_img;
var gameState = "start";
var buttons;
var form;
var database;
var playerIndex;
var game,player;
var playerCount;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,cardboard25,cardboard26,cardboard27,cardboard28,cardboard29,cardboard30,cardboard31,cardboard32,cardboard33,cardboard34,cardboard35,cardboard36,cardboard37,cardboard38,cardboard39,cardboard40;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var doorImg,door;
var boyImg,boy;

function preload() {
  background_img = loadImage("Background img.png");
  doorImg = loadImage("Door img.png");
  boyImg = loadImage("boy1.png");
}

function setup() {
  createCanvas(800,600);

  database = firebase.database();

  engine = Engine.create();
  world = engine.world;

  game = new Game();
}

function draw() {
  background(background_img);  

  Engine.update(engine);

  if(gameState==="start") {
     game.start();
  }

  if(gameState==="form") {
    game.start2();
  }

  if(gameState==="level1") {
     game.play1();
     if(keyDown("up")) {
      boy.velocityX+=0;
      boy.velocityY+=2;
    }
    
    /*if(keyDown("down")) {
      boy.x=boy.x+0;
      boy.y=boy.y+2;
    }
    
    if(keyDown("left")) {
      boy.x=boy.x-2;
      boy.y=boy.y+0;
    }
   
    if(keyDown("right")) {
      boy.x=boy.x+2;
      boy.y=boy.y+0;
    }*/
  }

  drawSprites();

  console.log(gameState);
}