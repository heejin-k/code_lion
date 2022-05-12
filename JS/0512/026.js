
document.getElementsByTagName("li")[0]
document.getElementsByClassName("item-second")[0]
// 유사배열 : 객체인데 배열처럼 생긴 객체 
const cont = document.getElementById('container')
cont.getElementsByTagName("li")[0]
//cont 변수 지정해주고 이 안으로 제어

document.querySelector(".item-second"); //첫번째만
document.querySelectorAll(".item-second"); //전체다 유사객체로 
//css선택자 다 지원함

//이벤트 삽입
const myBtn = document.querySelector("button");

myBtn.addEventListener('click', function () {
    console.log("hello world");
})

const myBtn2 = document.querySelector(".btn2");

myBtn2.addEventListener('click', function () {

    // blue 라는 클래스의 속성 값을 지정 할 수 있습니다.
    myBtn2.classList.add("blue");

    // myBtn.classList.remove(“blue”);     클래스를 제거합니다.
    // myBtn.classList.toggle(“blue”);     클래스를 토글합니다. 없으면 넣어주고, 있으면 제거합니다.
    // myBtn.classList.contains(“blue”);   해당하는 클래스가 있는지 확인합니다.
})