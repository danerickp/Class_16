var point1 = {
  x: 300,
  y: 300
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

var ball = {
  x: 300,
  y: 300,
  diameter: 80
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);




  if (mouseIsPressed) {
    point1.x = random(0, width);
    point1.y = random(0, height);
    col.r = random(100, 255);
    col.g = random(100, 255);
    col.b = random(100, 255);
    fill(col.r, col.g, col.b);
    ellipse(point1.x, point1.y, random(10, 30));
  }

  if (mouseX < 150) {

    fill(200, 10, 10);
    strokeWeight(0);
    ellipse(100, 300, 100, 100);

    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
    ball.x = ball.x + 2;

    if (ball.x > 380) {
      stroke(255, 204, 0);
      strokeWeight(10);
      noFill();
      ellipse(300, 300, 200);
    }


  } else if (mouseX > 450) {

    fill(120, 220, 125);
    strokeWeight(0);
    ellipse(500, 300, 100, 100);

    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
    ball.x = ball.x - 2;


    if (ball.x < 220) {
      stroke(255, 204, 0);
      strokeWeight(10);
      noFill();
      ellipse(300, 300, 200);
    }


  } else if (mouseY < 150) {

    fill(100, 60, 160);
    strokeWeight(0);
    rectMode(CENTER);
    rect(300, 100, 100, 100);

    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
    ball.y = ball.y + 2;


    if (ball.y > 380) {
      stroke(255, 204, 0);
      strokeWeight(10);
      noFill();
      ellipse(300, 300, 200);
    }


  } else if (mouseY > 500) {

    fill(20, 30, 200);
    strokeWeight(0);
    rectMode(CENTER);
    rect(300, 500, 100, 100);

    ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
    ball.y = ball.y - 2;

    if (ball.y < 220) {
      stroke(255, 204, 0);
      strokeWeight(10);
      noFill();
      ellipse(300, 300, 200);
    }


  }

  stroke(255);
  strokeWeight(5);
  noFill();
  ellipse(300, 300, 200);



}