const parent = document.querySelector('.parent');
const btnFirst = document.querySelector('.btn');
btnFirst.addEventListener('click', (event) => {
    console.log("btn capture!");
})

window.addEventListener('click', () => {
    console.log("window capture!");
}, true); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.

document.addEventListener('click', () => {
    console.log("document capture!");
}, true);

parent.addEventListener('click', () => {
    console.log("parent capture!");
}, true);

btnFirst.addEventListener('click', (event) => {
    console.log("btn bubble!");
})

parent.addEventListener('click', () => {
    console.log("parent bubble!");
});

document.addEventListener('click', () => {
    console.log("document bubble!");
});

window.addEventListener('click', () => {
    console.log("window bubble!");
});