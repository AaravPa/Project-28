
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5, mango6, mangoBodyPosition;
var ground, tree, stone, boy, sling, stoneBodyPosition;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,550,800,10);
  tree = new Tree(600,350,300,400);
  boy = new Boy(180,490,150,200);
  stone = new Stone(80,490,40);
  
  sling = new Sling(stone.body, {x : 130, y : 445});

  mango1 = new Mango(520,310,35);
  mango2 = new Mango(550,250,35);
  mango3 = new Mango(620,200,35);
  mango4 = new Mango(610,280,35);
  mango5 = new Mango(680,260,35);
  mango6 = new Mango(710,310,35);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  tree.display();
  boy.display();
  sling.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  
  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY})  
}

function mouseReleased() {
  sling.fly();  
}

function detectcollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.radius+lstone.radius) {
    Matter.Body.setStatic(lmango.body, false);
  }
}

function keyPressed() {
  if(keyCode == 32) {
    Matter.Body.setPosition(stone.body, {x : 130, y : 445})
    sling.attach(stone.body);
  }
}