const btn = document.querySelector('.btn-select');
const list = document.querySelector('.list-member');

btn.addEventListener('click', () => {
    btn.classList.toggle('on');
});

list.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        btn.textContent = event.target.textContent;
        btn.classList.remove('on');
    }
})