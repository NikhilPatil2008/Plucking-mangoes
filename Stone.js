class Stone{
    constructor(){
        this.body=Bodies.rectangle(x,y,20,20);
        this.width=20;
        this.height=20;
        World.add(world,this.body);
        this.stone=loadImage("images/stone.png");
    }
    display(){
        image(this.stone,200,200);
    }

}