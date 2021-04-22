const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
//preload the images here
backgroundImg=loadImage("bacground.png")
}

function setup() {
  createCanvas(1000, 550);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
 
  Ground=new Ground(200,400,1200,10)
  hero=new Hero(200,200,200,100)
  monster=new Monster(700,200,150,100)
  fly=new Fly(hero.body,{x:200,y:200})
  block1=new Block(500,360,40,40)
  block2=new Block(500,200,40,40)
  block3=new Block(500,240,40,40)
  block4=new Block(500,280,40,40)
  block5=new Block(500,320,40,40)
  block6=new Block(500,160,40,40)
  block7=new Block(460,360,40,40)
  block8=new Block(460,200,40,40)
  block9=new Block(460,240,40,40)
  block10=new Block(460,280,40,40)
  block11=new Block(460,320,40,40)
  block12=new Block(460,160,40,40)
  block13=new Block(420,360,40,40)
  block14=new Block(420,200,40,40)
  block15=new Block(420,240,40,40)
  block16=new Block(420,280,40,40)
  block17=new Block(420,320,40,40)
  block18=new Block(420,160,40,40)
  block19=new Block(540,360,40,40)
  block20=new Block(540,200,40,40)
  block21=new Block(540,240,40,40)
  block22=new Block(540,280,40,40)
  block23=new Block(540,320,40,40)
  block24=new Block(540,160,40,40)
}

function draw() {
  background(backgroundImg);
  
  Engine.update(engine);
  Ground.display()
  hero.display()
  monster.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  fly.display()
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX ,y:mouseY})
  
  }
  
  function mouseReleased(){
  Slingshot.fly()    
  
  }
