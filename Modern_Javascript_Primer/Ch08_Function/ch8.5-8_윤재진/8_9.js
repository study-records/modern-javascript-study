function makeMultiplier(x) {
	console.log('x',x);
	return function(y) {
		console.log('y',y);
		return x*y;
	};
}
makeMultiplier(4);
var multi2 = makeMultiplier(2);
var multi10 = makeMultiplier(10);
console.log(multi2(3));   // → 6
console.log(multi10(5));  // → 30


function say(greetings, honorifics) {
	console.log(`${greetings} ${honorifics}${this.name}`);
}
var tom = {name: 'Tom Sawyer'};
var becky = {name: 'Becky Thatcher'};

say.apply(tom, ["hello!", "Mr."]);
say.apply(becky, ["Hi!", "Ms."]);
say.call(tom, "hello!", "Mr.");
say.call(becky, "Hi!", "Ms.");

var sayToTom = say.bind(tom);
sayToTom("Hello", "Mr.");

//----------------------
function f(x){}
f.p = 'a';
f.g = function() {};
console.log(f.p);