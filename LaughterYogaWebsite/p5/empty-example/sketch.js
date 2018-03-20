var r = 0;
var b = 225;
var col;
var bgcolor;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  // noCanvas();
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  // h1 = select("#title");
  h1 = createElement("h1", "Laughter Yoga");
  h1.position(350, 230);
  // h1.mouseMoved(draw);
}

function mouseMoved() {
    // r = map(mouseX, 0, 600, 0, 255);
    // b = map(mouseX, 0, 600, 255, 255);
    // h1.style("color", (r, 0, b));
    // var r = 0;
    //        var b = 225;
           // console.log("colorchanging");

          // var r = map(mouseX, 0, 600, 0, 255);
          // var b = map(mouseX, 0, 600, 255, 255);
          // var col = (r, 0, b);

          bgcolor = color(random(255));
    // var col = color(255, 255, 0);
    // h1.style("color", col);
    // fill(r, 0, b);
}

function draw() {
    // h1.style("color", col);
    h1.style("color", bgcolor);

}

// function draw() {
//     // r = map(mouseX, 0, 600, 0, 255);
//     // b = map(mouseX, 0, 600, 255, 255);
//     // h1.style("color", (r, 0, b));
//     // var r = 0;
//     //        var b = 225;
//            // console.log("colorchanging");
//           var r = map(mouseX, 0, 600, 0, 255);
//           var b = map(mouseX, 0, 600, 255, 255);
//           var col = (r, 0, b);
//     // var col = color(255, 255, 0);
//     // h1.style("color", col);
//     h1.style("color", "#ff0000");
//     // fill(r, 0, b);
// }

// var canvas;
// var h1;
// var value = 255;
// // var value = 0;
//
// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   h1 = select("#title");
//   h1.mouseMoved(draw);
  // canvas.mouseMoved(draw);
// }

// function colorChange() {
  // h1.style("color", "#ff0000");
  // console.log("heyoo");
  // h1.style("color", rainbowCanvas);
  // var colorTest;
  // h1.style("color", draw);
  // console.log("heyoo");
// }

// function mouseMoved() {
    // console.log("heyoo");
    // var r = 0;
    // var b = 225;
    // console.log("colorchanging");
    // r = map(mouseX, 0, 600, 0, 255);
    // b = map(mouseX, 0, 600, 255, 255);
    // fill(r, 0, b);
    // h1.style("color", "(r, 0, b)");
    // value = value + 5;
    // if (mouseMoved) {
      // value = 0;
//       h1.style("color", "(255, 0, 255)");
//       console.log("heyo");
//     }
// }
//     h1.style("color", "(0, 0, 255)");
//     console.log("heyo");
// }

// function draw() {
//   fill(value);
  // h1(25, 25, 50, 50);
// }

// function colorTest() {
//   var r = 0;
//   var b = 225;
//   console.log("colorchanging");
//   r = map(mouseX, 0, 600, 0, 255);
//   b = map(mouseX, 0, 600, 255, 255);
//   fill(r, 0, b);
// }

// function rainbowCanvas() {
//   col = map(mouseX, mouseY, 0, 600, 0, 255);
//   canvas.background(col);
// }

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
