# __8.9-11 고차함수, 콜백함수, ES6 추가된 함수__
![title](title.png)

## __8.9 고차 함수__
고차함수를 이용하여 작업을 한곳애 모아 추상화하면 프로그램의 가독성과 유지 보수성을 향상시킬 수 있다.

### __8.9.1 고차 함수__
- 함수를 인수로 받는 함수 또는 함수를 반환하는 함수
- 아래의 3가지 특성으로 자바스크립트는 고차함수를 쉽게 정의 가능
    - 자바스크립트 함수는 [일급 객체(first-class)](https://poiemaweb.com/js-function#3-first-class-object-%EC%9D%BC%EA%B8%89-%EA%B0%9D%EC%B2%B4)
    - 함수의 인수로 함수를 넘김
    - 함수 반환 가능
- 고차함수를 이용하면 처리 패턴이 같은 작업을 추상화하여 하나로 합칠 수 있다.
- 함수형 프로그래밍에서 자주 사용된다. ()
- 자바스크립트는 함수형 프로그래밍을 지원하는 언어이지만 책에서 자세히 설명하지는 않을 것, 대신에 고차함수를 이용한 함수형 프로그래밍의 예를 몇가지 소개할 예정

### __8.9.2 간단한 예__
패턴이 같은 작업을 고차 함수로 정리하는 예제.

[1] 수열을 표시하는 프로그램
```js
var digits = "";

for (var i = 0; i < 10; i++) {
    digits += i;
}

console.log(digits);
```
[2] 무작위 알파벳 문자열을 표시하는 프로그램
```js
var randomChars = "";

for (var i = 0; i < 8; i++) {
    randomChars += String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
}

console.log(randomChars);
```

하는 일은 다르지만 사용하는 로직이 같으므로 아래와 같이 공통부분을 고차함수로 만들 수 있음

```js
function joinStrings(n, f) { //고차함수
    var s = "";
    for (var i = 0; i < n; i++) {
        s += f(i);
    }

    return s;
}

var digits = joinStrings(10, function (i) { return i; });
var randomChars = joinStrings(8, function(i){
	return String.fromCharCode(Math.floor(Math.random()*26) + "a".charCodeAt(0));
});

console.log(digits);
console.log(randomChars);
```

### __8.9.3 메모이제이션__
> 메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때 연산 값을 함수 레벨에서 캐시하여 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 동적 계획법의 핵심이 되는 기술이다.  Donald Michie 라는 인공지능 연구학자가 처음 사용한 단어.

다음은 인수로 함수를 받아서 그 함수를 메모이제이션 기법을 적용한 함수로 가공하여 반환하는 방식을 보여주는 예제
#### __[예제 8-14] 메모이제이션__
```js
function memorize(f) {
var cache = {};
    return function(x) {
        if(cache[x] == undefined) cache[x] = f(x);
        return cache[x];
    }
}

function isPrime(n) {
    if(n<2) return false;
    var m = Math.sqrt(n);

    for(var i=2; i<=m; i++)if( n%i == 0 ) return false;
        return true;
}

var isPrime_memo = memorize(isPrime);
var N = 1000;

for(var i=2; i<=N; i++) isPrime_memo(i);
// 쌍둥이 소수의 목록을 출력
for(var i=2; i+2<=N; i++) {
    if( isPrime_memo(i) && isPrime_memo(i+2) ) console.log(i + "," + (i+2));
}
```
#### __[예제 8-15] 피보나치수열을 만드는 함수의 메모제이션__
```js
function memorize(f) {
    var cache = {};
    return function (x) {
        if (cache[x] == undefined) cache[x] = f(x);
        return cache[x];
    };
}

var fibonacci = memorize(function (n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

for (var i = 0; i <= 20; i++) {
    console.log(("  " + i).slice(-2) + ":" + fibonacci(i));
}
```
#### __[예제 8-16] 메모제이션(인수를 여러개 받을 수 있음)__
```js
function memorize(f) {
    var cache = {};
    return function () {
        // 인수를 쉼표로 연결한 문자열을 만들어서, 캐시의 키 값으로 사용한다
        var key = "";

        for (var i = 0; i < arguments.length; i++) key += arguments[i] + ",";
        if (cache[key] == undefined) cache[key] = f.apply(null, arguments);
        return cache[key];
    };
}
```

### __8.9.4 함수의 합성__
함수 f(x)와 g(x)가 있을 때 함수 f(g(x))를 f와 g의 합성 함수라고 한다. 다음의 예제의 compose 함수는 인수로 받은 함수를 순차적으로 합성한 함수를 반환한다. (커링을 통해 합성함수를 잘 써먹을 수 있다?)

#### __[예제 8-17] 함수를 합성하는 함수__
```js
function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

var square = function (x) { return x * x; };
var add1 = function (x) { return x + 1; };
var h = compose(square, add1); // h(x)=(x+1)*(x+1)

console.log(h(2)); // 9
```

#### __[예제 8-17] 함수를 합성하는 함수(인수를 여러개 받을 수 있음)__
```js
function compose(f,g) {
    return function() {
        return f.call(this,g.apply(this,arguments));
    };
}
```

### __8.9.5 부분 적용__
인수를 여러 개 받는 함수의 몇몇 인수를 상수로 지정해서 새로운 함수를 생성하는 기법을 가리켜 부분 적용이라고 함

#### __[예제 8-19] 부분 적용된 함수를 반환하는 함수__
```js
function partial(f) {
	// 중첩 함수에서 arguments를 사용하기 위해 저장해 둠
    var args = arguments;
    return function () {
        //외부 함수의 두번째 인수를 변수 a에 복사
        var a = Array.prototype.slice.call(args, 1);
        for (var i = 0, j = 0; i < a.length; i++) {
            //외부 함수의 두번째 인수가  undefined이면, 이 함수의 arguments를 사용한다
            if (a[i] == undefined) a[i] = arguments[j++];
        }
        return f.apply(this, a);
    }
}

var square = partial(Math.pow, undefined, 2); // 제곱을 구하는 함수
var sqrt = partial(Math.pow, undefined, .5); // 제곱근을 구하는 함수
var cubicroot = partial(Math.pow, undefined, 1 / 3); // 세제곱근을 구하는 함수
var exp = partial(Math.pow, Math.E, undefined); // exp(x) : 지수 함수
console.log("square(2) =", square(2));
console.log("sqrt(2) =", sqrt(2));
console.log("cubicroot(2) =", cubicroot(2));
console.log("exp(2) =", exp(2));
```

### __8.9.6 커링__
- 커링이란 인수를 두 개 이상 받는 함수를 분해하여 인수가 하나인 함수의 중첩 함수로 변환하는 작업을 말한다.
( = 다중인자를 받는 함수를 단일 인자 함수열로 만드는 것)
- 커링 함수의 가장 큰 장점은 부분 적용한 함수를 쉽게 만들어 낼 수 있다.

```js
// 커링의 예
var pow = function(exponent) {
    return function(base) {
        return Math.pow(base, exponent);
    }
}

// 배열 메서드인 map과 reduce를 사용하여 각 배열 요소에 대한 제곱 합의 제곱근은 구한다.
var sum = function (a, b) { return a + b; }
var a = [1, 2, 3, 4];
var abs_a = pow(.5)(a.map(pow(2)).reduce(sum));
```
[다른예제](https://www.zerocho.com/category/JavaScript/post/579236d08241b6f43951af18)

## __8.9 콜백 함수__
- 자바스크립트 프로그램에서는 콜백 함수를 매우 자주 사용한다.
- 어떤 이벤트가 발생한 후 수행될 함수를 의미

### __8.10.1 콜백 함수__
> #### 문제되는 상황
```js
function getData() {
    var tableData;
    $.get('https://domain.com/products/1', function (response) {
        tableData = response;
    });
    return tableData;
}

console.log(getData()); // undefined
```
> #### 콜백 함수로 비동기 처리 방식의 문제점 해결
```js
function getData(callbackFunc) {
	$.get('https://domain.com/products/1', function (response) {
		callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
	});
}

getData(function (tableData) {
	console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

### __8.10.2 이벤트 처리기__
```js
    button.addEventListener("click", function(){ ... });
```

### __8.10.3 타이머__
```js
    setTimeout(function() { ... }, 2000);
```

## __8.11 ECMAScript 6부터 추가된 함수의 기능__
ECMAScript 6부터 추가된 함수의 기능인 화살표 함수, 나머지 매개변수, 인수의 기본 값, 제너레이터, 템플릿 리터럴의 태그 함수를 살펴본다.

### __8.11.1 화살표 함수 표현식으로 함수 정의하기__
화살표 함수 표현식은 함수 리터럴(익명 함수)의 단축 표현이다.


> #### __화살표 함수 표현식의 작성법__
```js
    // 기존의 함수 리터럴
    var square = function(x) { return x * x; }
    
    // 화살표 함수 표현들
    var square = (x) => { return x * x; }

    var square = (x, y, z) => { ... }

    var square = x => { return x * x } // 인수 하나일때 괄호 생략가능

    var square = x => x * x;

    var square = x => { return x * x } // 반환값이 객체 리터럴이면 ()로 묶어야 한다.

    (x => x * x)(3); // 즉시 실행
```
> #### __함수 리터럴과 화살표 함수의 차이점__
- this의 값이 함수를 정의할 때 결정된다.
- arguments 변수가 없다.
- 생성자로 사용할 수 없다.
- yield 키워드를 사용할 수 없다.

### __8.11.2 인수에 추가된 기능__
> #### __나머지 매개변수__
```js
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a); 
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs); 
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```
- 함수의 인자가 들어가는 부분에 ...을 입력하면 그만캄의 인수를 배열로 받을 수 있다.
- ...으로 표현한 인자를 가리켜 나머지 매개변수 또는 rest parameter라고 부른다.

> #### __인수의 기본값__
- 함수의 매개변수는 기본적으로 undefined이기 때문에 ES5까지는 undefined일 때에 대한 처리도 따로 해주어야했다.
    ```js
    function multiply(a, b) {
        var b = typeof b !== 'undefined' ?  b : 1;

        return a*b;
    }

    multiply(5); // 5
    ```
- ES6부터는 함수의 인자에 대입(=) 연산자를 사용해서 기본값을 설정 할 수 있다. 
    ```js
    function multiply(a, b = 1) { // ES6 기본 값 설정
        return a*b;
    }

    multiply(5); // 5
    ```

### __8.11.3 이터레이터와 for/of 문__
> #### __이터레이션__
- iteration은 반복 처리라는 뜻으로 데이터 안의 요소를 연속적으로 꺼내는 행위를 말한다.
- 반복 처리의 예로는 forEach 메서드가 있다. forEach는 배열의 요소를 꺼내 그 값을 함수의 인수로 넘기는데 이러한 과정을 계속 반복한다.
```js
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
    console.log(element);// a, b, c 차례로 출력
});
```

> #### __이터레이터__
- 이터레이터(iterator)란 반복 처리(iteration)가 가능한 객체를 말한다.
- 앞의 forEach 메서드는 배열의 요소를 꺼내 그 값을 함수의 인수로 넘기고, 그 작업이 끝나면 배열의 다음 요소를 꺼내 함수의 인수로 넘기기를 반복한다. 이 작업은 내부적으로 처리되므로 개발자는 각 처리 단계를 제어 할 수 없다.
- 하지만 ES6에 추가된 이터레이터를 사용하면 개발자가 반복처리를 단계별로 제어할 수 있다.

> #### __이터레이터의 예__
ES6의 iterator가 무엇인지 설명하기에 앞서 iterator의 예를 살펴본다.

- 배열은 `Symbol.iterator` 메서드를 가지고 있다.
- `Symbol.iterator`는 자바스크립트에 내장되어 있는 특별한 의미를 가진 심벌이다.
- @@iterator리고 표기하고 이터레이터 심벌이라고 읽는다.
- 배열의 Symbol.iterator 메서드는 이터레이터를 반환하는 함수이다.
```js
var a = [5, 4, 3];
var iter = a[Symbol.iterator](); // 배열의 iterator
console.log(iter.next());  // →　Object {value: 5, done: false}
console.log(iter.next());  // →　Object {value: 4, done: false}
console.log(iter.next());  // →　Object {value: 3, done: false}
console.log(iter.next());  // →　Object {value: undefined, done: true}
console.log(iter.next());  // →　Object {value: undefined, done: true}
```
- iter의 next 메서드를 호출할 때마다 `iterator result`라는 객체가 반환된다.
- `iterator result`는 value와 done 프로퍼티를 갖는 객체이다.

> #### __이터레이터 객체__
ES6의 이터레이터는 일반적으로 다음의 두가지 항목을 만족하는 객체이다.
- next 메서드를 가진다.
- next의 반환값은 value 프로퍼티와 done 프로퍼티를 가진 객체이다. 이때 value에는 꺼낸 값이 저장되고, done에는 반복이 끝났는지를 뜻하는 논리값이 저장된다.


#### __[예제 8-20] 배열의 이터레이터를 반환하는 함수 & 이터레이터 객체의 예__
```js
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
console.log(iter.next());  // →　Object {value: "A", done: false}
console.log(iter.next());  // →　Object {value: "B", done: false}
console.log(iter.next());  // →　Object {value: "C", done: false}
console.log(iter.next());  // →　Object {value: undefined, done: true}
```
> #### __반복 가능한 객체와 for/of 문__
- 이터레이터를 사용해서 이터레이션을 하려면 개발자가 적절한 처리를 해줘야한다.
- 배열의 요소를 이터레이터를 사용해서 목록으로 바꾸려면 다음과 같이 작성한다.

```js
// 이터레이터를 사용한 이터레이션
var a = [5, 4, 3];
var iter = a[Symbol.iterator]();
while(true) {
    var iteratorResult = iter.next();
    if(iteratorResult.done == true) break;
    var v = iteratorResult.value;
    console.log(v); // 5, 4, 3이 순차적으로 출력
}
```
for-of를 사용하면 반복처리를 자동으로 하도록 할 수 있다.

```js
// for/of 사용
var a = [5, 4, 3];
for(var v of a) console.log(v); // 5, 4, 3이 순차적으로 출력
```

- for/of 는 이터레이터의 next 메서드를 순회할 때마다 자동으로 호출
- 이터레이터의 반복 처리를 간결하게 표현 할 수 있음

> #### __Symbol.iterator 메서드를 가진 객체__
- 반복 가능한 객체(iterable)
- Symbol.iterator 메서드를 내장
- Array, String, TypedArray, Map, Set
- 반복 가능한 객체는 for/of 문, 전개 연산자, yield*, 비구조화 할당 등에 활용가능 

> #### __이터레이터 객체 != 이터러블한 객체__
- 이터레이터 객체와 이터러블(반복 가능)한 객체를 다른 개념이다.
- [예제 8-20]의 iter는 이터레이터 이지만 for/of로 순회 불가능
- 이터레이터를 반복처리 하기 위해서는 이터러블 객체를 생성해야한다. (iterable.js 참조)
```js
var iterable = {};
iterable[Symbol.iterator] = function() { //Symbol.iterator를 사용하여 이터러블하게 만든다.
    return iter;
}

