/*
inheritance by copy properties from another object
*/
function extend(parent, child) {
    var i;
    child = child || {};
    for (i in parent) {
      if (parent.hasOwnProperty(i)) {
        child[i] = parent[i];
      }
    }
    return child;
  }
  //exemple
var dad = {
  name: "Adam"
};
var kid = extend(dad);
kid.name; // "Adam"
/**this extend function make a reference to the parent, so if you change  the child you also change the parent
  with extendDeep() function if make this  not possible
  */
function extendDeep(parent, child) {
  var i,
    toStr = Object.prototype.toString,
    astr = "[object Array]";
  child = child || {};
  for (i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === "object") {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {};
        extendDeep(parent[i], child[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
};
