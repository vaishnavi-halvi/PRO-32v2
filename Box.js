class Box
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0,
			friction:0.3,
			density:0.5
			}
		this.w=w;
        this.h=h
	    this.image=loadImage("block.png")
		this.body=Bodies.rectangle(x, y, w,h, options)
		World.add(world, this.body);

		this.visiblity=255

	}
	score(){
        if(this.visiblity<0 && this.visiblity >-105){
          score=score+1;
        }
      }
	display()
	{

		
			var pos=this.body.position;
			if(this.body.speed<10){
				push()
				imageMode(CENTER)
				translate(pos.x, pos.y);
				image(this.image,0,0,this.w, this.h)
				pop()
			}
			else{
				push()
				World.remove(world,this.body)
				imageMode(CENTER)
				tint(255,this.visiblity)
				image(this.image,pos.x, pos.y,this.w, this.h)
				this.visiblity-=50
				pop()
			}
			
			
	}

}