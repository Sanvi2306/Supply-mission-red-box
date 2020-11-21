var helicopterIMG, helicopterSprite, packageSprite,packageIMG,side1,side2,side3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	side1=createSprite(width/2,height-40,100,20);
	side1.shapeColor=color(225,0,0);

	side2=createSprite(350,height-80,20,100);
	side2.shapeColor=color(225,0,0);

	side3=createSprite(450,height-80,20,100);
	side3.shapeColor=color(225,0,0);



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 side1Body= Bodies.rectangle(width/2,height-40,100,20,{isStatic:true,density:1});
	 World.add(world,side1Body);

	side2Body= Bodies.rectangle(350,height-80,20,100,{isStatic:true,density:1});
	World.add(world,side2Body);

	side3Body= Bodies.rectangle(450,height-80,20,100,{isStatic:true,density:1});
	World.add(world,side3Body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  side1.x=side1Body.position.x;
  side1.y=side1Body.position.y;
  side2.x=side2Body.position.x;
  side2.y=side2Body.position.y;
  side3.x=side3Body.position.x;
  side3.y=side3Body.position.y;
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  
	Matter.Body.setStatic(packageBody, false)
      
  }
}



