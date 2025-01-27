function setup() {
  createCanvas(500, 500);
    background(20); 
}

function draw (){

  // Rotate around the y-axis.


  fill(250,250,250)

  
 // Style the line.
  stroke('magenta');
  strokeWeight(5);

  line(0, 0, mouseX, mouseY);
  square(mouseX, mouseY, 55);
  
}
