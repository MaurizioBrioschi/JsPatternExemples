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
