
const div = document.querySelector('.target');
let pos = 0;
let keys = {};

function move() {
    keys[event.key] = true;
    console.log(keys);
}
function stop() {
    keys[event.key] = false;
    console.log(keys);
}

document.addEventListener('keydown', move);
document.addEventListener('keyup', stop);

function play() {
    if (keys.ArrowRight) {
        pos += 5;
        div.style.transform = `translatex(${pos}px)`
    }
    if (keys.ArrowLeft) {
        pos -= 5;
        div.style.transform = `translatex(${pos}px)`
    }
    window.requestAnimationFrame(play);
}

window.requestAnimationFrame(play);


        // document.addEventListener('keydown', function (event) {
        //     if (event.key === 'ArrowRight') {
        //         pos += 5;
        //         div.style.transform = `translatex(${pos}px)`
        //     }
        //     if (event.key === 'ArrowLeft') {
        //         pos -= 5;
        //         div.style.transform = `translatex(${pos}px)`
        //     }

        // })