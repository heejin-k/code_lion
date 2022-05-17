function NewFactory2(name) {
    this.name = name;
}

NewFactory2.prototype.sayYourName = function () {
    console.log(`삐리삐리 제 이름은 ${this.name} 입니다.`);
}

// const newbot1 = new NewFactory2('재현');
// newbot1.name
// newbot1.sayYourName()
// const newbot2 = new NewFactory2('브랜든');
// newbot2.sayYourName();
// newbot1.sayYourName === newbot2.sayYourName


function NewFactory3(foodname) {
    this.foodname = foodname;
}

NewFactory3.prototype.myfood = function () {
    console.log(`제가 좋아하는 음식은 ${this.foodname}입니다.`);
}