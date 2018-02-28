var canvas;
var h1;

function setup() {
  canvas = createCanvas(200, 200);
  h1 = createElement("h1, test");
}

function mouseMoved(){
  value = value + 5;
  if (value > 255) {
  value = 0;
  console.log("heyo");
}
}

function draw() {
  fill(value);
  h1(25, 25, 50, 50);
}
