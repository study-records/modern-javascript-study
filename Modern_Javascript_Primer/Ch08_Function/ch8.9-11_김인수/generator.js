function* createNumbers(from,to) {
    while( from <= to ) yield from++;
}

var iter = createNumbers(10,20);

for(var v of iter) console.log(v);