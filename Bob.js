class Bob{

    constructor(x){
         var options = {
            
         density: 0.8,
         restitution:1
         


         }
        this.body = Matter.Bodies.circle(x, 450,30,options) ;
        World.add(world,this.body);
        this.radius =30
    }

    display(){
        fill("blue");
   circle(this.body.position.x,this.body.position.y,this.radius*2)

    }
}