let player = {
  x:0,
  y:0,
  bottom_y: 0,

  update: function() {
    if(Input.keys['w']) {
      this.y-=2;
    }
    if(Input.keys['s']) {
      this.y+=2;
    }
    if(Input.keys['d']) {
      this.x+=2;
    }
    if(Input.keys['a']) {
      this.x-=2;
    }
  },

  draw: function(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x,this.y,10,10);
    this.bottom_y = this.y + 10;
  }

}
