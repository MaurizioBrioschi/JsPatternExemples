/*
* exemples of use a sort of inheritance constructors in javascript
*/
function Car() {}
function SuperCar() {}

/*
 * Inherit function is useful to inherith properties from a "parent" function without overwrite the constructor
 */
var inherit = (function() {
  var F = function() {}; //use a temporary constructor
  return function(Child, Parent) {
    F.prototype = Parent.prototype;
    //Set Child as F
    Child.prototype = new F();
    //store the superclass
    Child.uber = Parent.prototype;
    //resetting the constructor pointer
    Child.prototype.constructor = Child;
  }
}());

inherit(Car,SuperCar);
