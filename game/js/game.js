let flappy;
let pipe;
let box;
let dead = false;
let won = false;
function setup() {
  createCanvas(400,600);
  flappy = new Bird();
  pipe = new Pipe();
  box = new Box("Axelle", pipe);
}

function draw() {
  if(dead) {
    background(0);
    textSize(50);
    text("GAME OVER", 50, 50);
    fill("white");
    return;
  }
  if(won){
    background(0);
    textSize(50);
    text(box.message, 50, 50);
    fill("white");
    return;
  }
  // Updating objects
  flappy.update();
  pipe.update();
  box.update();

  if(pipe.hits(flappy)){
    console.log("game over");
    gameOver();
  }
  box.hits(flappy);

  //clean the background
  background(0);

  // Show the elements
  flappy.show();
  pipe.show();
  box.show();

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
  box.setLocation();
  dead = true;
}

function win(){
  won = true;
  document.getElementById("swag").innerHTML = "Joyeux anniversair";
}
