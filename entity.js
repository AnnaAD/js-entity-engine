function Entity(x,y,color) {

  let entity = {
    x:x,
    y:y,
    color: color,
    bottom_y: y,
    target: {x: 10, y: 10},

    update: function() {

      this.target.x = player.x;
      this.target.y = player.y;

      if (this.x < this.target.x) {
        this.x++;
      }

      if (this.x > this.target.x) {
        this.x--;
      }

      if (this.y < this.target.y) {
        this.y++;
      }
      if (this.y > this.target.y) {
        this.y--;
      }
    },

    draw: function(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y,10,10);
      this.bottom_y = this.y + 10;
    }

  }

  return entity;
}

function Tree(x,y) {
  let tree = {
    x:x,
    y:y,
    bottom_y: y,

    update: function() {
    },

    draw: function(ctx) {
      ctx.fillStyle = "#4C2F04";
      ctx.fillRect(this.x, this.y, 5, 30);
      ctx.fillStyle = "darkgreen"
      ctx.fillRect(this.x-8, this.y, 20, 20);
      this.bottom_y = this.y + 30;
    }

  }

  return tree;
}

function Stone(x,y) {
  let stone = {
    x:x,
    y:y,
    bottom_y: y,

    update: function() {
    },

    draw: function(ctx) {
      ctx.fillStyle = "#6C6C6C";
      ctx.fillRect(this.x+4, this.y-6, 15, 15);
      ctx.fillStyle = "#8a8a8a";
      ctx.fillRect(this.x, this.y, 10, 10);
      this.bottom_y = this.y + 10;
    }

  }

  return stone;
}

function Crop(x,y) {
  let crop = {
    x:x,
    y:y,
    growth: 0,
    growthStage: 0,
    bottom_y: y,

    update: function() {
      if(this.growthStage < 10) {
        this.growth++;

        if (this.growth > 100) {
          this.growth = 0;
          this.growthStage++;
        }
      }
    },

    draw: function(ctx) {
      ctx.fillStyle = "#AF813C";
      ctx.fillRect(this.x+2, this.y, 20, 4);
      if(this.growthStage < 5) {
        ctx.fillStyle = "#9FE546";
      } else if (this.growthStage < 10) {
        ctx.fillStyle = "#C1E718";
      } else {
        ctx.fillStyle = "#CFCF0C";
      }
      ctx.fillRect(this.x+4, this.y-this.growthStage - 2, 3,3+this.growthStage);
      ctx.fillRect(this.x+8, this.y-this.growthStage - 2, 3,3+this.growthStage);
      ctx.fillRect(this.x+12, this.y-this.growthStage - 2, 3,3+this.growthStage);
      ctx.fillRect(this.x+16, this.y-this.growthStage - 2, 3,3+this.growthStage);
      this.bottom_y = this.y+4;
    }
  }
  return crop;
}

function Tent(x,y) {
  let tent = {
    x:x,
    y:y,

    update:function() {

    },

    draw: function(ctx) {
      
    },

    enter: function(obj) {

    },

    exit: function(obj) {

    }
  }
}
