const parent = document.querySelector('.parent');
parent.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
})