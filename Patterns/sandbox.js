/**
* As the name suggest sandbox pattern provide an environment for the modules to run without affecting others modules
  the single global is a contrunctor, you create object with this construnctor and you pass a callback function
  at the end of this script you see how to call it
*/

/**
 * You can add modules
   functions that implements each modules accept as argument the same current instance and can add additional properties to it
 */
Sandbox.modules = {};
Sandbox.modules.dom = function(box) {
  box.getElement = function() {};
  box.getStyle = function() {};
  box.foo = "bar";
};
Sandbox.modules.event = function(box) {
  // access to the Sandbox prototype if needed:
  // box.constructor.prototype.m = "mmm";
  box.attachEvent = function() {};
  box.dettachEvent = function() {};
};
Sandbox.modules.ajax = function(box) {
  box.makeRequest = function() {};
  box.getResponse = function() {};
};
/**
* Adding the constructor
*/
function Sandbox() {
    // turning arguments into an array
    var args = Array.prototype.slice.call(arguments),
      // the last argument is the callback
      callback = args.pop(),
      // modules can be passed as an array or as individual parameters
      modules = (args[0] && typeof args[0] === "string") ? args : args[0],
      i;
    // make sure the function is called
    // as a constructor
    if (!(this instanceof Sandbox)) {
      return new Sandbox(modules, callback);
    }
    // add properties to `this` as needed:
    this.a = 1;
    this.b = 2;
    // now add modules to the core `this` object
    // no modules or "*" both mean "use all modules"
    if (!modules || modules === '*') {
      modules = [];
      for (i in Sandbox.modules) {
        if (Sandbox.modules.hasOwnProperty(i)) {
          modules.push(i);
        }
      }
    }
    // initialize the required modules
    for (i = 0; i < modules.length; i += 1) {
      Sandbox.modules[modules[i]](this);
    }

    // call the callback
    callback(this);
  }
  // any prototype properties as needed
Sandbox.prototype = {
  name: "My Application",
  version: "1.0",
  getName: function() {
    return this.name;
  }
};

Sandbox('dom', 'event', function(box) {
  // work with dom and event
  Sandbox('ajax', function(box) {
    // another sandboxed "box" object
    // this "box" is not the same as
    // the "box" outside this function
    //...
    // done with Ajax
  });
  // no trace of Ajax module here
});
