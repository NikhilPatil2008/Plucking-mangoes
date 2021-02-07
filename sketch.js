
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimage,treeimage;
var world,engine;

function preload()
{
	boyimage=loadImage("images/boy.png");
	treeimage=loadImage("images/tree.png");
}

function setup() {
	var canvas=createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	var boy=createSprite(150,480,20,20);
	boy.addImage(boyimage);
	boy.scale=0.1;

	var tree=createSprite(500,250,20,20);
	tree.addImage(treeimage);
	tree.scale=0.5;

	ground = new Ground(100,550,1600,20);
	mango1=new Mango(100,100);
	sling=new Sling(this.stone,{x:200,y:200});

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  mango1.display();
  sling.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}



