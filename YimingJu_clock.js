//----------------------
//preload the pictures
function preload(){
  bladder = loadImage('pics/bladder_10-12pm.png');
  gBladder = loadImage('pics/gallBladder_2-4am.png');
  kidney = loadImage('pics/kidney_8-10am.png');
  lIntestine = loadImage('pics/largeIntestine_8-10pm.png');
  liver = loadImage('pics/liver_12-2pm.png');
  sIntestine = loadImage('pics/smallIntestine_12-2am.png');
  spleen = loadImage('pics/spleen_4-6pm.png');
  energy = loadImage('pics/totalEnergy_4-6am.png');
  sun = loadImage('pics/sun.png');
  moon = loadImage('pics/moon.png');
}


//----------------------
//setups
function setup() {
createCanvas(1000, 1000);

background(255);
textFont('Times New Roman');
textAlign(CENTER,CENTER);

circles = initializeCircles(); //initialize the circles array
}


//----------------------
//begin the main program
function draw(){
  
  //basic setup
  translate(500,500); //center the anchor point
  scale(3.5);         //fit the heart shape to the frame
  
  
  //display the information
  displayInfo();


  //display the heart shape
  let yP = -18;      //vertical translation para.
  let xP = 0;        //horizontal translation para.    
  drawHeart(0+xP,-50+yP,0+xP,100+yP,50+xP,-180+yP,200+xP,30+yP); //draw the heart  
  resetMatrix();     //reset the scale parameter


  //display the circles and scales to record specific time (20min each) 
  drawScales();
  drawCircles();   
  
  
  //displahy the round tank to record every 20 minutes
  let hourNow = hour();
  let minuteNow = minute();
  let secondNow = second();
  displayTank(hourNow,minuteNow,secondNow);
  
  //display all the icons include organs according to the time, which is a feature of this "biological clock"
  displayIcons(hourNow);
}
