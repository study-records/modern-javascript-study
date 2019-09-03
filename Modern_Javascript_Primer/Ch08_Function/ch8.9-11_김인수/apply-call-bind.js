var obj = {
    string: 'zero',
    yell: function(a) {
      console.log(this.string + a);
    }
  };
  var obj2 = {
    string: 'what?'
  };

//   yell2(); // 'what?'
//   var yell2 = obj.yell.bind(obj2)(123);
// var yell2 = obj.yell.call(obj2, 123);

var yell2 = obj.yell.apply(obj2, [123]);


/**
 * 1. 함수를 호출하는 방법에는 일반적으로 함수의 뒤에 ()를 붙이는 방법과 apply, call 이 있다.
 * 2. 첫번째 인자는 this를 대체한다.
 * 3. apply의 두번째 인자는 일반 함수와 동일하게 인자를 넣고 call은 array 형태로 인자를 넣는다.
 * 4. bind는 apply, call과 다르게 함수를 가리키는 this만 바꾸고 호출은 하지않는다. 호출하기위해서는 bind(this)(parameter) 형태를 튀한다.
 */