for(var v of iterable) console.log(v);
```


### __8.11.4 제너레이터__
> #### __제너레이터__
제너레이터는 다음과 같은 성질을 지닌다.
- 반복 가능한 이터레이터를 값으로 반환한다.
- 작업의 일시 정지와 재시작이 가능하며 자신의 상태를 관리한다.

재너레이터는 이터레이터의 반복 처리를 강력하게 지원한다. 제너레이터를 활용하면 반복 알고리즘을 독자적으로 구현한 이터레이터보다 유연하게 표현이 가능하다.
> #### __제너레이터 메서드__
```js
Generator.prototype.next()
    // yield 표현을 통해 yield된 값을 반환합니다.

Generator.prototype.return()
    // 주어진 값을 반환하고 생성기를 종료합니다.

Generator.prototype.throw()
    // 생성기로 에러를 throw합니다.
```
> #### __제너레이터의 정의와 실행__
`function*` 문으로 정의하며 하나 이상의 `yield` 표현식을 포함한다. 다음은 간단한 제너레이터의 메커니즘이다.

```js
function* gen() { 
  yield 1; //포인트 1
  yield 2; //포인트 2
  yield 3; //포인트 3
}

var iter = gen(); // "Generator { }"
console.log(iter.next());  // →　Object {value: "A", done: false}
console.log(iter.next());  // →　Object {value: "B", done: false}
console.log(iter.next());  // →　Object {value: "C", done: false}
console.log(iter.next());  // →　Object {value: undefined, done: true}

