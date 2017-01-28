class Box {
  constructor(message, pipe){
    this.speed = 2;

    // Message
    this.message = message;
    this.letterI = 0;
    this.letter = message[this.letterI];

    // Positions
    this.y = random(height -50) + 25;
    this.setLocation();
    while(this.x - pipe.x < 30){
      this.x += 20;
    }
  }

  show(){
    fill("#2ecc71");
    ellipse(this.x, this.y, 30, 30);
  }

  update(){
    this.x -= this.speed;
    if(this.x < -20){
      this.setLocation();
    }
  }
  setLocation(){
    this.x = width + random(400);
    while(this.x - pipe.x < 30){
      this.x += random(400);
    }
  }

  hits(bird){
    if(abs(this.x - bird.x) < 20){
      if(abs(this.y - bird.y) < 20){
        this.nextLetter();
        this.setLocation();
      }
    }
  }

  nextLetter(){
    if(this.letterI > this.message.length -1){
      win();
      console.log("win");
    }
    document.getElementById("swag").innerHTML += this.letter;
    this.letterI++;
    this.letter[this.letterI];
  }


}
