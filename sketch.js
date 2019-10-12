var earth;
var img1; 

let x;
//var y;
//var speed = 0.01
//var diameter = 20
var ts = "RULE THE WORLD!";
function preload() {
    
earth = loadImage("Assets/earth.png")
img1 = loadImage("Assets/100.jpg")

}

function setup(){

createCanvas(1300,1000)
//x= width
//y= height
background(255)

push()
image(earth,300,0, 700, 700);
pop()
 
//x+= random(-speed, speed); 
//y += random (-speed,speed);
//image(img1,x,y,diameter,diameter);

   fill(0)
   textSize(90);
   stroke(0)
   strokeWeight(10)
   textFont('Helvetica');
   text(ts, 250, 190);
}

function draw(){
   var speed = 0.01
    var imageX = random(width);
    var imageY = random(height);
    var imageSize = random(10, 600);
    image(img1,imageX, imageY, imageSize)
    if(frameCount % 90 == 0){
       imageY(random(width), random(height), 20, 20);
    }
  
  
    // for (let i = 0; i < 100; i++) {
     //   let r = random(-50, 50);
        //line(50, i, 50 + r, i);   
  //x+= random(-speed, speed); 
  //y += random (-speed,speed);
  //image(img1,x,y,-speed,speed); 
} 
