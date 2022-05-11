class CannonBall {
    constructor(posX, posY){
        this.r = 30;
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(posX, posY, this.r, options);
        this.img = loadImage("./assets/cannonball.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.img, pos.x, pos.y, this.r, this.r);
        pop();
    }
}
