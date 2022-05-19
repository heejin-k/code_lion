var me = { age: 30 };
var you = me;
// {age:30} 참조하는 카운 : 2

me = null;
// {age:30} 참조하는 카운 : 1

you = null;
// {age:30} 참조하는 카운 : 0 => 가비지 컬렉션 대상

//case.2
var x = {
    y: {
        z: 1
    }
}

// x가 참조하는 객체는 obj1, y가 참조하는 객체는 obj2

var a = x; // obj1 참조카운트 : 2 (x,a)
x = 1;      //obj1참조카운트 :1 (a)

var b = a.y; //obj2 참조카운트 :2 (a.y, b)
a = 2; //obj2 참조카운트 : 1 (b), obj1 참조카운트 :0

// case.3 클로저 메모리누수

function outer() {
    let privateval = ['test'];

    function getprivate() {
        return privateval;
    }

    return getprivate;
}

const private = outer();
let secretval = private();

console.log(secretval)

//secretval 다 쓰고나면 연결 끊어줘야함! 클로저변수 초기화 필요 
secretval = null;


 // 사용을 마친 secretVal 은 나중에 null 혹은 undefined와 같은 다른 값을 할당하여 클로져 공간과의 연결을 제거하여야 합니다.
// 가비지 컬렉터에게는 null, undefined를 구분하지 않습니다. 연결이 끊어져 있다는것이 더 중요합니다.