/* 메서드
Generator.prototype.next()
    yield 표현을 통해 yield된 값을 반환합니다.

Generator.prototype.return()
    주어진 값을 반환하고 생성기를 종료합니다.

Generator.prototype.throw()
    생성기로 에러를 throw합니다.
*/ 
```
1. 제너레이터 함수인 gen()은 이터레이터를 반환하는데, 이 반환값을 변수 iter에 대입한다.
2. 이터레이터의 next 메서드가 호출되면 함수의 첫번째 yield 연산자의 위치(포인트 1) 까지 실행하며 결과값은 iterator result를 반환한다. 이때 함수의 내부 처리는 포인트 1에서 일시 정지
3. 포인트 3까지 동일한 프로세스로 반복
4. 마지막 위치에서 {value: undefined, done: true}의 iterator result 반환

> #### __yield__
- `yield`라는 단어에는 '산출하다'라는 뜻이 있다.
- yield에 지정한 값은 next 메서드의 반환값이 되어 밖으로 산출된다.
- `yield 표현식`으로 yield에 지정한 표현식을 값으로 가지며 변수에 대입할 수 있다.
    ```js
        var a = yield 2; // a의 값은 2가 된다.
    ```
제너레이터로 생성한 이터레이터는 반복할 수 있기 때문에(이터러블하기 때문에) for/of 문으로 반복처리 가능
#### __[예제 8-21] m부터 n까지의 정수 값을 순서대로 꺼내는 이터레이터를 생성하는 제너레이터__
```js
function* createNumbers(from,to) {
    while( from <= to ) yield from++;
}

