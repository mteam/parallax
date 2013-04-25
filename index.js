var Layer = require('./layer.js');

module.exports = Parallax;

function Parallax(width, height) {
  this.width = width;
  this.height = height;
  this.layers = [];
}

Parallax.prototype = {

  push: function(image, x, y, c) {
    var layer = new Layer(image, x, y, c);
    this.layers.push(layer);
  },

  move: function(x, y) {
    for (var i = 0; i < this.layers.length; i++) {
      this.layers[i].move(x, y);
    }
  },

  draw: function(ctx) {
    for (var i = 0; i < this.layers.length; i++) {
      var layer = this.layers[i],
          x = layer.x % layer.width;

      if (x > 0) x -= layer.width;

      while (x < this.width) {
        ctx.drawImage(layer.image, x, layer.y);
        x += layer.width;
      }
    }
  }

};
