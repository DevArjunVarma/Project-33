class Plinko {
    constructor(x, y, width, height) {
      var options = {
        setStatic:true
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
    }
    display(){
      var pos =this.body.position;
      fill(0);
      circle(pos.x, pos.y, this.radius);
      for(var j =40; j <= innerWidth; j=j+50){
        plinkos.push(new Plinko(j,75));
      }
      for(var j = 15; j <= width-10; j=j+50){
        plinkos.push(new Plinko(j,175));
      }
    }
  }
  