var iter = createNumbers(10,20);

for(var v of iter) console.log(v);  // 10 ~ 20 사이의 정수를 순서대로 출력한다
```
> #### __제너레이터에 예외 던지기__
```js
function idMaker() {
    var count = 0;
    while(true) {
        try{
            yield count++;
        }catch(e) {
            console.log('오류가 발생했어요')
        }
    }
}

var iter = idMaker();
console.log(iter.next());   // Object {value: 0, done: false}
console.log(iter.next());   // Object (value: 1, done: false)
iter.throw(new Error());    // 오류가 발생했습니다.
```
> #### __반복 가능한 객체에 위임하기: `yield*`__
반복 가능한 객체에서 순차적으로 값을 꺼내 각각의 값에 yield를 적용

```js
function* f() {
    yield 'x';
    yield 'y';
}

function* g() {
    yield 0;
    yield* [2, 4];
    yield* 'AB';
    yield* f();
}

var iter = g();
for(var v of iter) console.log(v); // 0, 2, 4, A, B, X, Y 순서로 출력
```

[Generator의 사용](https://meetup.toast.com/posts/73)
### __8.11.5 템플릿 리터럴의 태그 함수__
템플릿 리터럴 앞에 함수 이름을 적으로 템플릿 리터럴의 내용을 인수로 받는 함수를 호출할 수 있다.
```js
function list() {
    return arguments;
}

var t = list`a${1}b${2}c${3}`;
console.log(t); // [[ 'a', 'b', 'c', '' ], 1, 2,3 ]
                // [Arguments] { '0': [ 'a', 'b', 'c', '' ], '1': 1, '2': 2, '3': 3 }
```
- 첫번째 인수는 문자열을 요소로 담은 배열이다. 이 배열의 요소는 템플릿 리터럴 안의 문자열을 `${...}`을 기준으로 분할한 문자열이다.
- 두번째 이후 인수로는 각 `${...}` 안에 지정된 표현식을 평가한 값이 순서대로 들어간다.
- 템플릿 리터럴의 시작 부분이 `${...}`면 태그 함수의 첫 번째 인수인 배열의 첫 번째 요소로 빈 문자열이 들어온다.
- 끝 부분이 `${...}`로 끝나면 태그 함수의 첫 번째 인수인 배열의 마지막 요소로 빈 문자열이 들어온다.