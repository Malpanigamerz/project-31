class divisions{
    constructor (x, y, w, h) {
     var options = {

     isStatic: true

     }
     this.boby = Bodies.rectangle(x,y,w,h,options);
     this.w = w;
     this.h = h;
     World.add(world,this.body);

    }
    display(){
       
        var pos = this.boby.position;
        rectMode(Center);
        fill("white")
        rect( pos.x, pos.y, this.w, this.h)
    }
};