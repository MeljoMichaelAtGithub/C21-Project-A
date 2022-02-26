
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{

}

function setup() {
	createCanvas(1900, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.02,
		density:1.5
	}
	ball = Bodies.circle(200,400,25,ball_options,);
	World.add(world,ball);

	//Create the Bodies Here.
	ground=new groundObj(width/2,670,width,20);
	leftSide = new groundObj(1100,600,20,230);
	RightSide = new groundObj(1400,600,20,230);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,50);

  keyPressed();

  ground.display();
  leftSide.display();
  RightSide.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:5,y:1},{x:3,y:1});
	}
}



