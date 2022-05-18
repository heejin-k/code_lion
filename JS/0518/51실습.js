class Sausage {
    constructor(재료1, 재료2) {
        this.재료1 = 재료1;
        this.재료2 = 재료2;
    }

    taste() {
        console.log(`소세지에서 ${this.재료1}와 ${this.재료2}맛이 난다!!!!!! 냐미`)
    }
}

const sausage = new Sausage('불고기', '치즈');

class FiresSausage extends Sausage {

    fire() {
        this.taste();
        console.log('불맛이 나기 시작합니다!!🔥');
    }

    // taste() {
    //     console.log(`소세지에서 ${this.재료1}와 ${this.재료2}맛이 난다!!!!!! 불맛도 난다!!!🔥`)
    // }
    // 부모의 메서드를 확장!
}