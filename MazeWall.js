class MazeWall {
    constructor(x,y,width,height,angle) {
       var options = {
           isStatic:true
       };
       
       angleMode(RADIANS);
       this.wall = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       Matter.Body.setAngle(this.wall,angle);
       World.add(world,this.wall);
    }

    display() {
       fill(0,40,0);
       noStroke();
       rect(this.wall.position.x,this.wall.position.y,this.width,this.height);
    }
}