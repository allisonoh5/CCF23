// Classifier Variable
let classifier;

// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/_81zbs4jl/';

// Video
let video;
let flippedVideo;

// To store the classification
let label = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  // Create a larger canvas than the video size
  createCanvas(640, 480);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video in the center
  image(flippedVideo, (width - video.width) / 2, (height - video.height) / 2);

  // Provide feedback based on the label
  if (label === "Face not clearly detected") {
    fill(255, 0, 0); // Red text
    textSize(16);
    text(label, width / 2, height - 50); 
    // Display above video
  } else {
    // Draw a background box for label
    fill(0, 102, 153, 200); // Semi-transparent background box
    noStroke();
    rect((width - video.width) / 2, height - 35, video.width, 24);

    // Draw the label
    fill(255); // White text
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 16);
  }

  // feedback based on label
  textSize(32);
  textAlign(CENTER);
  if (label == "Your mouth is closed") {
    fill(255);
    text("😐", width / 2, 100); // Positioned above the video
  }
  else if (label == "Your mouth is open") {
    fill(255);
    text("😮", width / 2, 100); // Positioned above the video
  }
  else if (label == "Where are you?") {
    fill(255);
    text("🤔", width / 2, 100); // Positioned above the video
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  label = results[0].label;
  let confidence = results[0].confidence;

  // Log the label and confidence for debugging
  console.log(label, confidence);

  // Define a threshold for confidence
  if (confidence < 0.75) {
    label = "Face not clearly detected";
  }

  // Classify again
  classifyVideo();
}
