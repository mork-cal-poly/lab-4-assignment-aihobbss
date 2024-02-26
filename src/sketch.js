let x = 260;
let x1 = 400;
let g = 400;
let r1 = 0;
let armx = x;

function setup() {
  let myCanvas = createCanvas(800, 800);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
drawCreature(x, 270, 0.40, r1)
}
function drawCreature(x,y,s,r1) {
  //moving arm
  
  push();
  translate(armx,y);
  rotate(r1);
  scale(s);
  stroke(0)
  fill(30)
  drawArm(r1)
  pop()
  
  push();
  translate(x,y)
  scale(s)
 
  //arms
  stroke(0)
  fill(30)
    
  //back behind leg
  quad(15,-50,65,-10,75,-10,65,-50)
  quad(65,-10,45,5,65,5,75,-10)
  //body
  quad(-60,-100,-55,-58,90,-30,80,-90)
  //first arm
  quad(-40,-80,-35,-35,-15,-50,-10,-80)
  quad(-35,-35,-60,10,-50,10,-15,-50)
  // ears
  triangle(-110,-110,-107,-130,-90,-123)
  triangle(-50,-110,-53,-130,-70,-123)
  //face
  ellipse(-80,-90,70) 
  
  //eyes
  fill('#D3E6A7')
  ellipse(-95,-90,7)
  fill(0)
  ellipse(-94,-90.3,3)
  fill('#D3E6A7')
  ellipse(-64,-90,7)
  fill(0)
  ellipse(-65,-90.3,3)
  fill(0)
  triangle(-92,-89,-93,-87,-92,-85)
  triangle(-67,-89,-66,-87,-67,-85)
  
  //nose
  stroke('#5C3734')
  fill('#5C3734')
  rect(-82,-77,4,6)
  triangle(-84,-77,-82,-77,-82,-75)
  triangle(-76,-77,-78,-77,-78,-75)
  
  //cheeks
  stroke(0)
  noFill()
  arc(-72,-70,15,15,PI/2,PI)
  arc(-88,-70,15,15,0,PI/2)
 //tail
  fill(30)
  quad(80,-90,80,-86,120,-70,130,-75)
  quad(130,-75,120,-70,150,-70,145,-75)
  quad(145,-75,150,-70,180,-105,175,-102)
  quad(175,-102,180,-105,167,-102,165,-100)
  
   //back leg
  quad(40, -50, 90, -10, 100, -10, 90, -50); 
  arc(65, -50, 50, 55, PI, 0); 
  quad(90, -10, 90, 10, 100, 10, 100, -10);
  quad(90, 10, 83, 15, 100, 15, 100, 10);
  pop();
}
 
//moving arm for creature
function drawArm() {
  push();
  quad(-65,-70,-85,-7,-74,-7,-50,-70)
  quad(-85,-7,-94,4,-83,4,-74,-7)
  ellipse(-92,4,16,9)
  pop();
}
