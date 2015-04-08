/**
 *   Very useful to organize your appplication when its grown
 *   Every module must work separately
 *   It use the namespace pattern, js not have its native namespace declaration
 */
MYAPP.namespace('MYAPP.utilities.array');
MYAPP.utilities.array = (function() {
  // dependencies
  var uobj = MYAPP.utilities.object,
    ulang = MYAPP.utilities.lang,
    // private properties
    array_string = "[object Array]",
    ops = Object.prototype.toString;
  // private methods
  // ...
  // end var
  // optionally one-time init procedures
  // ...
  // public API
  return {
    inArray: function(needle, haystack) {
      for (var i = 0, max = haystack.length; i < max; i += 1) {
        if (haystack[i] === needle) {
          return true;
        }
      }
    },
    isArray: function(a) {
        return ops.call(a) === array_string;
      }
      // ... more methods and properties
  };
}());

/**
 *   In this way you can create e  module that produce construnctor
 *   to isntanciate an object
 */
MYAPP.namespace('MYAPP.utilities.Array');
MYAPP.utilities.Array = (function() {
  // dependencies
  var uobj = MYAPP.utilities.object,
    ulang = MYAPP.utilities.lang,
    // private properties and methods...
    Constr;
  // end var
  // optionally one-time init procedures
  // ...
  // public API -- constructor
  Constr = function(o) {
    this.elements = this.toArray(o);
  };
  // public API -- prototype
  Constr.prototype = {
    constructor: MYAPP.utilities.Array,
    version: "2.0",
    toArray: function(obj) {
      for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
        a[i] = obj[i];
      }
      return a;
    }
  };
  // return the constructor
  // to be assigned to the new namespace
  return Constr;
}());

//you can use in this way
var arr = new MYAPP.utilities.Array(obj);
