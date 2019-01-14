function setup() {
  createCanvas(300, 200);
  colorMode(HSB, 255);
	this.maxIter = 80;
	this.reStart = -2;
	this.reEnd = 1;
	this.imStart = -1;
	this.imEnd = 1;
}


function draw() {  
  for (var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
			
			var m = mandelbrot(x, y);
			
			var hue = 255 * m / this.maxIter;
      var bright = 255;
      if (m == this.maxIter) {
        //calculates numbers that are in the mandelbrot set
        bright = 0;
      }
      noStroke();
      stroke(hue, 255, bright);
			point(x, y);
			//noprotect
		}
	}
}

function mandelbrot(x, y) {
  var a = map(x, 0, width, -2, 1);
  var b = map(y, 0, height, -1, 1);
  //mouseX and mouseY changes constant, allowing for pattern to change depending on mouse location
  var ca =   map(mouseX, 0, width, -2, 2);
  var cb =   map(mouseY, 0, height, -2, 2);
      
  //calculating real and complex componenets for the next generation
  for(var n = 0; n < maxIter; n++) {
    var aa = a * a - b * b;
    var bb = 2 * a * b;
        
    a = aa + ca;
    b = bb + cb;
        
    if (abs(a + b) > 100) {
      break;
    }
  }
	return n;
}(220);
