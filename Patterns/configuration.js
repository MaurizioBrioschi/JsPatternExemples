/**
 * this way of pass parameters to a function give you the opportunity, thanks a conf array
 * to don't remember anytime what properties pass and if in the future software requirements will change
 * you have only to change the conf array
 */
var conf = {
  username: "batman",
  first: "Bruce",
  last: "Wayne"
};
var addPerson = function(conf) {
  var properties = conf;
}
