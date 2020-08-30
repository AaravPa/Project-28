class Tree {
    constructor(x,y,width,height) {
      var options={
        isStatic : true,  
      }  
      this.image = loadImage("Plucking mangoes/tree.png");
      this.body = Bodies.rectangle(x,y,width/20,height/20, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    } 
    
    display() {
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    } 
  }