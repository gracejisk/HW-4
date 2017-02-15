function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
stroke(255);
for (var x=20; x<=380; x=x+10){
	for( var y=20; y<=380; y=y+10){
	line (x,20,x,380);
line (20,y,380,y);
	}
}
}
