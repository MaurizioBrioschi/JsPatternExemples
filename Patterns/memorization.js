/**
 * This is cache  pattern  that give the opportunity to compute heavy operations just one time
 * you store the result of the computetion in a  local variable
 */
var myFunc = function(param) {
  if (!myFunc.cache[param]) {
    var result = {};
    // ... expensive operation ...
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};
// cache storage
myFunc.cache = {};

/**
 * If you want to serialized the result, for  example in JSON format
 !! The object identifier is lost!!
 */
var myFunc = function() {
    var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
      result;
    if (!myFunc.cache[cachekey]) {
      result = {};
      // ... expensive operation ...
      myFunc.cache[cachekey] = result;
    }
    return myFunc.cache[cachekey];
  }
  // cache storage
myFunc.cache = {};
