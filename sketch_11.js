function setup() { 
  createCanvas(400, 400);
 

 
  background(0);
strokeWeight(2);
	frameRate(10);
}
var x=10;

function draw(){

	if(x<400){
		stroke (0);
		line(x,400,x,0);
		stroke (255);
		line(x,400,x,random(0,400))
		x+=10;
	}else{
		x=10;
	}
}
