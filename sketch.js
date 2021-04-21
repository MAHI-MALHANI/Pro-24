
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ground, hammer, stone, rubber, iron;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

function setup() {
	var canvas= createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(400, height, 800,20);

	 hammer = new Hammer(10,100);
	 stone = new Stone(700,320,100,100);
	 rubber = new Rubber(900,320,5);
	 sand1=new Sand(200,650,2);
	 sand2=new Sand(205,650,2);
	 sand3=new Sand(210,650,2);
	 sand4=new Sand(215,650,2);
	 sand5=new Sand(220,650,2);
	 sand6=new Sand(225,650,2);
	 sand6=new Sand(230,650,2);
	 sand7=new Sand(235,650,2);
	 sand8=new Sand(240,650,2);
	 sand9=new Sand(245,650,2);
	 sand10=new Sand(250,650,2);
	 iron = new Iron(400,320, 50, 80);

	Engine.run(engine);
  
}

function draw() {
  background("lightBlue");
  Engine.update(engine);
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron.display();
  
  drawSprites();
 
}