class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리삐리${this.name}`)
    }
}

class BabyRobot extends Robot {
    constructor(name) {
        super(name) //부모안에 있는 생성자 불러옴
        this.ownName = '아이크';
    } //constructor없어도 부모한테 상속받음

    sayBabyName() {
        this.sayYourName(); //상속받으면 부모 메소드도 바로 쓰기 가능~!
        console.log('suceeding you, father!');
    }
}

const baby = new BabyRobot('재현');