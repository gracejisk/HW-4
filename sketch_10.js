var lengths = [];

function setup() {
  createCanvas(400, 400);
  
  for (var y = 0; y < 400; y = y + 1) {
    lengths.push(random(width));
  }
  
}

function draw() {
  background (0);
  
  for (var y = 0; y < height; y = y + 3) {
    stroke(255, 255, 255);
    strokeWeight(1);
    line(y, 400, y, lengths[y]);
  }
}
	
