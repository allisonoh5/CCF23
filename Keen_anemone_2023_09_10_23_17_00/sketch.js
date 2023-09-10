function setup()
{
  createCanvas(400, 400);
  background(178, 232, 255)

  //hair
  fill(157, 119, 67)
  stroke(172, 126, 80)
  strokeWeight(2)
  ellipse(200, 280, 270, 500)
  noStroke()
  fill(178, 232, 255)
  rect(65,350,270,80)

  //ears
  fill(227, 203, 162)
  ellipse(108, 170, 20, 55)
  ellipse(292, 170, 20, 55)

  //body
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(255, 219, 221)
  rect(80, 280, 230, 200, 70)

  //head
  noStroke()
  strokeWeight(1)
  fill(227, 203, 162)
  ellipse(200, 173, 180, [230])
  
  //bangs
  fill(157, 119, 67)
  noStroke()
  bezier(195,34,199,78,195,130,93,132)
  bezier(198,34,187,111,255,128,307,121) 

  //mouth
  fill(135, 67, 67)
  strokeWeight(2)
  bezier(240,237,202,258,202,258,160,237)

  //nose
  noFill()
  stroke(200, 120, 0)
  bezier(202,185,202,185,193,214,193,214)

  //eyebrows
  noFill()
  stroke(0, 0, 0)
  bezier(171,133,171,133,155,118,118,132)
  bezier(229,129,256,123,256,123,284,130)

  //eyes
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(245, 245, 245)
  ellipse(150, 155, 40, 22)
  ellipse(250, 155, 40, 22)
  //pupils
  fill(80, 60, 0)
  ellipse(150, 155, 18, 18)
  ellipse(250, 155, 18, 18)

  //earrings
  fill(250, 250, 250)
  stroke(260, 250, 250)
  strokeWeight(2)
  ellipse(107, 200, 10, 10)
  ellipse(291, 200, 10, 10)
}

function mousePressed()
//this function will tell you in the console (right click, inspect) what point you clicked
{
  console.log(mouseX + "," + mouseY)
}