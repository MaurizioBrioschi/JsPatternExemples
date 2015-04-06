/**
*   Immediate function pattern  to execute it as soon as it is defined
*   This pattern is useful because it provide a scope sandbox for your initialization code
*   It protect the global scope pollution
*/
(function() {
  alert('watch out!');
}());
