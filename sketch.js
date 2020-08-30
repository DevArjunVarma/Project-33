const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var div, div1, div2, div3, div4, div5;
var plinko, particles;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  ground = new Ground(240,790,480,10);
  div = new Divisions(0,730,7,100);
  div1 = new Divisions(80,730,7,100);
  div2 = new Divisions(180,730,7,100);
  div3 = new Divisions(280,730,7,100);
  div4 = new Divisions(380,730,7,100);
  div5 = new Divisions(480,730,7,100);
  plinko = new Plinko();
  particles = new Particle();
  Engine.run(engine);
}
var particles = [];
var plinkos = [];
var divisions = [];

function draw() {
  background(225); 
  Engine.update(engine); 
  ground.display();
  div.display();
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  plinko.display();
  particles.display();
}