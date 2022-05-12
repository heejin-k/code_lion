const color = document.querySelector('.color')

const redButton = document.querySelector('button:nth-child(1)')
const blueButton = document.querySelector('button:nth-child(2)')
const yellowButton = document.querySelector('button:nth-child(3)')


// redButton.addEventListener('click', function () {
//     color.classList.remove('red', 'yellow', 'blue')
//     color.classList.toggle("red")
// })

// blueButton.addEventListener('click', function () {
//     color.classList.remove('red', 'yellow', 'blue')
//     color.classList.toggle("blue")
// })

// yellowButton.addEventListener('click', function () {
//     color.classList.remove('red', 'yellow', 'blue')
//     color.classList.toggle("yellow")
// })

const btnArr = [redButton, blueButton, yellowButton]

btnArr.forEach((item) => {
    item.addEventListener('click', () => {
        color.classList.remove('red', 'blue', 'yellow');
        if (item.className == 'btn-red') {
            color.classList.add('red')
        } else if (item.className == 'btn-yellow') {
            color.classList.add('yellow')
        } else {
            color.classList.add('blue')
        }
    })
})

/* for (let i = 0; i<btnArr.length; i++){
    btnArr[i].addEventListener 나머지 forEacd와 같음 
}
*/