function list() {
    return arguments;
}

var t = list`a${1}b${2}c${3}`;
console.log(t);