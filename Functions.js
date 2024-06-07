//----------------------
//this function is to display the information
function displayInfo(){
  
  //basic setup
  noStroke();
  fill(0);
  
  //display the text
  textSize(15);
  text("Circadian clock",0,100);
  textSize(10);
  text("Author: Yiming Ju (2253940)",0,120);
  
  //display the underline
  stroke(0);
  strokeWeight(2);
  line(-50,110,50,110); 
}



//----------------------
//this function is to draw the heart shape to serve as the frame of the clock
function drawHeart(a1x,a1y,a4x,a4y,c2x,c2y,c3x,c3y) {
 
//basic setup

fill(255,194,210);
stroke(255,145,175);
strokeWeight(5);

//draw the right half
beginShape();

vertex(a1x,a1y);
bezierVertex(c2x,c2y,c3x,c3y,a4x,a4y);
endShape();

//draw the left half
beginShape();

vertex(a1x,a1y);
bezierVertex(-c2x,c2y,-c3x,c3y,a4x,a4y);

endShape();
}


//----------------------
//this functino is to draw the scales
function drawScales(){

  noFill();
  translate(500,500);
  stroke(255,145,175);
  
  strokeWeight(3);
  line(-250,-200,-210,-200);
  line(-250,-100,-210,-100);
  line(-250,100,-210,100);
  line(-150,-200,-110,-200);
  line(-150,-100,-110,-100);
  line(-150,100,-110,100);
  line(-50,-100,-10,-100);
  line(-50,0,-10,-0);
  line(10,-100,50,-100);
  line(10,0,50,-0);
  line(110,-200,150,-200);
  line(110,-100,150,-100);
  line(110,100,150,100);
  line(210,-200,250,-200);
  line(210,-100,250,-100);
  line(210,100,250,100);
  
  strokeWeight(9);
  line(-250,0,-210,-0);
  line(-150,0,-110,-0);
  line(-50,-200,-10,-200);
  line(10,-200,50,-200);
  line(110,0,150,-0);
  line(210,0,250,-0);
  
  strokeWeight(18);
  line(-50,100,50,100);
}



