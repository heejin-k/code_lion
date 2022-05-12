// parentElement.insertBefore(target, location); target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.

var span = document.createElement("span");
var sibling = document.getElementById("childElement");
var parentDiv = document.getElementById("parentElement");
parentDiv.insertBefore(span, sibling);


//input으로 입력받은 값 출력하기

const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

// myBtn.addEventListener('click', function () {
//     myP.textContent = myInput.value;
// });

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.

myInput.addEventListener('input', () => {
    myP.textContent = myInput.value;
});

// myP.innerHTML = "<strong>I'm Strong!!</strong>";
// myP.outerHTML = "<div></div>"; //잘쓰진않음

// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다.
// innerText 속성은 요소의 렌더링된 텍스트 콘텐츠를 나타냅니다. (렌더링된에 주목하세요. innerText는 "사람이 읽을 수 있는" 요소만 처리합니다.)
// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다.