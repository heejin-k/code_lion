async function get() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: "GET",
        });
    const data = await response.json();
    console.log(data);
}
get();

//
async function post() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ //문자열로 변환하지 않으면 에러발생
                "title": "오늘의 간식",
                "body": "고소미",
                "userId": 3
            })
        }
    );
    const data = await response.json();
    console.log(data);
}
post();