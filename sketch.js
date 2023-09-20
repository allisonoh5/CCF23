let x = 0;
let y = 0;
let cloud1X = 0;
let cloud2X = -200;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(173, 216, 230);

  // Moving the ball 15% towards the mouse per frame on the x axis.
  // Moving the ball 5% towards the mouse on the y axis.
  
  if(y>250){
      x = lerp(x, mouseX, 0.03);
      y = lerp(y, mouseY, 0.03);
  }
  else if(y<=250){
      x = lerp(x, mouseX, 0.15);
      y = lerp(y, mouseY, 0.05);
  }
  
  //ocean
  fill(0,0,255);
  noStroke();
  rect(0, 250, width, 150);
 
  // Drawing clouds
  drawCloud(cloud1X, 100, 100, 60);
  drawCloud(cloud2X, 50, 200, 40);
  
  cloud1X += 1;
  cloud2X += 1;
  
  if (cloud1X > width) {
    cloud1X = -200;
  }
  
  if (cloud2X > width) {
    cloud2X = -200;
  }
  
  // Draw the turtle's shell
  fill(34, 139, 34);
  ellipse(x, y, 120, 80);

  // Draw the turtle's legs
  fill(34, 139, 34);
  ellipse(x - 60, y + 30, 40, 20); // Left hind leg
  ellipse(x + 60, y + 30, 40, 20); // Right hind leg


  // Draw the turtle's head
  fill(34, 139, 34);
  ellipse(x + 70, y - 20, 40, 30);

  // Draw the turtle's eyes
  fill(0);
  ellipse(x + 80, y - 25, 5, 5); 

  // Draw the turtle's smile
  fill(0);
  arc(x + 80, y - 15, 20, 10, 0, HALF_PI);
}

function drawCloud(x, y, w, h) {
  fill(255);
  ellipse(x, y, w, h);
  ellipse(x - 20, y - 20, w - 20, h - 20);
  ellipse(x + 20, y - 20, w - 20, h - 20);
  ellipse(x + 40, y, w - 20, h - 20);
}
