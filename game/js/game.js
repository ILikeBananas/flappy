let flappy;
let pipe;
let dead = false;
function setup() {
  createCanvas(400,600);
  flappy = new Bird();
  pipe = new Pipe();
}

function draw() {
  if(dead) {
    background(0);
    textSize(50);
    text("GAME OVER", 50, 50);
    fill("white");
    return;
  }
  // Updating objects
  flappy.update();
  pipe.update();

  if(pipe.hits(flappy)){
    console.log("game over");
    gameOver();
  }

  //clean the background
  background(0);

  // Show the elements
  flappy.show();
  pipe.show();

  // Creating new pipes
  if(pipe.x < -20){
    pipe = new Pipe();
  }
}

// Detect if the space bar is pressed and make the bird bounce
function keyPressed(){
  if(key = " "){
    if(dead){
      dead = false;
    } else {
      flappy.up(height);
    }
  }
}

function gameOver () {
  document.getElementById("swag").style.color = "blue";
  reset();
}

function reset(){
  pipe = new Pipe();
  flappy = new Bird();
  dead = true;
}
