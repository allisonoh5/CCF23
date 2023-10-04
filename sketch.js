let hourAngle, minuteAngle, secondSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(245);

  let hours = hour() % 12;  // 0-11
  let minutes = minute();   // 0-59
  let seconds = second();   // 0-59

  translate(width / 2, height / 2);

  // Hours as rotating concentric circles
  for (let i = 1; i <= hours; i++) {
    let radius = i * 20; // space out the circles
    let offsetAngle = 360 * (i / 12); // each circle rotates by a different amount
    let x = radius * cos((hourAngle + offsetAngle) % 360);
    let y = radius * sin((hourAngle + offsetAngle) % 360);
    fill(50, 50 + i * 10, 200 - i * 10);  // changing color for each circle
    ellipse(x, y, 15, 15);
  }

  // Minutes as radiating lines
  stroke(0, 150, 0);
  strokeWeight(2);
  let spacing = 360 / 60;  // each line is spaced by 6 degrees
  for (let i = 0; i < minutes; i++) {
    let x = 150 * cos(i * spacing);
    let y = 150 * sin(i * spacing);
    line(0, 0, x, y);
  }

  // Seconds as a pulsing circle
  let pulseSize = map(seconds, 0, 59, 10, 50);
  fill(255, 0, 0, 150);  // semi-transparent red
  ellipse(0, 0, pulseSize, pulseSize);

  // Update the angles
  hourAngle = map(hours, 0, 12, 0, 360) + map(minutes, 0, 60, 0, 30); // the hour circle will move half a degree each minute
  minuteAngle = map(minutes, 0, 60, 0, 360);
}

