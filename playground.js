var Ball = function(type, size, color, action) {
  this.type = type;
  this.size = size;
  this.color = color;
  this.action = action;

  this.toString = function(){
    return "The children are " + this.action + " the " + this.type + "ball. It is " + this.size + " and " + this.color + "."

  };
}

var soccer = new Ball("soccer", "big", "orange", "kicking")
var bouncy = new Ball("bouncy", "small", "green", "bouncing")
var base = new Ball("base", "medium", "white", "throwing")


console.log( soccer.toString() );
console.log( bouncy.toString() );
console.log( base.toString() );
