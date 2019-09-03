var a = 'A';
function f() {
	var b = 'B';
	function g() {
		var c = 'C';
		console.log(a+b+c);
	}
	g()
}
f();

ExcutionContext = {
	// 함수 g가 속한 렉시컬 환경 컴포넌트
	g_LexicalEnvironment: {
		EnvironmentRecord: {
			DeclarativeEnvironmentRecord: { // 선언적 환경 레코드
				c:"C"
			},
			ObjectEnvironmentRecord: {}      // 객체 환경 레코드
		},
		// 함수 f의 렉시컬 환경 컴포넌트를 참조
		outerLexicalEnvironmentReference: f_LexicalEnvironment
	},

	f_LexicalEnvironment: {
		EnvironmentRecord: {
			DeclarativeEnvironmentRecord: { // 선언적 환경 레코드
				b:"B"
			},
			ObjectEnvironmentRecord: {}      // 객체 환경 레코드
		},
		// 함수 f의 렉시컬 환경 컴포넌트를 참조
		outerLexicalEnvironmentReference: global_LexicalEnvironment
	},

	// 전역 실행 환경(렉시컬 환경 컴포넌트)
	global_LexicalEnvironment: {
		EnvironmentRecord: {
			DeclarativeEnvironmentRecord: { // 선언적 환경 레코드
				a:"A"
			},
			ObjectEnvironmentRecord: {}      // 객체 환경 레코드
		},
		// 함수 f의 렉시컬 환경 컴포넌트를 참조
		outerLexicalEnvironmentReference: null
	},
	VariableEnvironment: {},
	ThisBinding: null,
}