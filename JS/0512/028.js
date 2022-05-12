// document.createElement(target); target 요소를 생성합니다.
// document.createTextNode(target); target 텍스트를 생성합니다.
// element.appendChild(target);    target 요소를 element의 자식으로 위치합니다.
// element.removeChild(target);    element의 target 자식 요소를 제거합니다.

const myBtn = document.querySelector("button");
const myUl = document.querySelector("ul");

myBtn.addEventListener('click', function () {
    for (let i = 0; i < 5; i++) {
        const myLi = document.createElement('li');
        myUl.appendChild(myLi); //마지막 자식요소로 붙인다.
    }
})