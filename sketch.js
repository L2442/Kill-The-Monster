const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    backgroundImg = loadImage("GamingBackground.png");
}

function setup(){
    createCanvas(1350, 650);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,307,70,70);
    box2 = new Box(750,377,70,70);
    box3 = new Box(750,447,70,70);
    box4 = new Box(750,517,70,70);
    box5 = new Box(750,587,70,70);
    box6 = new Box(750,657,70,70);

    box7= new Box(650, 307, 70, 70);
    box8= new Box(650, 377, 70, 70);
    box9= new Box(650, 447, 70, 70);
    box10= new Box(650, 517, 70, 70);
    box11= new Box(650, 587, 70, 70);
    box12= new Box(650, 657, 70, 70);

    box13 = new Box(550, 167, 70, 70);
    box14 = new Box(550, 237, 70, 70);
    box15 = new Box(550, 307, 70, 70);
    box16 = new Box(550, 477, 70, 70);
    box17 = new Box(550, 447, 70, 70);
    box18 = new Box(550, 517, 70, 70);
    box19 = new Box(550, 587, 70, 70);
    box20 = new Box(550, 657, 70, 70);

    ground = new Ground(0,600,2700,25);
    monster = new Monster(1100, 500, 200);
    hero = new Hero(200, 200, 80);
    rope = new Rope(hero.body, {x:300, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
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
    hero.display();

    monster.display();
    ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}