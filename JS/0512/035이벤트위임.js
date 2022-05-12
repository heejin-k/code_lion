const parent = document.querySelector('.parent');
parent.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.nodeName === "BUTTON") {
        event.target.innerText = "버튼4";
    }
})
