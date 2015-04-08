/**
* Is just a way to organize the module pattern
* Everything is private and you decide thrown the return statement what reveal
*/
MYAPP.utilities.array = (function() {
  // private properties
  var array_string = "[object Array]",
    ops = Object.prototype.toString,
    // private methods
    inArray = function(haystack, needle) {
      for (var i = 0, max = haystack.length; i < max; i += 1) {
        if (haystack[i] === needle) {
          return i;
        }
      }
      return− 1;
    },
    isArray = function(a) {
      return ops.call(a) === array_string;
    };
  // end var
  // revealing public API
  return {
    isArray: isArray,
    indexOf: inArray
  };
}());
