// var arr='giyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegciquegiyrxgfoyugrxeupqzuehfgfccsydgfpxwieuhqzuiehfuiegfyuegfpegrygrypiop634927chmiuqefdyiqdetfcityrfiwecfiuegcique'.split('');
// var a;
// for(var i=arr.length;i-->0;) {
// 	a = arr[i];
// }
// console.log(a);
//
// for(var i = 101; i-->1;){
// 	console.log(i);
// }

/**
 * 1. splice 메서드
 * @type {string[]}
 */
// 삭제 없이 추가
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
// ['Jan', 'Feb', 'March', 'April', 'June']

// 삭제 하고 추가
months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

/**
 * 2. sort 메서드
 */

var numbers = [4,  2, 5, 1, 3];
numbers.sort(function(a, b) {
	return a - b; // 오름 차순 정렬 숫자
});
console.log(numbers);
var abc = ['a', 'c', 'z', 'f', 'g'];
console.log(abc.sort());



var numberstring = [1, '100', '300', 3, 2, undefined, Infinity, null];
console.log(numberstring.sort());
// 다음 함수는 배열을 오름차순으로 정렬합니다 (Infinity 및 NaN이 포함되어 있지 않은 경우).
numberstring.sort(function(a, b) {
	return a - b; // 오름 차순 정렬 숫자
});
console.log(numberstring);

// 객체 해당 속성 중 하나의 기준으로 졍렬
var items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic' },
	{ name: 'Zeros', value: 37 }
];

// value 기준으로 정렬 오름 차순
items.sort(function (a, b) {
	if (a.value > b.value) {
		return -1;
	}
	if (a.value < b.value) {
		return 1;
	}
	// a must be equal to b
	return 0;
});
console.log(items);


var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// ["camel", "duck"]

console.log(animals.slice(-1));
// [ 'elephant' ]
console.log(animals.slice(1,-1));
// [ 'bison', 'camel', 'duck' ]

console.log(animals.slice(5));
// []

console.log(animals.slice(undefined));
// [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]


var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
	console.log(word);
	if (word === 'two') {
		console.log(words)
		words.shift();
		console.log(words)
	}
});

let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
	const length = accumulator.length;
	console.log(length)
	if (length === 0 || accumulator[length - 1] !== current) {
		accumulator.push(current);
	}
	return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]


[0, 1, 2, 3, 4].reduce(function(prev, cur, currentIndex, array) {
	console.log({prev, cur, currentIndex, array});
	return prev + cur;
});


var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
	function(accumulator, currentValue) {
		return accumulator.concat(currentValue);
	}
);
console.log(flattened);
// 펼친 결과: [0, 1, 2, 3, 4, 5]

const arr1= [{a:1,b:2},{a:1,b:2}];
// arr1.concat([{c:3,d:4}]);
console.log(arr1[arr1.length-1].a = 22);
console.log(arr1);

(function(){ arr1[arr1.length-1].q_code = 333; return arr1; })()
console.log(arr1);