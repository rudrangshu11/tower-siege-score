const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,base1, base2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32, block33, block34, block35, block36, block37, block38;
var polygon, polygonImg, slingshot;
var score = 0;

function preload(){
  //  polygonImg = loadImage("polygon.png");
  getTime();
}

function setup(){
createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;
    
    //Bodies
    ground = new Ground(800, 700, 1600, 20);
    base1 = new Ground(600, 600, 300, 10);
    base2 = new Ground(1000, 300, 240, 10);
    block1 = new Box(480, 580);
    block2 = new Box(510, 580);
    block3 = new Box(540, 580);
    block4 = new Box(570, 580);
    block5 = new Box(600, 580);
    block6 = new Box(630, 580);
    block7 = new Box(660, 580);
    block8 = new Box(690, 580);
    block9 = new Box(720, 580);
    block10 = new Box(920, 280);
    block11 = new Box(950, 280);
    block12 = new Box(980, 280);
    block13 = new Box(1010, 280);
    block14 = new Box(1040, 280);
    block15 = new Box(1070, 280);
    block16 = new Box(510,540);
    block17 = new Box(540,540);
    block18 = new Box(570,540);
    block19 = new Box(600,540);
    block20 = new Box(630,540);
    block21 = new Box(660,540);
    block22 = new Box(690,540);
    block23 = new Box(540,500);
    block24 = new Box(570,500);
    block25 = new Box(600,500);
    block26 = new Box(630,500);
    block27 = new Box(660,500);
    block28 = new Box(570,460);
    block29 = new Box(600,460);
    block30 = new Box(630,460);
    block31 = new Box(600,420);
    block32 = new Box(950,240);
    block33 = new Box(980,240);
    block34 = new Box(1010,240);
    block35 = new Box(1040,240);
    block36 = new Box(980,200);
    block37 = new Box(1010,200);

    polygon = new Polygon(100, 200);
    slingshot = new SlingShot(polygon.body, {x:150, y:200});
    Engine.run(engine);

}
function draw(){
    if(background){
    background(0);
    }
    textSize(20);
    fill('cyan');
    text("Score :"  +score, width - 300, 50);
    ground.display();
    base1.display();
    base2.display();
    block1.display();
    block1.score();

    block2.display();
    block2.score();
    
    block3.display();
    block3.score();

    block4.display();
    block4.score();
  
    block5.display();
    block5.score();

    block6.display();
    block6.score();

    block7.display();
    block7.score();

    
    block8.display();
    block8.score();
    
    block9.score();
    block9.display();

    block10.display();
    block10.score();

    block11.display();
    block11.score();

    block12.display();
    block12.score();

    block13.display();
    block13.score();
    
    block14.display();
    block14.score();
    
    block15.display();
    block15.score();

    block16.display();
    block16.score();
    
    block17.display();
    block17.score();

    block18.display();
    block18.score();

    block19.display();
    block19.score();

    block20.display();
    block20.score();

    block21.display();
    block21.score();

    block22.display();
    block22.score();

    block23.display();
    block23.score();

    block24.display();
    block24.score();

    block25.display();
    block25.score();

    block26.display();
    block26.score();

    block27.display();
    block27.score();

    block28.display();
    block28.score();
    
    block29.display();
    block29.score();
    
    block30.display();
    block30.score();

    block31.display();
    block31.score();

    block32.display();
    block32.score();

    block33.display();
    block33.score();

    block34.display();
    block34.score();

    block35.display();
    block35.score();

    block36.display();
    block36.score();

    block37.display();
    block37.score();
    //block38.display();

    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
 async function getTime(){
    //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //console.log(response);
    var jsonres = {"abbreviation":"IST","client_ip":"49.37.1.250","datetime":"2020-12-24T7:00:14.492864+05:30","day_of_week":4,"day_of_year":359,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1608830414,"utc_datetime":"2020-12-24T17:20:14.492864+00:00","utc_offset":"+05:30","week_number":52}
    var dateTime = jsonres.datetime
    //console.log(dateTime)
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if(hour>= 6 && hour<= 17){
        
    }
    if(hour>= 17 && hour<= 6){
        background('purple');
    }
}