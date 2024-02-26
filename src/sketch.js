let x = 260;
let x1 = 400;
let g = 400;
let r1 = 0;
let armx = x;
let sceneChanged = false;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
   //changing scene
  push();
  if (x < 220 && !sceneChanged) {
    x = 210;
    scene2();
    sceneChanged = true;
  }
  pop(); 
  if (!sceneChanged) { // If the scene hasn't changed yet
    scene1();
      //moving cat
    push();
    drawCreature(x,270, 0.40,r1)
    x = x - 0.3
    armx = x - 0.3
     if (x < 220) {
      x = 220;
      sceneChanged = true;
    }
  } else {
    scene2();
    //moving cat for scene 2
    drawCreature(x1, 320, 1, r1);
    x1 -= 0.7;
    armx =x1 - 0.7;
    g -= 0.4;
    if (x1 <295) {
      x1 = 295
      armx = 220
      r1 = PI/4
    }
    if (g < 305) {
      push();
      translate(100,200);
      fill(255);
      ellipse(130, 30, 20, 20);
      ellipse(100, 30, 20, 20);
      fill(0);
      ellipse(130, 30, 5, 5);
      ellipse(100, 30, 5, 5);
    }
  }
}
function scene1(){
  scale(2)
  push();
  background('pink');
  translate(200,200)
  stroke(0);
  //wall left
  fill('rgb(253,131,153)')
  quad(-200,-200,-200,200,-80,75,-80,-55)
  //wall right
  quad(200,-200,200,200,80,75,80,-55)
  rect(-80,-55,160,130)
  //window
  fill('powderblue')
  rect(-10,-20,60,40)
  //grass outside
  fill('green')
  rect(-10,10,60,10)
  
  //window frame
  fill('#AE6800')
  quad(-13,-23,-10,-20,50,-20,53,-23)
  quad(-10, 20,-13, 23, 53, 23, 50, 20)
  quad(-13,-23,-10,-20,-10,20, -13,23)
  quad(50,-20,53,-23,53,23,50,20)
  //crossing-frame
  rect(-10,-1,60,3)
  rect(19,-20,3,40)
  pop();

  push();
  translate(200,200)
  stroke(0);
//light color table legs(left then right)
  fill('#7A5548')
  rect(-140,95,15,80)
  rect(115,95,15,80)
//dark color in back
  fill('#503B34')
  rect(-70,50,12,80)
  rect(58,50,12,80)
//dark color 3d table legs(front right)
  quad(-125,95,-125,175,-120,168,-120,95)
//front left
  quad(115,95,115,175,110,168,110,95)
//back left
  quad(-58,50,-58,130,-56,125,-56,50)
//back right
  quad(58,50,58,130,56,125,56,50)
//tabletop
  fill('#795548')
  quad(-70,50,-140,90,130,90,70,50)
//tabletop 3d
  rect(-140,90,270,8)
  pop();

  push();
  translate(150,210)
  scale(0.8)
  //flowerstems
  stroke(0,255,0);
  noFill();
  curve(-24,15,-12,10,-19,0,-24,-2)
  curve(-24,15,-5,10,-12,-5,-15,-9)
  line(0,10,-4,-5)
  line(3,10,5,-15)
  curve(15,9,10,10,19,5,22,15)

//vase 
  noStroke();
  fill(255)
  quad(-17,10,-5,30,5,30,17,10)
  ellipse(0,50,30,55)
//flowers
  flower(19,5,1.3)
  flower(-19,0,1.4)
  flower(-12,-5,1.2)
  flower(-4,-5,1.5)
  flower(5,-15,1.6)
  pop();

}
function flower(flowerx,flowery,flowers) {
  push();
  translate(flowerx,flowery)
  scale(flowers)
  noStroke();
  fill('purple') 
  ellipse(0,0,3,8)
  rotate(PI/2);
  ellipse(0,0,3,8)
  fill('yellow')
  ellipse(0,0,3)
  pop();
}

