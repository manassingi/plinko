
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function preload()
{
	
}

function setup() {
	createCanvas(400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  var divisionHeight=300;
  for(var k = 0; k <= width; k=k+80){
	divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));

}

for (var j = 40; j<=width; j=j+50)
{
	plinkos.push(new plinko(j,75))
}
for (var j = 15; j<=width-10; j=j+50)
{
	plinkos.push(new plinko(j,175))
}
  for (var j = 0; j< particles.length; j++){
	  particles[j].display();
  }
  for (var k = 0; k< divisions.length; k++){
	divisions[k].display();
}

  drawSprites();
 
}



