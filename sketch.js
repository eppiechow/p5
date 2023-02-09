var img1;
var img2;
var img3;

function preload(){
 img1=loadImage("1glasses.png")
 img2=loadImage("me1.png")
 img3=loadImage("me2.png")
}

function setup (){
	createCanvas (460,574);
	//background(64);
}

function draw (){
	fill(0,15,255);
	//rect(mouseX, mouseY, 20, 20);
//background(64);
  image(img2,0,0);
image(img1,mouseX, mouseY);
    if(mouseY >= 100 && mouseY < 220 && mouseX < 300){
    image(img3,0,0);}
image(img1,mouseX, mouseY);

  
  
}