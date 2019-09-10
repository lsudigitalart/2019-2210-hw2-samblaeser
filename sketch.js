function setup () {
 createCanvas(400, 269);
    background(0)
    
//yellow left circle
    fill(255, 200, 12);
    strokeWeight(1);
    stroke(255, 200, 12);
    ellipse(6, 230, 300, 300);

    //black rings inside yellow
    //fill(0);
    strokeWeight(5);
    stroke(0);
    ellipse(6, 240, 290, 300);

    //fill(0);
    strokeWeight(5);
    stroke(0);
    ellipse(6, 250, 290, 300);
    
    //fill(0);
    strokeWeight(5);
    stroke(0);
    ellipse(6, 260, 290, 300);

    //fill(0);
    strokeWeight(7);
    stroke(0);
    ellipse(6, 270, 290, 300);
    
    //fill(0);
    strokeWeight(10);
    stroke(0);
    curve(0, 200, 0, 140, 67, 212, 30, 240);
    
    //fill(0);
    strokeWeight(14);
    stroke(0);
    curve(0, 200, 0, 180, 67, 212, 30, 240);
  
    //fill(0);
    strokeWeight(7);
    stroke(0);
    curve(0, 200, 0, 200, 67, 212, 30, 240);
        
    //fill(0);
    strokeWeight(10);
    stroke(0);
    triangle(0, 208, 1, 208.5, 0, 209);
    


//dark blue right circle 
    fill(0,25,100);
    strokeWeight(1);
    stroke(0,25,115);
    ellipse(400,270,390,390);


//white bottom left circle
    fill(245, 243, 237);
    strokeWeight(1);
    stroke(245, 243, 237);
    ellipse(70, 305, 310, 180);

    //black ring
    //fill(0);
    strokeWeight(5.5);
    stroke(0);
    ellipse(70, 305, 315, 185);



//red top  bar
    //fill(170, 0, 0);
    strokeWeight(100);
    stroke(170, 0, 0); 
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












    //noFill();
    //stroke("orange");
    //strokeWeight(13);
    //arc(25, 25, 100, 100, radians(0), radians(90));

    //curve(0, height/2, width + .33, 50, 0, width+.66, height/2, );

  //  stroke("purple");
//    curve(-1000, -1000, 0, height/2, width, height/2, width - 1000, height - 1000);

//GUIDE LINES

fill(0,255,255, 30);
strokeWeight(1);
stroke(0,255,0);
ellipse(200,height/2,10,700);


fill(0,255,255, 30);
strokeWeight(1);
stroke(0,255,0);
ellipse(200,height/2,700,10);





beginShape



}

function draw() {

}