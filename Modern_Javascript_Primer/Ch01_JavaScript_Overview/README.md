[ 모던 자바스크립트 입문 Modern Javascript ]

(1장.2장)
1. 프로그래밍 언어
    1)정의 : data + logic 을 처리할때 사용하는 언어
    2)컴파일 언어 vs 인터프리터 언어 
    3)언어의 유형 
      절차적 언어(procedure language) : C
      객체 지향 언어(object oriented programming) : Java, C++, C# 
      함수형 언어(functional programming) : Scala
      논리형 언어

2. 자바스크립트의 특징
    1) 인터프리터 언어이다.
    2) 동적 프로토타입 기반 객체 지향 언어이다.
    3) 동적 타입언어이다.
    4) 함수가 일급 객체다.
    5) 함수가 클로저를 정의한다.

3. 자바스크립트 언어의 기술적 요소 
    1) ECMAScript(코어 언어)
    2) 클라이언트 측의 고유한 기술 요소 
       - ECMAScript가 규정한 코어 언어 + 웹브라우져의 API(DOM)
       - 웹 브라우져의 API
         . Window 인터페이스 : 자바스크립트로 브라우저 또는 창을 조작하는 기능을 제공한다.
         . DOM(Document Object Model) : 자바스크립트로 HTML 문서의 요소를 제어하는 기능을 제공한다.
         . XMLHttpRequest : 서버와 비동기로 통신하는 기능을 제공한다.
       - HTML5의 주요 API
         . Drag and Drop : HTML 요소 혹은 파일을 끌어서 다른 HTML 요소세 놓을 때 데이터를 전달하는 기능을 제공한다. 
         . Blob : 이진 데이터를 다루는 기능을 제공한다. 
         . File : 로컬 파일 시스템을 읽고 쓸 수 있는 기능을 제공한다. 
         . Web Workers : 프로그램 여러개를 멀티스레드로 병렬 처리하는 기능을 제공한다.
         . Web Storage : 대용량이며 저장기간에 제한이 없는 데이터를 로컬에 저장하는 기능을 제공한다. 
         . Indexed Database : 로컬에 키-값(key-value) 타입의 관계형 데이터베이스 기능을 제공한다.
         . WebSockets : 서버와의 양방향 통신 기능을 제공한다. 
         . Geolocation : GPS 등의 위치 정보를 다루는 기능을 제공한다.
         . Canvas : 2차원, 3차원 그래픽스 기능을 제공한다.

    3) 서버 측 자바스크립트의 고유한 기술 요소 
       - 웹서버 구현 언어 : Perl, PHP, Python, Ruby
       - Node.js : 구글이 개발한 자바스크립트 실행 환경 
       - Rhino : 오픈 소스로 개발되어 현재는 모질라(Mozilla)가 관리하고 있는 자바스크립트 실행 환경
       - Aptana Jaxer : 압타니(Aptana) 사가 개발하고 현재는 오픈 소스로 개발되고 있는 자바스크립트 실행 환경

4. ECMAScript 6(ECMAScript 2015)
    1) 2015년 6월에 권고
    2) 2009년에 권고된 ECMAScript 5 이후로 가장 큰 변화 
    3) ECMAScript 6 이후로 ECMAScript 2015,2016,2017,2018... 로 연호를 붙인다.
    4) ECMAScript 6에 추가된 주요기능 
       - 템플릿 리터럴 
       - Symbol
       - 블록 범위
       - Math, Number, String의 새로운 메소드 
       - 화살표 함수 
       - 함수 매개변수에 추가된 기능
       - 이터레이터/제너레이터
       - 객체 리터럴에 추가된 기능 
       - Object에 추가된 메소드
       - 비구조화 할당 
       - 전개 연산자
       - Map, Set, WeakMap, WeakSet
       - ArrayBuffer와 형식화 배열
       - Array에 추가된 메소드
       - 정규 표현식에 추가된 메소드 
       - Promise
       - 클래스 
       - 모듈
       - Proxy, Reflect
       - 꼬리 재귀 최적화
    5) es6 웹 브라우져 지원 현황 확인 : https://kangax.github.io/compat-table/es6/
    6) ECMAScript 2016에 추가된 내용
       - 거듭제곱 연산자
       - Array.prototype.includes()
    7) ECMAScript 2017에 추가될 내용
       - SIMD(Single Instruction/Multiple Data)로 데이터 수준의 병렬 연산 지원 
       - Async Function으로 비동기 처리 작성 지원 
       - Decorators로 클래스에 기능 더하기
       - 객체의 잔여 프로퍼티를 새로운 객체에 할당하는 Rest Properties

5. 자바스크립트의 역사 
    1) 1995년 Netscape Communications의 브렌던 아이크(Brendan Eich)가 개발
    2) Netscape Navigator 2.0에 구현
    3) 1996년에 Microsoft 사의 Internet Explorer 3.0에 탑재
    4) 초창기에는 Netscape Navigator와 Internet Explorer에서 모두 동작하는 코드를 만들기 어려웠다. 
    5) 1997년 ECMAScript 표준화 진행
    6) 현재는 오래된 브라우져외에 대다수 브라우져의 호환성 문제는 해소

