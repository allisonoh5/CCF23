let song;
let fft;
let torusRadius;
let torusRotation = 0;

function preload() {
  song = loadSound('Aphex Twin-Xtal.mp3'); 
}

function setup() {
  createCanvas(400, 400, WEBGL);
  song.play();
  fft = new p5.FFT();
  torusRadius = 100; // Initial torus size
}

function draw() {
  background(0);
  let spectrum = fft.analyze();

  // Calculate average value of low freq range
  let lowFreqSum = 0;
  let lowFreqRange = 10; // Adjust value to target diff frequency ranges
  for (let i = 0; i < lowFreqRange; i++) {
    lowFreqSum += spectrum[i];
  }
  let averageLowFreq = lowFreqSum / lowFreqRange;

  // Map average low frequency value to torus size
  let newSize = map(averageLowFreq, 0, 255, 50, 200);

  // Update torus size based on audio
  torusRadius = lerp(torusRadius, newSize, 0.1);

  // Calculate average value of the high-frequency range
  let highFreqSum = 0;
  let highFreqRange = 40; // Adjust value to target different frequency ranges
  for (let i = spectrum.length - highFreqRange; i < spectrum.length; i++) {
    highFreqSum += spectrum[i];
  }
  let averageHighFreq = highFreqSum / highFreqRange;

  // Map average high-frequency value to speed torus rotation
  let rotationSpeed = map(averageHighFreq, 0, 255, -0.1, 0.1);

  // Update torus rotation based on audio
  torusRotation += rotationSpeed;

  // Apply colorful texture to the torus
 texture(createTexture(spectrum));

  // Draw the torus
  rotateY(torusRotation);
  torus(torusRadius, 30);
}

function createTexture(spectrum) {
  let texSize = 128;
  let tex = createGraphics(texSize, texSize);
  tex.background(0);

  // Generate colorful texture based on audio spectrum
  for (let i = 0; i < texSize; i++) {
    let c = color(map(spectrum[i], 0, 255, 0, 255), 150, 255);
    tex.stroke(c);
    tex.line(i, 0, i, texSize);
  }

  return tex;
}
