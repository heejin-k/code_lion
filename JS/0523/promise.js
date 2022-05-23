let p = new Promise(function (resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});

// 성공했을때 then, 실패했을때 catch


