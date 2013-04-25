module.exports = Layer;

function Layer(image, x, y, coefficient) {
  this.image = image;
  this.x = x;
  this.y = y;
  this.width = image.width;
  this.height = image.height;
  this.coefficient = coefficient;
}

Layer.prototype = {

  move: function(x, y) {
    this.x += x * this.coefficient;
    this.y += y * this.coefficient;
  }

};
