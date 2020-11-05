class Roof{

constructor(x,y){

    this.body = Matter.Bodies.rectangle(x, y, 300,20,{isStatic:true});
    World.add(world,this.body);
    this.wi = 350;
    this.he = 20;
}
display(){
    push();
    fill("brown");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y, this.wi, this.he);
    pop();
}
}