//프로토타입
function Robot(name) {
    this.name = name;
}

Robot.prototype.sayYourName = function () {
    console.log(`삐리삐리 ${this.name}`);
}

const bot1 = new Robot('희진');

//클래스
class RobotClass {
    constructor(name) {
        this.name = name;

    }

    sayYourName() {
        console.log(`삐리삐리 ${this.name}`);
    }
}

const botClass1 = new RobotClass('브랜든');

//프로토타입
function NewFactory3(foodname) {
    this.foodname = foodname;
}

NewFactory3.prototype.myfood = function () {
    console.log(`제가 좋아하는 음식은 ${this.foodname}입니다.`);
}

//클래스로 바꾸기
class Myfoodlist {
    constructor(foodname) {
        this.foodname = foodname;
    }
    myfood() {
        console.log(`제가 좋아하는 음식은 ${this.foodname}입니다.`);
    }

}

// 프로토타입
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

//클래스로 변경하기
class Me {
    constructor(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    canWalk() {
        console.log(`${this.name}이가 걷는다.`);
    }

    teaching(student) {
        student.levelUp();
    }
}

class Student {
    constructor(level) {
        this.level = level;
    }
    levelUp() {
        this.level++;
    }
}

const me = new Me('재현', '제주', '010');
const student = new Student(1);