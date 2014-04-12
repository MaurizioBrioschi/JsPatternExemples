/*
* this is a for in loop optimized to see if there is a function in a object
* 
*/

var man = {
	hands:2,
	legs:2,
	head:1
};

//this is a filter to see what var are present in a object prototype -> this method print vars not present in man cached in hasOwn
//is a good practise to not override an existing method
var i, hasOwn = Object.prototype.hasOwnProperty;
for(i in man){
	if(hasOwn.call(man,i)){
		console.log(i,":",man[i]);
	}
}

//infact if you do something like this, you'll print var of man and var of its prototype (in this case, object)
for(var i in man){
	console.log(i,":",man[i]);
}




