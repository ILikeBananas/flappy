class Bird {
  constructor(){
    console.log("Creating bird...");
    this.x = 40;
    this.y = height / 2;
    console.log("height " + height / 2);
    console.log("Bird Created");
  }

  show (){
    fill("white");
    ellipse(this.x, this.y, 25, 25);
  }
}
