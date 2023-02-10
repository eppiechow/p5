var img1;
var img2;
var img3;

function preload(){
 img1=loadImage("2glasses.png")
 img2=loadImage("me1.png")
 img3=loadImage("me2.png")
}

function setup (){
	createCanvas (460,574);
	//background(64);
}

function draw (){
	//rect(mouseX, mouseY, 20, 20);
//background(64);
  image(img2,0,0);
image(img1,mouseX, mouseY);
    if(mouseY >= 170 && mouseY < 225 && mouseX >= 20 && mouseX < 270){
    image(img3,0,0);}
image(img1,mouseX, mouseY);

  
  
}