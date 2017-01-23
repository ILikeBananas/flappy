class Bird {
  constructor() {
    console.log("Creating bird...");

    // Position
    this.x = 40;
    this.y = height / 2;

    // Gravity things
    this.gravity = 0.7;
    this.lift = -15;
    this.velocity = 0;   // start with the bird stable

    console.log("Bird Created");
  }

  // Draw the bird on the screen
  show() {
    fill("white");
    ellipse(this.x, this.y, 30, 30);
  }

  // Make it jump
  up() {
    this.velocity += this.lift;
  }
  // Update the position and calculate the "gravity"
  update() {
    if(height <= this.y ){
      //console.log("to low");
      this.velocity += this.lift;
    }
    if(this.y < 15){
      console.log("to high");
      this.velocity = 0;
      this.y = 15;
    } else {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;
    }
  }
}
