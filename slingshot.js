class Slingshot{
    constructor(bodyA,pointB){
        var options={
          
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
          } 
          this.sling1=loadImage("sprites/sling1.png")
          this.sling2=loadImage("sprites/sling2.png")
          this.sling3=loadImage("sprites/sling3.png")
          this.pointB=pointB;
          this.slingshot = Constraint.create(options);
          World.add(myWorld,this.slingshot);
    }
    display(){
      image(this.sling1,200,10)
      image(this.sling2,175,10)
      if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(127, 24, 24)
        strokeWeight(5)
        line(pointA.x-15,pointA.y,pointB.x-10,pointB.y+25)
        line(pointA.x-15,pointA.y,pointB.x+30,pointB.y+25)
        image(this.sling3,pointA.x -30,pointA.y-5,15,30)
        pop();
      }
    }
      fly(){
    
          this.slingshot.bodyA = null;
      }

      attach(body){
         this.slingshot.bodyA = body
      }
    }

    