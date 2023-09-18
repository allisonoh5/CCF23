
function setup() {
    createCanvas(800, 600);
    noLoop();
}

function draw() {
    background(0);
  
  //create color pallete
    let colors = ['#FF4B3E', '#FFB20F', '#ABFF4F', '#29FFC6'];
    
    // Drawing a series of circles with various colors, resembling a watermelon slice
    for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
            let index = floor(random(colors.length));
            fill(colors[index]);
            ellipse(i, j, 20, 20);
        }
    }
    
// Drawing a slice of watermelon
    fill('#f52c2c'); // Red rind
    arc(400, 200, 500, 500, PI / 6, 5 * PI / 6);
  
    fill('#fffcfc'); // White flesh
    arc(400, 200, 400, 400, PI / 6, 5 * PI / 6);
    
    // Drawing seeds on the watermelon
    fill('#000000'); 
    // Black seeds
    for (let i = 0; i < 10; i++) {
        ellipse(400+ random(-100,100), 300 + random(0, 40), 10, 15);
    }
  
  //bottom half
  stroke(5)
  strokeWeight(0);
  fill('#FDFF75');
  rect(0,350,800,300);
   for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
            let index = random(-10,10);
            fill('#000');
            ellipse(i, j, 20, 20);
        }
    }
  
  //bottom half watermelon rind
  fill('#802525'); // Red rind
    arc(400, 350, 400, 130, 0,PI);
  fill('#54ccc0'); // Blue flesh
    arc(400, 350, 269, 40, 0,PI);
  
  
    // Drawing forks
    drawFork(550, 400);
    drawFork(50, 530);
    drawFork(400, 570);
    drawFork(600, 500);
}

function drawFork(x, y) {
    // Drawing a fork handle
    strokeWeight(10);
    stroke('#000000'); // Grey fork handle with grey outline
    line(x, y, x + 50, y);
    
    // Drawing the prongs of the fork
    strokeWeight(4);
    stroke('#000000'); // Black outline for the prongs
    fill('##00000'); // Black prongs
    beginShape();
    vertex(x + 50, y);
    vertex(x + 70, y - 20);
    vertex(x + 70, y - 15);
    vertex(x + 50, y);
    vertex(x + 70, y);
    vertex(x + 70, y + 5);
    vertex(x + 50, y);
    vertex(x + 70, y + 20);
    vertex(x + 70, y + 15);
    vertex(x + 50, y);
    endShape(CLOSE);
}

