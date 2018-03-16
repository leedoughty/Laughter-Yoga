var canvas;
var h1;
// var value = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  h1 = select("#title");
  // h1.mouseMoved(colorChange);
  canvas.mouseMoved(colorChange);
}

function colorChange() {
  h1.style("color", "#ff0000");
  console.log("heyoo");
}

// function draw() {
//
// }

// function mouseMoved(){
//   value = value + 5;
//   if (value > 255) {
//   value = 0;
//   fill(value);
//   console.log("heyo");
// }
// }

// function draw() {
//   fill(value);
//   h1(25, 25, 50, 50);
// }
