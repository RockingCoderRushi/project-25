
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var paper1;

var downwall,rightwall,leftwall;
var ground1
var dustbin1
function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);
	 
	// ground = createSprite(600,680,1600,20)
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1200,450)
	paper1 = new Paper(20,200,20)
	ground1 = new Ground(600,480,1600,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
dustbin1.display()
 paper1.display()
 ground1.display()
}

function keyPressed() {
	console.log("hi")
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-14})
		console.log("lol")
	}
}

