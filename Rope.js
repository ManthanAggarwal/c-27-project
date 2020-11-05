class Rope{
  constructor(bodyA,bodyB,xOffset,yOffset){

    var options =    {

        bodyA : bodyA,
        bodyB : bodyB,
        pointB : {x :xOffset, y:yOffset}
    }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)     
    }

      display(){

        var  pointA = this.rope.bodyA.position;
        var  pointB = this.rope.bodyB.position;
          line(pointA.x,pointA.y-30,pointB.x + this.rope.pointB.x,pointB.y)
      }
}
