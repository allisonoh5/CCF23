let song;
let fft;
let torusRadius;
let torusRotation = 0;
let radiusSlider, volumeSlider, bassSlider, trebleSlider;
let lowPass, highPass;
let torusArray = [];
let addButton;

function preload() {
  song = loadSound('bubleChristmas.mp3');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  song.play();
  fft = new p5.FFT();

  // Initialize filters
  lowPass = new p5.LowPass();
  highPass = new p5.HighPass();

  // Disconnect song from master output and connect to filters
  song.disconnect();
  song.connect(lowPass);
  lowPass.connect(highPass);

  // sliders
  radiusSlider = createSlider(50, 200, 100);
  radiusSlider.position(10, 10);
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.position(10, 40);
  bassSlider = createSlider(20, 22050, 22050, 1);
  bassSlider.position(10, 70);
  trebleSlider = createSlider(20, 22050, 20, 1);
  trebleSlider.position(10, 100);

  // button for adding toruses
  addButton = createButton('Add Torus');
  addButton.position(10, 130);
  addButton.mousePressed(addTorus);
}

function draw() {
  background(0);
  let spectrum = fft.analyze();

  // Adjust volume and filter frequencies
  song.setVolume(volumeSlider.value());
  lowPass.freq(bassSlider.value());
  highPass.freq(trebleSlider.value());

  // Calculate dynamic properties based on audio
  let lowFreqRange = 10;
  let highFreqRange = 40;

  let lowFreqSum = 0;
  for (let i = 0; i < lowFreqRange; i++) {
    lowFreqSum += spectrum[i];
  }
  let averageLowFreq = lowFreqSum / lowFreqRange;

  let newSize = map(averageLowFreq, 0, 255, 50, 300);
  torusRadius = lerp(radiusSlider.value(), newSize, 0.2);

  let highFreqSum = 0;
  for (let i = spectrum.length - highFreqRange; i < spectrum.length; i++) {
    highFreqSum += spectrum[i];
  }
  let averageHighFreq = highFreqSum / highFreqRange;

  let rotationSpeedY = map(averageHighFreq, 0, 255, -0.05, 0.05); // Slower rotation on Y-axis
  let rotationSpeedZ = map(averageHighFreq, 0, 255, -0.03, 0.03); // Rotation on Z-axis
  torusRotation += rotationSpeedY;

  // Render main and additional toruses
  push();
  rotateY(torusRotation);
  rotateZ(frameCount * rotationSpeedZ); // Rotate on the Z-axis based on frame count
  texture(createTexture(spectrum));
  torus(torusRadius, 30);
  pop();

  // Update and display each additional torus
  torusArray.forEach((t, index) => {
    // Update position
    t.x += t.xSpeed;
    t.y += t.ySpeed;

    // Basic collision detection with canvas edges
    if (t.x > width - t.radius || t.x < t.radius) {
      t.xSpeed *= -1;
    }
    if (t.y > height - t.radius || t.y < t.radius) {
      t.ySpeed *= -1;
    }

    // Check collision with other toruses
    for (let i = 0; i < torusArray.length; i++) {
      if (i !== index) {
        let d = dist(t.x, t.y, torusArray[i].x, torusArray[i].y);
        if (d < t.radius + torusArray[i].radius) {
          t.xSpeed *= -1;
          t.ySpeed *= -1;
        }
      }
    }

    // Display torus
    push();
    translate(t.x - width / 2, t.y - height / 2); // Adjust for WEBGL coordinate system
    rotateY(t.rotation);
    rotateZ(t.rotation);
    texture(createTexture(spectrum));
    torus(t.radius, 20);
    t.rotation += rotationSpeedY;
    pop();
  });
}

function addTorus() {
  let newTorus = {
    radius: random(30, 60),
    x: random(30, width - 30),
    y: random(30, height - 30),
    xSpeed: random(-2, 2),
    ySpeed: random(-2, 2),
    rotation: 0
  };
  torusArray.push(newTorus);
}

function createTexture(spectrum) {
  let texSize = 128;
  let tex = createGraphics(texSize, texSize);
  tex.background(0);

  for (let i = 0; i < texSize; i++) {
    let c = color(map(spectrum[i], 0, 255, 0, 255), 150, 255);
    tex.stroke(c);
    tex.line(i, 0, i, texSize);
  }

  return tex;
}
