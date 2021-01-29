class Pig  extends BaseClass{
  constructor(x,y){

  super(x,y,50,50);
  this.image=loadImage("sprites/enemy.png")
this.visibility=255;
       
  }
  display(){
    console.log(this.Body.speed)
    
if(this.Body.speed<3){
  super.display();
}

else{
  World.remove(myWorld,this.Body)
  push()
  this.visibility=this.visibility-5
  tint(255,this.visibility)
  image(this.image,this.Body.position.x,this.Body.position.y,50,50)
  pop()
}
  }
  
}