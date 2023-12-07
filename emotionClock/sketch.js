let orb;  // stores vector

function setup() {
  createCanvas(windowWidth, windowHeight);
  orb = createVector(width / 2, height / 2);  // Initialize orb position as a vector
}

function draw() {
  let currentHour = hour();  // Get current hour

  // Define emotion based on the hour
  let emotion;
  if (currentHour >= 6 && currentHour < 12 || currentHour >= 20 && currentHour < 24) {
    emotion = "calm";
  } else if (currentHour >= 12 && currentHour < 16) {
    emotion = "euphoria";
  } else {
    emotion = "melancholy";
  }

  // Adjust visuals based on the emotion
  switch (emotion) {
    case "calm":
      background(135, 206, 235);  // Soft blue
      drawWaves(5, 0.005);        // Slow waves
      orb.y = lerp(orb.y, height / 2, 0.05); // modified
      break;
    case "euphoria":
      background(255, 255, 51);   // Bright yellow
      drawWaves(20, 0.03);        // Fast waves
      orb.y = lerp(orb.y, height * 0.25, 0.05); // modified
      break;
    case "melancholy":
      background(138, 43, 226);   // Deep purple
      drawWaves(20, 0.01);        // Moderate waves
      orb.y = lerp(orb.y, height * 0.75, 0.05); // modified
      break;
  }

  // Draw the floating orb
  fill(255);
  noStroke();
  ellipse(orb.x, orb.y, 50, 50); //modified
}

function drawWaves(numWaves, waveSpeed) {
  stroke(255);
  noFill();
  for (let i = 0; i < numWaves; i++) {
    let y = map(i, 0, numWaves, 0, height);
    beginShape();
    for (let x = 0; x < width; x += 10) {
      let yOffset = sin((x * waveSpeed) + (frameCount * waveSpeed * 2)) * 30;
      vertex(x, y + yOffset);
    }
    endShape();
  }
}
