function setup()
{
  createCanvas(400, 400);
  background(237, 237, 237)

  //hair
  fill(157, 119, 67)
  stroke(172, 126, 80)
  strokeWeight(2)
  ellipse(200, 400, 300, 800)
  noStroke()
  fill(237, 237, 237)
  rect(30,350,340,80)
  
  //neck
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(227, 203, 162)
  rect(167, 250, 65, 100)

  //head
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(227, 203, 162)
  ellipse(200, 173, 170, [230])
  
  //body
  stroke(0, 0, 0)
  strokeWeight(1)
  fill(255, 219, 221)
  rect(85, 330, 240, 100, 20)
  
  //bangs
  fill(157, 119, 67)
  noStroke()
  bezier(195,34,199,78,195,130,93,132)
  bezier(198,34,187,111,255,128,307,121) 

  //mouth
  fill(135, 67, 67)
  strokeWeight(2)
  bezier(240,237,202,258,202,258,160,237)
         bezier(169,240,202,228,202,228,230,240)

  //nose
  noFill()
  strokeWeight(1)
  stroke(0, 0, 0)
  line(203,182,204,201)
  line(204,201,195,201)

  //eyebrows
  noFill()
  strokeWeight(1)
  stroke(0, 0, 0)
 bezier(172,133,175,133,155,118,118,132)
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
  //lashes left
  noFill()
  strokeWeight(1)
  line(130,156,127,146)
  line(132,150,131,141)
  line(137,138,137,145)
  line(147,138,147,142)
  line(157,140,157,142)
  //lashes right
  line(270,153,276,148)
  line(267,150,270,142)
  line(261,145,262,140)
  line(253,143,253,139)
  line(243,143,243,140)

  //earrings
  fill(250, 250, 250)
  stroke(260, 250, 250)
  strokeWeight(2)
  ellipse(115, 200, 10, 10)
  ellipse(286, 200, 10, 10)
  
}

function mousePressed()
//this function will tell you in the console (right click, inspect) what point you clicked
{
  console.log(mouseX + "," + mouseY)
}