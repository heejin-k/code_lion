// function Factory() { }
// let robot1 = new Factory();

// robot1 instanceof Factory

//생성자 함수는 대문자로 !!
// function NewFactory(name) {
//     this.name = name;
//     this.sayYourName = functon() {
//         console.log(`삐리삐리 제 이름은 ${this.name}`);
//     }
// }

// const robot2 = new NewFactory('heejin');


function MenuFactory(name) {
    this.name = name;
    this.pickMyMenu = function () {
        let saymenu = this.name[Math.floor(Math.random() * this.name.length)];
        console.log(`오늘의 추천 메뉴는 ${saymenu}입니다.`)
    }
}

const foods = ['짜장면', '뽁음밥', '해장국', '치킨'];

function FoodBot(foodNames) {
    this.menu = foodNames;
    this.sayMenu = function () {
        console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
    }
}

const foodBotMark1 = new FoodBot(foods);

// 프로토타입으로 바꿈
// function FoodBot(foodNames) {
//     this.menu = foodNames;
// }
// FoodBot.prototype.sayMenu = function () {
//     console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
// }

// const foodBotMark1 = new FoodBot(foods);