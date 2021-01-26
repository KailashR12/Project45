class Wheel {
    constructor(x,y,radius){
        var options = {
            friction:0.6
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius,options);

        World.add(world, this.body);
    }
    display(){
        this.wheel
    }


     
}