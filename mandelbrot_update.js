function setup() {
  //creating canvas
  createCanvas(400, 400);
  colorMode (HSB, 1);
	pixelDensity(1);
}

//calculate how fast the number grows
//function mandelbrot(c) {
//  var maxIter = 10;
	
//  var z = 0;
//  var n = 0;
  
//  while((abs(z) <= 2)&&(n < maxIter)) {
//    z = z*z + c;
//    n++;
//  }
//  return n;
//}

function draw() {
  background(220);
  loadPixels();
  
    //plot window
  var reStart = -2;
  var reEnd = 1;
  var imStart = -1;
  var imEnd = 1;
  var maxIter = 10;
  var n;
  
  //calculate pixels
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      //calculates constant
      //var c = createVector(reStart + (x / width) * (reEnd - reStart), 
                          //imStart + (y / height) * (imEnd - imStart));

      //compute number of iterations 
      //var m = mandelbrot(c);
      
      var a = map(x, 0, reStart, reEnd);
      var b = map(y, 0, imStart, imEnd);
      
      var ca = a;
      var cb = b;
      
      while(n < maxIter) {
        	var aa = a * a - b * b;
					var bb = 2 * a * b;
					a = aa + ca;
					b = bb + cb;
					if(abs(a + b) >  16) {
					break;
          }
          n++;
      }

      
      //compute color of pixel
      var hue = 255 - (n * 255 / maxIter);
      var saturation = 255;
      var bright = 255;
      
      //setting colors to black if they are in the mandelbrot set
      if (n === maxIter) {
      bright = 0;
      }
			
      var h = hue;
      var s = saturation;
      var b = bright;
      
					//drawing pixels
		var pix = (x + y * width) * 4;
		pixels[pix + 0] = b;
		pixels[pix + 1] = b;
		pixels[pix + 2] = b;
		pixels[pix + 3] = 255;
      // noprotect
    }
  }
  updatePixels();
  
}
