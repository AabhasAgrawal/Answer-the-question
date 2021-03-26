class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton("Submit");
      this.input2 = createInput("Correct answer")

    }
  
 
    display(){
    
      this.input.position(130, 160);
      this.button.position(250, 200);
      this.input
  
      this.button.mousePressed(()=>{

        this.name = this.input.value();
        
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      
      });
    }
  }