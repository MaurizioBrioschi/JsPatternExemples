/**
 * This pattern (and relate function) permit to declare namespaces in your application for your modules
 * and permit to not redeclare the same module
 */
var MYAPP = MYAPP || {};
MYAPP.namespace = function(ns_string) {
  var parts = ns_string.split('.'),
    parent = MYAPP,
    i;
  // strip redundant leading global
  if (parts[0] === "MYAPP") {
    parts = parts.slice(1);
  }
  for (i = 0; i < parts.length; i += 1) {
    // create a property if it doesn't exist
    if (typeof parent[parts[i]] === "undefined") {
      parent[parts[i]] = {};
    }
    parent = parent[parts[i]];
  }
  return parent;
}

/**
 * this is the way to include some modules in your functions
 */
var myFunction = function() {
  // dependencies
  var event = YAHOO.util.Event,
    dom = YAHOO.util.Dom;
};
