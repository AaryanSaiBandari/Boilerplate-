const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;
var top_wall;
var button1;
var button2;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  button1=createImg('right.png');
  button1.position(220,300);
  button1.size(50,50);
  button1.mouseClicked(hForce);
  
  button2=createImg('up.png');
  button2.position(20,300);
  button2.size(50,50);
  button2.mouseClicked(vForce);
  
  ground=new Ground (200,390,400,20);
  left=new Ground (390,200,20,400);
  right=new Ground (10,200,20,400);
  top_wall=new Ground (200,10,400,20);

  var ball_options={
    restitution:0.95,
  }

  ball=Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function draw() {
  background("black");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}
function hForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0});
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02});
}