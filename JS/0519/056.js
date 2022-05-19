const aespa = ['카리나', '지젤', '닝닝', '윈터'];

aespa.forEach((item, index) => {
    aespa[index] = item + '💗';
})

console.log(aespa);

//이렇게하면 원본값 수정되므로 원본 유지시키기 위해서 map 사용

const aespa2 = aespa.map((item) => {
    return item + '💗';
})