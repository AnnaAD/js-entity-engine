
var canvas;
var ctx;
var canvasWidth;
var canvasHeight;


function play() {

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");

  canvasWidth = canvas.getBoundingClientRect().width;
  canvasHeight = canvas.getBoundingClientRect().height;


  Input.Init(canvas, document);
  Game.Start();

  var FPS = 30;
  setInterval(function() {
    update();
    draw(ctx);
  }, 1000/FPS);

}

function draw(ctx) {
  Game.Draw(ctx);
}

function update() {
  Input.internalUpdate();
  Game.Update();
}
