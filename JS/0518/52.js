class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    // getPassword() {
    //     return this.#password
    // }

    // setPassword(pw) {
    //     this.#password = pw;
    // }

    get password() {
        return this.#password
    }

    set password(pw) {
        this.#password = pw;
    } //편리하긴한데 넘 쉽게 접근가능해서 비공개 프로퍼티접근하는데 쓰기엔 별로임
}

const bot = new Robot('heejin', 1234);

