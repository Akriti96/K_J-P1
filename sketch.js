const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var mytower;
var backgroundImage

function preload(){
  backgroundImage=loadImage("./assets/background.gif")
}

function setup() {
  createCanvas(1000, 500);

  engine = Engine.create();
  world = engine.world;

  //creating Tower
  mytower= new Tower(120,280,150,300)


}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  mytower.display() 


}

