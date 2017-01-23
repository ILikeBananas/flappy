let flappy;
function setup() {
  createCanvas(400,600);
  background(0);
  flappy = new Bird();
}

function draw() {
  flappy.show();

}
