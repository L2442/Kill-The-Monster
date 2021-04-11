class Box {
  constructor(x, y, width, height) {
    var options = {
      'isStatic' : false,
        'friction':1.0,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
  }
};
