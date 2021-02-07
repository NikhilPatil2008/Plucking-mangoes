class Mango{
constructor(x,y){
    var options={
        isStatic:true,
        restitution:1.2
    }
    this.body=Bodies.rectangle(x,y,20,20);
    this.width=20;
    this.height=20;
    World.add(world,this.body);
    this.mango=loadImage("images/mango.png");
}
display(){
    image(this.mango,200,180);  
}
}