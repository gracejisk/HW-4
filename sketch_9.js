function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
stroke (255);
	
	for (var x=20; x<=380; x=x+10){
		var startX=20;
		var startY=x;
		var endX= x;
		var endY=20;
		line(startX, startY, endX, endY);
	}

	for (var x=380; x>=30; x=x-10){
		var startX= 380;
		var startY= x;
		var endX= x;
		var endY= 380;
		line (startX, startY, endX, endY);
	}

	noStroke();
	textSize(280);
	text("P", 100,300);
	fill(0,0,0);
}

	