function surprise(grenadex,grenadey,grenades,grenader) {
  push();
  translate(grenadex,grenadey)
  rotate(grenader)
  scale(grenades)
  noStroke();
  fill('green')
  rect(0,0,5,5)
  strokeWeight(2)
  stroke('rgb(1,63,1)')
  line(0,0,5,0)
  stroke(100)
  line(0,5,5,5)
  strokeWeight(1)
  fill(100)
  quad(6,0,10,5,12,10,12,5)
  noFill()
  ellipse(5,3,4,4)
  //body 
  fill('rgb(1,63,1)')
  ellipse(2.5,17,17.5,22)
  noFill()
  strokeWeight(0.5)
  //horizontal lines
  arc(5,17,14.5,28,2*PI/3, 4*PI/3)
  arc(0,17,14.5,28,5*PI/3, PI/3)
  line(2.5,5,2.5,28)
  //vertical lines
  arc(2.5,17,28,14.5,5*PI/4, 7*PI/4)
  arc(2.5,17,28,14.5,PI/4, 3*PI/4)
  line(-6,17,11,17)
  pop();
}
  
function flower1(flowerx1,flowery1,flowers1) {
  push();
  noStroke();
  translate(flowerx1,flowery1)
  scale(flowers1)
  fill('purple') 
  ellipse(0,0,20,50)
  rotate(PI/2);
  ellipse(0,0,20,50)
  fill('yellow')
  ellipse(0,0,20)
  pop();
  
}
function drawArm() {
  push();
  quad(-65,-70,-85,-7,-74,-7,-50,-70)
  quad(-85,-7,-94,4,-83,4,-74,-7)
  ellipse(-92,4,16,9)
  pop();
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

function scene2(){
  scale(2)
  background('rgb(253,131,153)');
  push();
  translate(200,200)
  fill('#7A5548')
  rect(-200,100,400,100)
  pop();
  
  push();
  translate(300,50)
  scale(7)
  stroke('#503B34')
  strokeWeight(0.5);
  //window
  fill('powderblue')
  rect(-10,-20,60,40)
  //window frame
  fill('#AE6800')
  quad(-13,-23,-10,-20,50,-20,53,-23)
  quad(-10, 20,-13, 23, 53, 23, 50, 20)
  quad(-13,-23,-10,-20,-10,20, -13,23)
  quad(50,-20,53,-23,53,23,50,20)
  //crossing-frame
  rect(-10,-1,60,3)
  rect(19,-20,3,40)
  pop();
  
  //vase
  push();
  translate (100,200)
  noStroke();
  fill(200)
  quad(-47,-10,-25,30,25,30,47,-10)
  ellipse(0,70,90,140)
  fill(255)
  rotate(PI/7)
  ellipse(-9,40,15,30)
  rotate(-PI/7)
  fill(200)
  stroke(100)
  strokeWeight(5)
  arc(0,70,90,140,-PI/3,PI/2)
  line(29,18,47,-10)
  pop();
  
  //flower stems
  push();
  translate(100,200)
  stroke('rgb(6,74,6)');
  strokeWeight(3)
  noFill();
  curve(-34,15,-22,-7,-55,-30,-74,-22)
  curve(-24,15,-9,-7,-30,-75,-60,-60)
  line(0,-7,7,-95)
  line(10,-7,25,-55)
  curve(15,9,30,-7,45,-25,22,15)
  //vase brim
  stroke(100)
  strokeWeight(5)
  curve(-55,-50,-47,-10,47,-10,55,-50)
  pop();
  
  //surprise
  push();
  strokeWeight(0.75);
  translate(100,200)
  if (g < 325) {
    surprise(45,-25,1,0)
    surprise(25,-55,1.2,0)
    surprise(7,-95,1.6,-PI/7)
    surprise(-30,-75,1.7,0)
    surprise(-55,-30,1.6,PI/7)
    surprise(-20,-20,1.2,0)
  }
  else {
    flower1(45,-25,0.7)
    flower1(25,-55,0.8)
    flower1(7,-95,0.6)
    flower1(-30,-75,0.7)
    flower1(-55,-30,0.6)
    flower1(-20,-20,0.8)
  }
  pop();
}
