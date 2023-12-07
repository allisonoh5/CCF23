let memes = [];
let selectedMeme;
let input1, input2;
let dropdown;

function preload() {
  // Load your images here
  memes[0] = loadImage('dogmeme1.jpeg');
  memes[1] = loadImage('dogmeme2.jpeg');
  memes[2] = loadImage('dogmeme3.jpeg');
}

function setup() {
  createCanvas(500, 500);
  
  // Dropdown for selecting memes
  dropdown = createSelect();
  dropdown.option('Dog Meme 1');
  dropdown.option('Dog Meme 2');
  dropdown.option('Dog Meme 3');
  dropdown.changed(updateMemeSelection);
  dropdown.position(5, height+5); 
  
  // Input fields for texts
  input1 = createInput('Top Text');
  input1.position(5, height+45);
  input2 = createInput('Bottom Text');
  input2.position(5, height+75);
  
  // Default meme selection
  selectedMeme = memes[0];
}

function draw() {
  background(255);
  image(selectedMeme, 0, 0, width, height);
  
  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(input1.value(), width/2, 40);
  text(input2.value(), width/2, height - 40);
}

function updateMemeSelection() {
    let i = dropdown.elt.selectedIndex;
    selectedMeme = memes[i];
}

