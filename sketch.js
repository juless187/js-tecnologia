function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stoke("blue");
    fill("red");

    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }

  }