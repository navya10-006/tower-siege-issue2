const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,polygon
var polygonImg,sling1

function setup(){
    var canvas=createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,590,1200,20);
    stand1=new Ground(450,500,350,10);
    //pyramid1 level1
    box1=new Box(300,470,30,40);
    box2=new Box(350,470,30,40);
    box3=new Box(400,470,30,40);
    box4=new Box(450,470,30,40);
    box5=new Box(500,470,30,40);
    box6=new Box(550,470,30,40);
    box7=new Box(600,470,30,40);
    //pyramid1 level2
    box8=new Box(325,420,30,40);
    box9=new Box(375,420,30,40);
    box10=new Box(425,420,30,40);
    box11=new Box(475,420,30,40);
    box12=new Box(525,420,30,40);
    box13=new Box(575,420,30,40);
    //pyramid1 level3
    box14=new Box(350,370,30,40);
    box15=new Box(400,370,30,40);
    box18=new Box(450,370,30,40);
    box16=new Box(500,370,30,40);
    box17=new Box(550,370,30,40);
    //pyramid1 level4
    box19=new Box(375,320,30,40);
    box20=new Box(425,320,30,40);
    box21=new Box(475,320,30,40);
    box22=new Box(525,320,30,40);
    //pyramid1 level5
    box23=new Box(400,270,30,40);
    box24=new Box(450,270,30,40);
    box25=new Box(500,270,30,40);
    //pyramid1 level6
    box26=new Box(425,220,30,40);
    box27=new Box(475,220,30,40);
    //pyramid1 level7
    box28=new Box(450,170,30,40);
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    polygonImg=loadImage("polygon.png");
    sling1=new SlingShot(polygon.body,{x:30,y:200});
}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    stand1.display();
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
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    sling1.display();
}