memo = []
memo.push('메모1')
memo.push('메모2')
localStorage.setItem('메모', 'memo');
console.log(localStorage.getItem('메모'));
console.log(localStorage.getItem('메모').split(','))

localStorage.setItem('one', '하나');
localStorage.setItem('two', '둘');
console.log(localStorage.getItem('one'));
console.log(localStorage.getItem('two'));
