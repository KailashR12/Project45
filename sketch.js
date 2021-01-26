const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup(){
  createCanvas(1000,900);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.


  Engine.run(engine);

  const sectors = [
    {color:"green", label:"200", question: "What is 10x10?"},
    {color:"red", label:"200", question: "True or False: Is a lion a Herbivore?"},
    {color:"blue", label:"200", question: "What year did the United States Of America get its independence?"},
    {color:"green", label:"400", question: "What is the square root of 169?"},
    {color:"red", label:"400", question: "What accounts for 99% of the mass in our solar system?"},
    {color:"blue", label:"400", question: "Who was the 44th President of the United States?"},
    {color:"green", label:"600", question: "What is 80% of 95?"},
    {color:"red", label:"600", question: "What was Newton's first law of Motion?"},
    {color:"blue", label:"600", question: "Who was the first Vice President of the United States?"},
    {color:"green", label:"800" , question: "Simplify the equation (2x+3)+(4x+7) "},
    {color:"red", label:"800", question: "What is H2O2?"},
    {color:"blue", label:"800", question: "The settelers of the US came from where? "},
    {color:"green", label:"1000", question: "Whats the slope in the equation y=7x-20?"},
    {color:"red", label:"1000", question: "Who said that E=mc^2"},
    {color:"blue", label:"1000", question: "Who was the author of the Decloration of Independence?"},
    {color:"yellow", label:"2000", question: "What Indian mausoleum was called a “teardrop… on the cheek of time” by Nobel Prize in Literature laureate Rabindranath Tagore?"},
  ];
}


function draw(){
  rectMode(CENTER);
  background(0);

  drawSprites();
}