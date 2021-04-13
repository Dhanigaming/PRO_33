class Snow {
    constructor(x,y,r){
        var options ={
            'restitution' : 0.5,
            'density' : 0.8,
            'friction' : 0.3
        }
        this.body = Bodies.circle(x , y , (this.r-20)/2 , options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);
    }
    display(){
         var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r);
        pop();


    }
}