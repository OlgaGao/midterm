var oldman=[];
var mysound;


function preload(){
 oldman[0]=loadImage('old-man-game-character.png')
  oldman[1]=loadImage('running man.png')
  oldman[2]=loadImage('duck.png')
  soundFormats("mp3");
  mysound=loadSound('8bit.mp3')
  
}
function setup() {
  createCanvas(600, 400);
  frameRate(60);
}
var a=30;
var as=3;
var b=100;
var bs=5;
var c=30
var cs=4

function draw() {
  background(220);
  fill(225,225,0)
  
  image(oldman[1],a,30);
  
  fill(255,0,0,50)
  image(oldman[2],b,mouseY);
  fill(100);
  image(oldman[0],mouseY,c,80,100);
  

  a=a+as;
  b=b+bs;
  c=c+cs;
  if(a>=600){
  
    as=-3;
    //rotate(angle);
  }
  if(b>=400){
    bs=-5;
  }
  
  if(a<=0){
    as=3;
  }
  if(b<=0){
    bs=5;
  }
  if(c>=300){
    cs=-4
  }
  if(c<=20){
    cs=4;
  }
  if (mouseIsPressed) {
    mysound.play();
  }
}
