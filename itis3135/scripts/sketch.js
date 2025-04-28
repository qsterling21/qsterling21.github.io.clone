function setup() {
    // set up the canvas
    createCanvas(600, 400);
  }
  
  function draw() {
    // sky background
    background(135, 206, 235);
  
    // sun
    fill("yellow");
    stroke("orange");
    strokeWeight(20);
    circle(550, 50, 100);
  
    // grass
    stroke(0);
    strokeWeight(1);
    fill("green");
    rect(0, 200, 600, 200);
  
    // flower
    textSize(75);
    text("🌸", 100, 250);
  
    // ladybug follows mouse
    text("🐞", mouseX, mouseY);
  }
  