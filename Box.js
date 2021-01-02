class Box {
  constructor(x, y){
 var options = {
    isStatic : false,
    friction: 1,
    density: 1.2
  }
  this.body = Bodies.rectangle(x, y, 30, 40);
  World.add(world, this.body);
  this.visibility = 255;
}

display(){
  if(this.body.speed < 3){
  var pos = this.body.position;
  fill('red');
  rectMode(CENTER);
  rect(pos.x, pos.y, 30, 40);
  }
  else{
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility - 5;
    tint(255, this.visibility);
    pop();
  }
}
score(){
  if(this.visibility <0 && this.visibility > -100){
    score++;
}
}
}