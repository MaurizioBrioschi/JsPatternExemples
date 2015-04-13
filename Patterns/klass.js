/**
  emulation of  a class in javascript
**/
var klass = function(Parent, props) {
  var Child, F, i;
  // 1.
  // new constructor
  Child = function() {
    if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
      Child.uber.__construct.apply(this, arguments);
    }
    if (Child.prototype.hasOwnProperty("__construct")) {
      Child.prototype.__construct.apply(this, arguments);
    }
  };
  // 2.
  // inherit
  Parent = Parent || Object;
  F = function() {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.uber = Parent.prototype;
  Child.prototype.constructor = Child;
  // 3.
  // add implementation methods
  for (i in props) {
    if (props.hasOwnProperty(i)) {
      Child.prototype[i] = props[i];
    }
  }
  // return the "class"
  return Child;
};
//how to use
//Man doesn't have a parent
var Man = klass(null, {
  __construct: function(what) {
    console.log("Man's constructor");
    this.name = what;
  },
  getName: function() {
    return this.name;
  }
});
//the parent of  SuperMan is Man
var SuperMan = klass(Man, {
  __construct: function(what) {
    console.log("SuperMan's constructor");
  },
  getName: function() {
    var name = SuperMan.uber.getName.call(this);
    return "I am " + name;
  }
});
