function setup () {
 createCanvas(400, 269);
    background(0)

 fill(227, 221, 225);
 strokeWeight(3);
 stroke(227, 221, 225);
 ellipse(70, 305, 310, 180);

    {for (x = 1; x < width; x += 3){
        for (y = 12; y < height; y += 3){
           stroke(120, 91, 86);
          strokeWeight(2);
       point (x,y);
       } 
       }    
       }
    
    
  //black bg cover of dots
       fill(0);
       strokeWeight(.25);
       stroke(0);
       beginShape();
       curveVertex(0, 80);
       curveVertex(0, 80);
       curveVertex(150, 219);
       curveVertex(175, 240);
       curveVertex(200, 245);
       curveVertex(229, 239);
       curveVertex(400, 20);
       curveVertex(400, 20);
       endShape(CLOSE);

    fill(0);
    strokeWeight(2);
    stroke(0);
    ellipse(200, 250, 10, 10);

//yellow left circle
  //  fill(238, 188, 27);
  //  strokeWeight(1);
  //  stroke(238, 188, 27);
   // ellipse(6, 230, 300, 300);

    fill(238, 188, 27);
     strokeWeight(.25);
     stroke(238, 188, 27);
     beginShape();
     curveVertex(0, 80);
     curveVertex(0, 80);
     curveVertex(27.6, 81.1);
     curveVertex(62, 90.6);
     curveVertex(101.3, 114.1);
     curveVertex(131, 150.8);
     curveVertex(137, 170);
     curveVertex(140, 215);
     curveVertex(153, 215);
     curveVertex(153, 217);
     curveVertex(153, 219);
     curveVertex(145, 220);
     curveVertex(100, 210);
     curveVertex(90, 210);
     curveVertex(89, 210);
     curveVertex(75, 210);
     curveVertex(72.6, 210);
     curveVertex(58, 217);
     curveVertex(28.6, 217);
     curveVertex(0, 224);
     curveVertex(0, 224);
    endShape(CLOSE);
  
noFill();
strokeWeight(7);
stroke(238, 188, 27);
curve(100,90, 128, 150, 150, 230, 40, 270)



    //black rings inside yellow
    noFill();
  strokeWeight(5);
    stroke(0);
    ellipse(6, 240, 290, 310);

    noFill();
    strokeWeight(5);
    stroke(0);
    ellipse(6, 250, 290, 313);
    
    noFill();
  strokeWeight(5);
    stroke(0);
    ellipse(6, 260, 290, 313);

    noFill();
    strokeWeight(7);
    stroke(0);
   ellipse(6, 270, 290, 313);
    
   noFill();
      strokeWeight(10);
    stroke(0);
    curve(0, 200, 0, 140, 67, 212, 30, 240);
    
    noFill();
    strokeWeight(14);
    stroke(0);
    curve(0, 200, 0, 180, 67, 210, 30, 240);
  
    noFill();
    strokeWeight(7);
    stroke(0);
    curve(0, 200, 0, 200, 67, 212, 30, 240);
        
    noFill();
    strokeWeight(10);
    stroke(0);
    triangle(0, 208, 1, 208.5, 0, 209);
    


//dark blue right circle 
    fill(0, 10, 69);
    strokeWeight(1);
    stroke(0, 10, 69);
    ellipse(400,270,390,390);

    //black shape on top of blue
     fill(0);
     strokeWeight(2);
     stroke(0);
     ellipse(366, 128, 128, 100);   

     fill(0);
     strokeWeight(2);
     stroke(0);
     ellipse(376, 71, 48, 68); 
    
     fill(0);
     strokeWeight(.25);
     stroke(0);
     beginShape();
     curveVertex(400, 96);
     curveVertex(400, 96);
     curveVertex(284, 132);
     curveVertex(300, 134);
     curveVertex(294, 140);
     curveVertex(304, 144);
     curveVertex(288, 151);
     curveVertex(303, 154);
     curveVertex(277, 158);
     curveVertex(291, 160);     
     curveVertex(304, 163);
     curveVertex(298, 166);
     curveVertex(340, 167);
     curveVertex(268, 174);
     curveVertex(328, 176);
     curveVertex(268, 180);
     curveVertex(324, 187);
     curveVertex(294, 193);
     curveVertex(328, 195);
     curveVertex(305, 201);
     curveVertex(356, 206);
     curveVertex(400, 202);
     curveVertex(400, 203);
     curveVertex(328, 211);
     curveVertex(365, 212);
     curveVertex(385, 212);
     curveVertex(400, 212);
     curveVertex(400,213);
     curveVertex(400, 214);
     curveVertex(322, 215);
     curveVertex(370, 222);
     curveVertex(350, 225);
     curveVertex(400, 230);
     curveVertex(400, 230);
     curveVertex(400,233);
     curveVertex(400, 233);
     curveVertex(250, 227);
     curveVertex(270, 239);
     curveVertex(260, 243);
     curveVertex(310, 246);
     curveVertex(263, 250);
     curveVertex(320, 254);
     curveVertex(309, 260);
     curveVertex(350, 269);
     curveVertex(400, 300);
     curveVertex(400, 300);
     endShape(CLOSE);

   

 



    //black ring around white circle
   noFill();
   strokeWeight(7);
    stroke(0);
    ellipse(70, 305, 315, 185);



//red top  bar
    //fill(146, 2, 2);
    strokeWeight(100);
    stroke(146, 2, 2); 
    line(0, 25, 400, 17);

//black bars on red bar
    fill(0);
    strokeWeight(7);
    stroke(0);
    line(0, 34, 400, 26);

    fill(0);
    strokeWeight(5);
    stroke(0);
    line(0, 57, 400, 49);

    fill(0);
    strokeWeight(7);
    stroke(0);
    line(0, 78, 400, 70);





    }