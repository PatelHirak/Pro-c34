var bubble;
var bow;
var background;
var rectangle1,rectangle2;
var archery;
var ground;

let engine;
let world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){

  bubble_img = loadImage("pngwing.com.png");
  background = loadImage("wallpaper.png");
  archery = loadImage("archery.png");
  bow = loadImage("arrow.png");

}


function setup() {
  createCanvas(500,800);
  
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(250,height-10,width,20);

  bow = createSprite(270,100,100,100);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();

  bow.changeAnimation('runing');

  
  drawSprites();

}




