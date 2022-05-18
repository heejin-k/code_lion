//모듈패턴이라고 합니다
function Person() {
    let age = 15;
    return {
        getAge: function () { return age },
        setAge: function (data) { age = data }
    }
}

const person = Person();
console.log(person.getAge());
console.log(person.age);
person.setAge(40);
console.log(person.getAge());


//사용자 정의 타입 패턴
function PersonType() {
    this.age = 35;
}

PersonType.prototype.getAge = function () {
    return this.age
}

const person2 = new PersonType();
console.log(person2.getAge());


//모듈 + 사용자 정의 타입 패턴, 비공개 변수를 포함한 타입을 생성할때 사용 
function PersonType2() {
    let age = 25;

    function innerPersonType() { }

    innerPersonType.prototype.getAge = function () {
        return age;
    }

    return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());


//
const PersonType3 = {
    function() {
        let age = 15;

        function innerPersonType() { }

        innerPersonType.prototype.getAge = function () {
            return age;
        }
        return innerPersonType;
    }
}();

const personWithSecret = new PersonType3();
console.log(personWithSecret.getAge());
