// const me = {
//     name: '한재현',
//     address: '제주도 제주시 인다 1길',
//     phoneNum: '010-8001-6536',
//     canWalk: function () {
//         console.log('재현이가 걷는다.');
//     },
//     teaching: function (student) {
//         student.levelUp();
//     }
// }


function Me(name, address, phoneNum) {
    this.name = name;
    this.address = address;
    this.phoneNum = phoneNum;
}

Me.prototype.canWalk = function () {
    console.log('재현이가 걷는다.');
}

Me.prototype.teaching = function (student) {
    student.levelUp();
}

function Student(level) {
    this.level = level;
}

Student.prototype.levelUp = function () {
    this.level++;
}