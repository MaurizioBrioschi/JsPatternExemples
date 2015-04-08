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
