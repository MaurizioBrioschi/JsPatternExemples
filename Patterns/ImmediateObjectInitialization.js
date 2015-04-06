/**
* This pattern is useful to don't give access to the object after its initialization with init() method
* if you want to keep a reference to the object just put a return statement to this to the end of the init
*/
({
  var1: 'myvalue',
  init: function() {
    //do some shit
  }
}).init();
