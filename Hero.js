class Hero {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("hero.png")
      World.add(world, this.body);
    }
    display(){
        push();

        imageMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y,200,100);
        pop();
        
    }
    }
