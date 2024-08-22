function setup() {
  createCanvas(800, 800, WEBGL);
  
}

var x = 1;
var y = 0;
var z = 0;

var a = 10;
var b = 28;
var c = 8/3;

let points = [];

function draw() {
  clear();
  background(0);

  var dt = .01;

  var dx = a * (y - x) * dt;
  var dy = (x *( b - z) - y) * dt;
  var dz = (x*y - c*z) * dt;

  x += dx;
  y += dy;
  z += dz;

  points.push({x:x, y:y, z:z});

  // Enable orbiting with the mouse.
  orbitControl();

  // Rotate the coordinate system 1/8 turn.
  rotateY(QUARTER_PI);


  noFill();
  

  beginShape();
  scale(5)

  var hue = 0;
  for (const v of points) {
    stroke(255 * hue, 6000 * hue % 255, 255);
    vertex(v.x, v.y, v.z);
    hue += .01;
    if (hue > 1){
      hue = 0;
    }
  }
  endShape();

}
