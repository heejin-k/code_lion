document.write('로또번호 추첨기');

// const lotto = [];
// while(lotto.length < 6)
//     { 
//         const num = parseInt(Math.random() * 45 + 1);
//         if(lotto.indexOf(num) == -1){
//         lotto.push(num);
//         }
//     }
// //parseInt = 정수 실수변경
// lotto.sort((a,b)=>a-b)
// for (i=0 ;i<6;i++) {
// document.write(`<div class='ball ball${i+1}'>`+lotto[i]+"</div>");
// }

const lotto = [];
while(lotto.length < 6)
    {
        const num = parseInt(Math.random() * 45 +1 );
        if(lotto.indexOf(num) == -1){
        lotto.push(num);
        }
    }
lotto.sort((a,b)=>a-b);
document.write(lotto);
