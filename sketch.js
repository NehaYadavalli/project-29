const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;

var box1, box2, box3, box4, box5, box6, box7, box8, box9;

var box10, box11, box12, box13;

var polygon;

var slingShot;


function preload(){
  polygonImage = loadImage("images-1.png");

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(700,350,400,20);
  stand = new Ground(200,380,200,20);

  //level1
  box1 = new Box(765,320,50,50);
  box2 = new Box(715,320,50,50);
  box3 = new Box(665,320,50,50);
  box4 = new Box(615,320,50,50);
  box5 = new Box(565,320,50,50);
  
  //level2
  box6 = new Box(615,270,50,50);
  box7 = new Box(665,270,50,50);
  box8 = new Box(715,270,50,50);

  //level3
  box9 = new Box(665,220,50,50);

  //level1
  box10 = new Box(150,350,50,50);
  box11 = new Box(200,350,50,50);
  box12 = new Box(250,350,50,50);
  //level2
  box13 = new Box(200,300,50,50);

var options = {
  restitution: 1
}

  polygon = Bodies.circle(50,300,20,options);
  World.add(world,polygon);

  
  console.log(polygon);

  slingShot = new SlingShot(polygon,{x:100,y:200});

}


function draw() {
  background(255,255,255); 
  ground.display();
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();

  box9.display();


  box10.display();
  box11.display();
  box12.display();

  box13.display();

  slingShot.display();

  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);



}

function mouseDragged(){
  polygon.position.x = mouseX;
  polygon.position.y = mouseY;
}

function mouseReleased(){
  slingShot.fly();
}