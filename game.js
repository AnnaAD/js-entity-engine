let Game = {
    entities: [],
    Start: function() {
        let self = this;

        var num_trees = Math.floor(Math.random()*10 + 3);
        for(var i = 0; i < num_trees; i++) {
          this.entities.push(Tree(Math.random()*canvasWidth, Math.random()*canvasHeight));
        }
      
        var num_rocks = Math.floor(Math.random()*10 + 3);
        for(var i = 0; i < num_rocks; i++) {
          this.entities.push(Stone(Math.random()*canvasWidth, Math.random()*canvasHeight));
        } 

    },

    Draw: function(ctx) {
        ctx.fillStyle = "#6BBF41";
        ctx.fillRect(0,0,canvasWidth, canvasHeight);

        
        renderorder = [...this.entities];
        renderorder.push(player);
        renderorder.sort(function(a,b){return a.bottom_y-b.bottom_y;})
        for(var i = 0; i < renderorder.length; i++) {
          renderorder[i].draw(ctx);
        }
    },

    Update: function() {
        player.update();
        for(var i = 0; i < this.entities.length; i++) {
            this.entities[i].update();
        }

        if(Input.GetMouseDown()) {
            this.entities.push(Crop(Input.mousePos.x, Input.mousePos.y));
        }
    }
}

