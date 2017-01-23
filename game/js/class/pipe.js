class Pipe {
  constructor() {
    // Dimensions of the pipe
    this.x = width;   // construct it at the end of the screen
    this.w = 20;      // width of the pipe
    this.center = random(height - 50);
    this.space = 100;  // the space to fly accross;

    this.speed  = 2;
    this.topL =     this.center - this.space / 2;
    this.bottomL =  this.center + this.space / 2;
  }

  show() {
    fill(255);
    // Drawing the top part
    rect(this.x, 0, this.w, this.topL);

    // Drawing the bottom
    rect(this.x, this.bottomL, this.w, height);
  }

  // return a boolean if it hits or not :)
  update() {
    this.x -= this.speed;

  }

  hits(bird) {

    if((Math.abs(bird.x - this.x)) < 20){
      if(!(bird.y < this.bottomL) || !(bird.y > this.topL)){
        //console.log(bird.y < height - this.bottomL);
        console.log(bird.y + " : " + this.topL);
        console.log("GAME OVER");
        gameOver();
      }
    }
  }
}
