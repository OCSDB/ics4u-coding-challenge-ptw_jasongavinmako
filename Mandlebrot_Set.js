function setup () {
//making canvas
createCanvas(360, 360);
	colorMode (HSB, 1);
pixelDensity(1);
}
//changes canvas size
var minval = -2;
var maxval = 2;
	function draw (){
loadPixels();
var max = 100
for (var x = 0; x < width; x++) {
	for(var y = 0; y < height; y++) {

var a = map(x, 0, width, minval, maxval);
var b = map(y, 0, height, minval, maxval);
var n = 0;

var ca = a;

var cb = b;

while(n < max) {
	var aa = a * a - b * b;
	var bb = 2 * a * b;
	a = aa + ca;
	b = bb + cb;
	if(abs(a + b) >  16) {
		break;
}
n++
}
var bright = map (n, 0, max, 0, 255);
		if (n == max) {
			bright = 0;
		}



		//drawing pixels
		var pix = (x + y * width) * 4;
		pixels[pix + 0] = bright;
		pixels[pix + 1] = bright;
		pixels[pix + 2] = bright;
		pixels[pix + 3] = 255;
		
}
	
}

updatePixels();
	}

