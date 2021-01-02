class Polygon{
    constructor(x, y){
    var options ={
        isStatic : false,
        restitution: 0.3
    }
    this.body = Bodies.circle(x, y, 20, options);
    this.image = loadImage("sprites/polygon.png")
    World.add(world, this.body);
}

display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 40, 40);
}
}