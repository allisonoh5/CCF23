let x = 0;
let y = 0;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(173, 216, 230);

  // moving the ball 15% towards the mouse per frame on the x axis.
  // moving the ball 5% towards the mouse on the y axis.
  // this allows the ball to look like it is on defense in a basketball game, trying to block you from something. Principle of animation: timing
  
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
 
 // Draw the turtle's shell
  fill(34, 139, 34);
  ellipse(x, y, 120, 80);


  // Draw the turtle's legs
  ellipse(x - 50, y + 30, 40, 20); // Left hind leg
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