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

/******************
In Ecma5 this pattern is part of the language, you can use the function create
*/
var child = object.create(parent);
//the function accept  additional parameters to add new properties
var child = object.create(parent, {
  age: {
    value: 36
  }
});
