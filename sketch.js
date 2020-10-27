
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 650);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.


	Engine.run(engine);

	ball=new Paper(100,520,15);
	ground1=new Ground(675,620,1450,10);
	bin1 = new Dustbin(1202,610,220,15);
	bin2 = new Dustbin(1300,555,20,123);
	bin3  = new Dustbin(1102,555,20,123);

//console.log(matter.js)
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();
  ball.display();

 

  keyPressed();

  
 // drawSprites();
 
}

function keyPressed()
{
	
if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:27,y:-27});
	}
	
}



