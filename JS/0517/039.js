
const txts = document.querySelectorAll('p');
const btns = document.querySelectorAll('button');

for (let i = 0; i < txts.length; i++) {
    txts[i].addEventListener('click', (event) => {
        alert(event.target.textContent.slice(0, -2));
    })
}
//for each문 ie에서 사용가능하게,,
// Array.prototype.forEach.call(txts, (item) => {
//     item.addEventListener('click', (event) => {
//         alert(event.target.textContent.slice(0, -2));
//     })
// })

for (const item of btns) {
    item.addEventListener('click', (event) => {
        let result = confirm('삭제하시겠습니까?')
        event.stopPropagation();
        if (result) {
            item.parentElement.remove();
        }
    })
}

    // const today = document.querySelector('.today_dinner');
    // const icecream = document.querySelector('.icecream');
    // const tomorrow = document.querySelector('.tomorrow_morning');
    // const del = document.querySelector('today .button');

    // today.addEventListener('click', () => {
    //     alert(today.textContent);
    //     event.preventDefault();
    // }, true)

    // del.addEventListener('click', (event) => {
    //     const value = confirm("삭제 하실건가요?");
    //     event.preventDefault();
    //     if (value == 1) {
    //         today.remove
    //         alert('삭제되었습니다.');
    //     } else {
    //         alert('삭제가 취소되었습니다.')
    //     }
    // })

    // icecream.addEventListener('click', () => {
    //     alert(icecream.textContent);
    // })
    // tomorrow.addEventListener('click', () => {
    //     alert(tomorrow.textContent);
    // })