//----------------------
//Using array to store the position of all 24*3 = 72 circles (each circle stands for 20 minutes).
function initializeCircles(){
  let circles = [];
  for (let i=0; i<24; i++){
    circles[i] = [];
  }
  // 0:00 - 1:00
  circles[0].push({x: -280, y: -270});
  circles[0].push({x: -255, y: -245}); 
  circles[0].push({x: -230, y: -220});
  // 1:00 - 2:00
  circles[1].push({x: -230, y: -180});
  circles[1].push({x: -230, y: -150});
  circles[1].push({x: -230, y: -120});
  // 2:00 - 3:00
  circles[2].push({x: -230, y: -80});
  circles[2].push({x: -230, y: -50});
  circles[2].push({x: -230, y: -20});
  // 3:00 - 4:00
  circles[3].push({x: -230, y: 20});
  circles[3].push({x: -230, y: 50});
  circles[3].push({x: -230, y: 80});
  // 4:00 - 5:00
  circles[4].push({x: -210, y: 120});
  circles[4].push({x: -180, y: 120});
  circles[4].push({x: -150, y: 120});
  // 5:00 - 6:00
  circles[5].push({x: -130, y: 80});
  circles[5].push({x: -130, y: 50});
  circles[5].push({x: -130, y: 20});
  // 6:00 - 7:00
  circles[6].push({x: -130, y: -20});
  circles[6].push({x: -130, y: -50});
  circles[6].push({x: -130, y: -80});
  // 7:00 - 8:00  
  circles[7].push({x: -130, y: -120});
  circles[7].push({x: -130, y: -150});
  circles[7].push({x: -130, y: -180});
  // 8:00 - 9:00
  circles[8].push({x: -110, y: -220});
  circles[8].push({x: -80, y: -220});
  circles[8].push({x: -50, y: -220});
  // 9:00 - 10:00
  circles[9].push({x: -30, y: -180});
  circles[9].push({x: -30, y: -150});
  circles[9].push({x: -30, y: -120});
  // 10:00 - 11:00
  circles[10].push({x: -30, y: -80});
  circles[10].push({x: -30, y: -50});
  circles[10].push({x: -30, y: -20});
  // 11:00 - 12:00
  circles[11].push({x: -30, y: 20});
  circles[11].push({x: -30, y: 50});
  circles[11].push({x: -30, y: 80});
  // 12:00 - 13:00
  circles[12].push({x: 30, y: 80});
  circles[12].push({x: 30, y: 50});
  circles[12].push({x: 30, y: 20});
  // 13:00 - 14:00
  circles[13].push({x: 30, y: -20});
  circles[13].push({x: 30, y: -50});
  circles[13].push({x: 30, y: -80});
  // 14:00 - 15:00
  circles[14].push({x: 30, y: -120});
  circles[14].push({x: 30, y: -150});
  circles[14].push({x: 30, y: -180});
  // 15:00 - 16:00
  circles[15].push({x: 50, y: -220});
  circles[15].push({x: 80, y: -220});
  circles[15].push({x: 110, y: -220});
  // 16:00 - 17:00
  circles[16].push({x: 130, y: -180});
  circles[16].push({x: 130, y: -150});
  circles[16].push({x: 130, y: -120});
  // 17:00 - 18:00
  circles[17].push({x: 130, y: -80});
  circles[17].push({x: 130, y: -50});
  circles[17].push({x: 130, y: -20});
  // 18:00 - 19:00
  circles[18].push({x: 130, y: 20});
  circles[18].push({x: 130, y: 50});
  circles[18].push({x: 130, y: 80});
  // 19:00 - 20:00
  circles[19].push({x: 150, y: 120});
  circles[19].push({x: 180, y: 120});
  circles[19].push({x: 210, y: 120});
  // 20:00 - 21:00
  circles[20].push({x: 230, y: 80});
  circles[20].push({x: 230, y: 50});
  circles[20].push({x: 230, y: 20});
  // 21:00 - 22:00
  circles[21].push({x: 230, y: -20});
  circles[21].push({x: 230, y: -50});
  circles[21].push({x: 230, y: -80});
  // 22:00 - 23:00
  circles[22].push({x: 230, y: -120});
  circles[22].push({x: 230, y: -150});
  circles[22].push({x: 230, y: -180});
  // 23:00 - 24:00
  circles[23].push({x: 230, y: -220});
  circles[23].push({x: 255, y: -245});
  circles[23].push({x: 280, y: -270});

  return circles;
}


//----------------------
//this function is to draw the small circles for time displaying (20min/circle)
function drawCircles(){
  
  // basic setup
  fill(255);
  stroke(255,145,175);
  strokeWeight(5);

  // display all the 24*3 circles (without fill)
  stroke(255,145,175);
  fill(255);
  for (let i = 0; i<24; i++){
    displayOnlyCircles(i); 
  }
  
  // fill the circles according to the time
  let hourNow = hour();
  let minuteNow = minute();
  let secondNow = second();
  fillCircles(hourNow,minuteNow,secondNow);
}


//----------------------
//this function is to display circles without fill
function displayOnlyCircles(hour){

strokeWeight(5);
r = 30;

ellipse(circles[hour][0].x,circles[hour][0].y,r);
ellipse(circles[hour][1].x,circles[hour][1].y,r);
ellipse(circles[hour][2].x,circles[hour][2].y,r);

}


