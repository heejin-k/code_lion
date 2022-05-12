const cont = document.querySelector(".cont");
console.log(cont.firstElementChild);  // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild);   // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling);    // 이전 형제노드를 찾습니다.
console.log(cont.children);           // 모든 직계자식을 찾습니다.
console.log(cont.parentElement);      // 부모 요소를 찾습니다.