/*
use this pattern if you want to create an object  with the same properties
*/
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

//exemple: if you want to "clone" all properties of an object
var parent = {
  name: "Papa"
};
// the new object
var child = object(parent);

/**
if you want to clone only his prototype (structure)
*/
var child = object(parent.prototype);
