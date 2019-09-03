function makeIterator(array) {
    var index = 0;

    return {
        next: function () {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}
var iter = makeIterator(["A", "B", "C"]);

iter[Symbol.iterator] = function() {
    return iter;
} 

for(var v of iter) {
    console.log(v);
}