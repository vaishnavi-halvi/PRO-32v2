const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var bg=255,score=0;

var polygonImg
function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){
createCanvas(1900,800)
count=0;
getBackgroundImage()

engine = Engine.create();
world = engine.world;

//ground and platform 
ground=new Ground(950,775,1900,50)
platform1=new Ground(650,500,500,30)
platform2=new Ground(1250,300,400,30)


//level1 boxes
b1=new Box(450,450,50,50)
b2=new Box(500,450,50,50)
b3=new Box(550,450,50,50)
b4=new Box(600,450,50,50)
b5=new Box(650,450,50,50)
b6=new Box(700,450,50,50)
b7=new Box(750,450,50,50)
b8=new Box(800,450,50,50)
b9=new Box(850,450,50,50)

b10=new Box(500,400,50,50)
b11=new Box(550,400,50,50)
b12=new Box(600,400,50,50)
b13=new Box(650,400,50,50)
b14=new Box(700,400,50,50)
b15=new Box(750,400,50,50)
b16=new Box(800,400,50,50)

b17=new Box(550,350,50,50)
b18=new Box(600,350,50,50)
b19=new Box(650,350,50,50)
b20=new Box(700,350,50,50)
b21=new Box(750,350,50,50)

b22=new Box(600,300,50,50)
b23=new Box(650,300,50,50)
b24=new Box(700,300,50,50)

b25=new Box(650,250,50,50)

b26=new Box(1100,100,50,50)
b27=new Box(1150,100,50,50)
b28=new Box(1200,100,50,50)
b29=new Box(1250,100,50,50)
b30=new Box(1300,100,50,50)
b31=new Box(1350,100,50,50)
b32=new Box(1400,100,50,50)

b33=new Box(1150,50,50,50)
b34=new Box(1200,50,50,50)
b35=new Box(1250,50,50,50)
b36=new Box(1300,50,50,50)
b37=new Box(1350,50,50,50)

b38=new Box(1200,30,50,50)
b39=new Box(1250,30,50,50)
b40=new Box(1300,30,50,50)

b41=new Box(1250,10,50,50)

polygon=Bodies.rectangle(100,100,50,50,{density:1.5})
World.add(world,polygon)

slingshot=new Slingshot(polygon,{x:300,y:200})


Engine.run(engine);
}

function draw(){
background(bg)

//display ground and platform
fill("brown")
ground.display()
fill("white")
platform1.display()
platform2.display()

//displaying the boxes
fill(112,34,56)
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
b8.display()
b9.display()

fill(122,24,36)
b10.display()
b11.display()
b12.display()
b13.display()
b14.display()
b15.display()
b16.display()

fill(112,14,26)
b17.display()
b18.display()
b19.display()
b20.display()
b21.display()

fill(92,4,16)
b22.display()
b23.display()
b24.display()

fill(62,0,6)
b25.display()

fill(134,32,12)
b26.display()
b27.display()
b28.display()
b29.display()
b30.display()
b31.display()
b32.display()

fill(124,32,21)
b33.display()
b34.display()
b35.display()
b36.display()
b37.display()

fill(104,24,13)
b38.display()
b39.display()
b40.display()

fill(82,23,21)
b41.display()

    //score
    b1.score() 
    b2.score() 
    b3.score()
    b4.score()
    b5.score()
    b6.score()
    b7.score()
    b8.score() 
    b9.score()
    b10.score()
    b11.score()  
    b12.score()
    b13.score()
    b14.score() 
    b15.score()
    b16.score()
    b17.score()
    b18.score()
    b19.score() 
    b20.score()
    b21.score()
    b22.score() 
    b23.score()
    b24.score()
    b25.score()
    b26.score() 
    b27.score()
    b28.score() 
    b29.score()
    b30.score()
    b31.score()
    b32.score()
    b33.score() 
    b34.score()
    b35.score()
    b36.score()
    b37.score()
    b38.score() 
    b39.score()
    b40.score()
    b40.score()

slingshot.display();

imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,100,100)

push()
strokeWeight(17)
textSize(30)
fill("red")
stroke("black")
text("PRESS SPACE TO RETRY .YOU ATTEMPTED \n" +count +"  times",10,40)
text("SCORE:  "+score,10,170)
pop()
}

function mouseDragged(){
Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly()

}

function keyPressed(){
    if(keyCode===32){
       slingshot.attach(polygon)
       count=count+1
    }
}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
        bg = "cyan";
      
    } else {
        bg = "black";
    }
 
  
 }