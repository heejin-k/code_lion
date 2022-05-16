const btn = document.querySelector('.btn-select');
const list = document.querySelector('.list-member');

// html없이 JS로 리스트추가하기
const arrLang = ['Python', 'Java', 'JavaScript', 'C#', 'C/C++'];

arrLang.forEach((item) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    //버튼에 타입넣기 <button type = "button"></button>
    btn.textContent = item;
    li.appendChild(btn);
    list.appendChild(li);
});

btn.addEventListener('click', () => {
    btn.classList.toggle('on');
});

list.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        btn.textContent = event.target.textContent;
        btn.classList.remove('on');
    }
})