var outer = function () {
    var a = 1;

    var inner = function () {
        var b = 6;
        var c = 7;
        a = a + b + c

        console.log(a);
    }

    return inner;
}

outher();

var NewInner = outer();
NewInner();

//outer는 return을 만나 사라지고 inner는 outer의 return이므로 newinner에 저장됨, 그러고 newinner를 실행하면 inner가 빠져나와 단독실행하는게 됨 그런데 a가 outer에 있음 정상작동할까? -> 정상작동함 종료후에도 outer에 접근가능 