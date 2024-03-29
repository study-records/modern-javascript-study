# HTML5 canvas
![canvas](html5_canvas.png) 

###[canvas의 기본적인 사용법](http://localhost:63342/javasciptWonderland/modernJS/chap06/chap-06-05.html?_ijt=sn2u7bkirqd4p8g9f8k0gfveup)
1. canvas 요소를 배치한다.  
   width와 height를 생략하면 기본크기인 300 X 150 픽셀로 설정된다.
```
<canvas id="mycanvas" width="640" height="300"></canvas>
```
2. canvas 요소 가져오기
```
var canvas =document.getElementById("mycanvas");
```
1. canvas 렌더링 컨텍스트 가져오기

canvas로 그림을 그리려면 canvas요소 객체에서 '렌더링 컨텍스트'라는 객체 가져오기
getContext 메서드의 인수는 2가지 2d, 'webgl'
 - 2d:  2차원 컴퓨터 그래픽스
 - webgl: 3차원 컴퓨터 그래픽스             
```
var ctx =canvas.getContext('2d');
```
strokeRect() 좌표(50,60)에 너비가 200이고 높이가 100인 사각형 테두리를 그린다.
````  
ctx.strokeRect(10, 10, 200, 100);
````  
fillRect() 사각형 채우기
````
ctx.fillRect( 220, 10, 200, 100);  
````  
clearRect() 사각형 영역을 지우고 투명하게 만들기
````
ctx.clearRect( 270, 35, 100, 50);  
````

###[canvas 패스로 그리기](http://localhost:63342/javasciptWonderland/modernJS/chap06/chap-06-05-02.html?_ijt=r769lhjf9t0cvdujdhstvlf565)
사각형은 캔버스에 내장된 메서드를 호출하기만 해도 그릴 수 있지만  
패스를 그리려면 패스를 정의한 후에 패스를 그리는 과정을 밟아야 한다.



beginPath() 렌더링 패스를 기록시작, 지금까지 정의한 패스 초기화
```
ctx.beginPath();
```
moveTo() x,y 인수의 좌표로 이동
```
ctx.moveTo(320,10);	
```
lineTo() 현재 좌표에서 지정된 좌표까지 선을 정의
```
ctx.lineTo(420,100)
```
closePath() 패스의 마지막점과 시작점을 직선으로 연결하고 패스 닫기
```
ctx.closePath();	
```
stroke() 패스를 Canvas에 그리기
```
ctx.stroke();
```

###[원호 그리기](http://localhost:63342/javasciptWonderland/modernJS/chap06/chap-06-05-04.html?_ijt=r823e2k7hrvhcgb7a4fpe31sae)

arc 메서드는 원호를 그리고 6개의 인수가 있습니다.
arc(x, y, radius, startAngle, endAngle, anticlockwise)
```
ctx.arc(200,200,50,0, 180 * Math.PI/180,false);
```

마지막 인수 anticlockwise의 값이  
true이면 시계 반대 방향,  
false이면  시계 방향입니다.

######시계 방향
ctx.beginPath();
ctx.arc(50,50,25,0, 270 * Math.PI/180,false);
ctx.stroke();

###[둥근 모서리 그리기](http://localhost:63342/javasciptWonderland/modernJS/chap06/chap-06-05-07.html?_ijt=8jvdgg13t00hsl5heacn618oka)

acr() 메서드로도 둥근 모서리를 그릴 수 있으나 선과 원호의 연결점 위치를 계산해야 하는 번거롭습니다.
acrTo(x1, x2, y1, y2, radius)를 더욱 쉽게 둥근 모서리를 그릴 수 있습니다.

```
ctx.arcTo(900,10,750,160,25);
```

###[둥근 사각형 그리기](http://localhost:63342/javasciptWonderland/modernJS/chap06/chap06-06.html?_ijt=672uor7dhcqrutt0e7rggberqf)
acrTo()을 활용해서 둥근 상격형 그리기
###[그래픽스 속성 설정하기](http://localhost:63342/javasciptWonderland/modernJS/chap06/chap-06-06-01.html?_ijt=e5h5u28tl3kiujjtlgk44po4rq)

```
ctx.lineWidth = 5;
ctx.strokeStyle = "red"; // 빨간선 긋기
ctx.fillStyle = "blue";
ctx.globalAlpha = '0.6'; // 투명도 설정
```


