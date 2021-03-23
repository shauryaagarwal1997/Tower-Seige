class Constraint{
    constructor(bodyA,pointB){
        var options={
        bodyA=bodyA,
        pointB=pointB,
        
        stiffness:0.5,
        length:5
        }
        this.constraint=Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }
    fly(){
        this.constraint.bodyA=null;
    }
    display(){
        if(this.constraint.bodyA != null){
            line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.pointB.x,this.constraint.pointB.y)
        }
    }
}