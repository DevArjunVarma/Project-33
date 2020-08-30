class Particle {
    constructor(x, y, width, height) {
      var options = {
          setStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
    
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      this.color=color(random(0,225));
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius);
      pop();
      for(var j = 0; j < particles.length; j++){
          particles[j].display();
      }
      for(var k = 0; k < divisions.length; k++){
          divisions[k].display();
      }
    }
  };
  