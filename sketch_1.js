function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);

	for(var i=0; i<400; i+=20) {
		
		var x=0+i
		var y=0+i;
		
		ellipse (x,y, 20, 20);
	}
}
