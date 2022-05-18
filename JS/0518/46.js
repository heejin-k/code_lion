var func1 = function () {
    var a = 1;
    var b = 2;
    console.log(a + b);
}

var a = 20;
func1();

var func = function () {
    var c = 1;
    var d = 2;

    var func2 = function () {
        var d = 5;
        var e = 6;
        c = c + d + e;
        console.log(c)
    }
    func2();
}

func();

function test() {
    var var1 = 'hello'
    var var2 = 'hi'
}

test()

console.log(var1, var2);