6. 실습 준비하기
    1) 웹 브라우져와 Node.js 설치하기
       - https://nodejs.org/ko/download/
       - 운영체제에 맞는 nodejs를 다운받아 설치한다.
    2) 텍스트 편집기 준비하기
       - 메모장 
       - Sublime Text3 
       - WebStorm
       - Visual Studio Code 
       - Adobe brackets(내장된 Node.js 실시간 미리보기 기능을 갖추고 있음)

7. 간단한 소스 작성해보기 - 팩토리얼 계산하고 표시하기
    file명 : exam_01_factorial.js 

function fact(n){
    if( n<=1 ) return n;
    return n*fact(n-1);
}
for(var i=1; i<10; i++){
    console.log(i+"!="+fact(i));
}

8. 프로그램 실행
    1) 웹 브라우져 콘솔에서 실행하기 
       맥 : Command + Option + i 
       윈도우 : Ctrl + Shift + i 
    2) 자바스크립트 코드를 HTML 문서에 삽입하여 웹 브라우져로 실행하기 
       <script src="exam_01_factorial.js"></script>
    3) Node.js의 대화형 모드로 실행하기
       1)맥 : 터미널창 실행 or 윈도우 : cmd창 실행
       2)Math.sqrt(2)
       3)console.log("Hello, World");
       
    4) Node.js로 파일을 읽어 들여 실행하기
       #node exam_05_factorial_console.js

9. 문자코드 
   - 자바스크립트 프로그램은 유니코드 문자로 작성.
   - 유니코드 : 전 세계의 문자를 포함한 문제 체계 
   - ECMAScript 5 : 유니코드 버전 3 이상 지원 
     http://ecma-international.org/ecma-262/5.1/#sec-2
   - ECMAScript 6 : 유니코드 버젼 5.1.0 이상
     http://ecma-international.org/ecma-262/6.0/#sec-2

(프로그램 작성법)
10. 대소문자 구별 
   - Console.log("Hello, World");
   - console.log("Hello, World");

11. 토큰 
   - 프로그램을 구성하는 최소단위 
   - return n*fact(n-1);
   - return | n | * | fact | ( | n | - | 1 | ) | ;

12. 공백문자 
   - 토큰을 공백 등을 넣지 않고 나열만 해서는 판별할 수 없다. 
   - return n, returnn
   - 언어마다 공백문자를 정의하는 기준이 다름 
   - ECMAScript 5
     일본어 반각 스페이스(\u0020), 탭(\u0009), 수직 탭(\u000B), 폼 피드(\u000C),
     줄 바꿈 없는 공백(\u00A0), 바이트 순서 표시 제어문자(\uFEFF), 
     기타 유니코드 카테고리 Zs에 포함된 모든 문자
   - 주의 : 일본어 전각 스페이스(\u3000)도 Zs에 포함되므로 공백문자로 간주하나 
           HTML/CSS 에서는 공백문자로 취급하지 않는다. 

13. 공백 생략 가능한 경우 
   - a = 1 + 2 + 3 => a=1+2+3
   - function fact( n ) => function fact(n)
   - { x : 1 , y : 1 } => {x:1, y:1}
   - obj . x => obj.x
   - [ 1 , 2 , 3 ] => [1,2,3]
   - a [ 0 ] = 10 => a[0]=10;

14. 프로그래밍 가독성 높이기 
   function fact(n) {if(n<=1)return n;return n*fact(n-1)}
   function fact(n){
       if(n<=1) return n;
       return n*fact(n-1);
   }

15. 문장사용법
    - console.log(i+"! = "+fact(i));
    - var x;                    // 변수 선언
      message = "Hi, "+name;    // 표현식의 대입
      counter++;                // 변수 값 증가
      prompt("이름을 입력하세요.")  // 함수호출

16. 복합문(블록문)
    - 문장 여러개를 {}로 감싼 코드 
    - {
         sum = sum + x;
         console.log("sum = "+x);
      }

17. 빈문장 
    - 문장이 하나도 없는 문장 
    - ;(세미콜론)으로 작성한다.

18. 세미콜론 자동추가 
    - 한 문장 작성후 다음줄에 문장을 작성하면 자동으로 세미콜론이 있는것 처럼 인식한다.
    - console.log("Hello")
    - console.log("Hi")

    - console.log("Hello");
    - console.log("Hi");

    - 작성한 코드와 줄바꿈한 문장이 이어진다고 판단하면 세미콜론 추가를 하지 않는다. 
    - c = a + b
    - (x+y).toString()

    - c = a + b(x+y).toString(); (이와같이 해석한다.)

    - 아래와 같은 경우에는 다르게 해석하기 때문에 주의해야 한다.
    - return 
    - 1;

    - return 1;

19. 주석문 
    - 실행은 되지 않고, 소스코드에 삽입되는 설명문 
    - /**/ : 여러줄 주서 
    - //   : 한줄 주석