//----------------------
//this function is to fill the circles according to the time
function fillCircles(hour,minute,second){

  //basic setup
  fill(177,0,0);
  noStroke();
  let d = 30;


  // fill the previous circles (only hour-related) in red
  for (let i=0; i<hour; i++){
    displayOnlyCircles(i);
  }
  
  
  // fill the minute-circles in red
  if (minute >= 0 && minute < 20){
 
    //scale the first circle to be filled
    fill(255);
    stroke(255,145,175);
    ellipse(circles[hour][0].x,circles[hour][0].y,1.5*d);
    
    //add the pie chart
    fill(177,0,0);
    noStroke();
    let secondPassed = minute * 60 + second; //compute second passed
    let endAngle = map(secondPassed,0,1200,0,2*PI);
    arc(circles[hour][0].x,circles[hour][0].y,40,40,-PI/2,-PI/2+endAngle);
  }
  
  if (minute >= 20 && minute < 40){
    
    //fill the first circle
    ellipse(circles[hour][0].x,circles[hour][0].y,d); 
    
    //scale the second circle to be filled
    fill(255);
    stroke(255,145,175);
    ellipse(circles[hour][1].x,circles[hour][1].y,1.5*d);
    
    //add the pie chart
    fill(177,0,0);
    noStroke();
    let secondPassed = (minute - 20) * 60 + second; //compute second passed
    let endAngle = map(secondPassed,0,1200,0,2*PI);
    arc(circles[hour][1].x,circles[hour][1].y,40,40,-PI/2,-PI/2+endAngle);
  }
  
  if (minute >= 40 && minute < 60){
    //fill the first & the second circle
    ellipse(circles[hour][0].x,circles[hour][0].y,d); 
    ellipse(circles[hour][1].x,circles[hour][1].y,d);
    
    //scale the third circle to be filled
    fill(255);
    stroke(255,145,175);
    ellipse(circles[hour][2].x,circles[hour][2].y,1.5*d);
    
    //add the pie chart
    fill(177,0,0);
    noStroke();
    let secondPassed = (minute - 40) * 60 + second; //compute second passed
    let endAngle = map(secondPassed,0,1200,0,2*PI);
    arc(circles[hour][2].x,circles[hour][2].y,40,40,-PI/2,-PI/2+endAngle);
  }
}


//----------------------
//this function is to display the circle tank (to display each 20min in detail)
function displayTank(hour,minute,second){

  //display the tank
  stroke(255,145,175);
  strokeWeight(8);      
  fill(255);
  ellipse(0,230,150);
  
  //display the pie chart
  //setup
  noStroke();
  fill(255,0,0);

  //compute second passed
  let secondPassed
  if (minute >= 0 && minute < 20){
    secondPassed = minute * 60 + second;
  }
  if (minute >= 20 && minute < 40){
    secondPassed = (minute - 20) * 60 + second;
  }
  if (minute >= 40 && minute < 60){
    secondPassed = (minute - 40) * 60 + second;
  }
  
  //draw the pie chart
  fill(177,0,0);
  let endAngle = map(secondPassed,0,1200,0,2*PI);
  arc(0,230,143,143,-PI/2,-PI/2+endAngle);
    
  //display the inner point
  fill(255,145,175);
  noStroke();
  ellipse(0,230,15);
}

//----------------------
//this function is to display the organs and the sun & moon icons (glow in turn)
function displayIcons(hour){
  
  //displat the circle surrounding the organ according to the time
  fill(255,194,210);
  stroke(255,145,175);
  strokeWeight(5);
  
  if (hour == 0 || hour == 1){
  ellipse(-380,-380,110);
  }
  if (hour == 2 || hour == 3){
  ellipse(-430,-150,110);
  }
  if (hour == 4 || hour == 5 || hour == 6 || hour == 7){
    ellipse(-390,100,110);
  }
  if (hour == 8 || hour == 9 || hour == 10 || hour == 11){
    ellipse(-230,270,110);
  }
  if (hour == 12 || hour == 13 || hour == 14 || hour == 15){
    ellipse(240,270,110);
  }
  if (hour == 16 || hour == 17 || hour == 18 || hour == 19){
    ellipse(400,100,110);
  }
  if (hour == 20 || hour == 21){
    ellipse(430,-150,110);
  }
  if (hour == 22 || hour == 23){
    ellipse(370,-380,110);
  }
  
  //display original organ icons
  image(sIntestine,-430,-430);
  image(gBladder,-480,-200);
  image(energy,-440,50);
  image(kidney,-280,220);
  
  image(liver,200,230,80,80);
  image(spleen,350,50,90,90);
  image(lIntestine,385,-190,90,90);
  image(bladder,326,-420,90,90);
  
  //display sun and moon icons
  image(sun,-40,80,80,80);
  sun.filter(THRESHOLD,1);
  
  image(moon,-370,-320,70,70);
  scale(-1,1);
  image(moon,-370,-320,70,70);
  
}
