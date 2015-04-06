/**
*   this is an exemple of js callback pattern application on a object  function with parameters
*   if you need to access to some other object properties
*/

var myapp = {
    color : "green",
    paint : function(node) {
      console.log(node + ' ' + this.color);
    }
};

var findNodes = function(callback, callback_obj) {
  var i = 100,
    nodes = [],
    found;
  while (i) {
    if (typeof callback === "string") {
      callback = callback_obj[callback];
    }
    //...
    if (typeof callback === "function") {
      callback.call(callback_obj, i);
    }

    nodes.push(i);
    console.log(i + ' into loop')
    i -= 1;
  }
  return nodes;
};
var hide = function(node) {
  console.log(node);
};
console.log('nodi: ' + findNodes("paint", myapp));
