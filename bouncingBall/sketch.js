let ball = {
  x: 100,
  y: 100,
  diameter: 20,
  speedX: 3,
  speedY: 3,
  color: [255, 0, 0],
};

let stairs = [];
let colors = [];
let numStairs = 8;

function setup() {
  createCanvas(800, 800);

  // Generate random colors for the ball
  for (let i = 0; i < numStairs; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }

  // Define the stairs
  let stairWidth = width / numStairs;
  let stairHeight = height / numStairs;
  for (let i = 0; i < numStairs; i++) {
    stairs.push({
      x: i * stairWidth,
      y: i * stairHeight,
      width: stairWidth,
      height: stairHeight,
    });
  }
}

function draw() {
  background(220);

  // Draw stairs
  noStroke();
  for (let i = 0; i < stairs.length; i++) {
    fill(150)
    rect(stairs[i].x, stairs[i].y, stairs[i].width, stairs[i].height);
  }

  // Ball physics
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Check collision with stairs and change color if collision detected
  for (let i = 0; i < stairs.length; i++) {
    if (
      ball.x + ball.diameter / 2 > stairs[i].x &&
      ball.x - ball.diameter / 2 < stairs[i].x + stairs[i].width &&
      ball.y + ball.diameter / 2 > stairs[i].y &&
      ball.y - ball.diameter / 2 < stairs[i].y + stairs[i].height
    ) {
      ball.speedY = -ball.speedY;
      ball.color = colors[i];
    }
  }

  // Draw ball
  fill(ball.color);
  ellipse(ball.x, ball.y, ball.diameter);

  // Check collision with floor and walls
  if (ball.y + ball.diameter / 2 > height || ball.y - ball.diameter / 2 < 0) {
    ball.speedY = -ball.speedY;
  }
  if (ball.x + ball.diameter / 2 > width || ball.x - ball.diameter / 2 < 0) {
    ball.speedX = -ball.speedX;
  }
}
