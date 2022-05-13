const foo = () => {
    console.log("arrow function");
};

// function foo() {
//     console.log("arrow function");
// };

foo();

const foo2 = (x) => {
    return x;
};
//매개변수 하나거나 바로 리턴하면 생략가능
// const foo = x => x;

console.log(foo2("arrow"));
