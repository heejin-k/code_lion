function sayHello() {
    return new Promise((resolve, reject) => {
        const hello = "Hello Hello";
        resolve(hello);
    });
}

// sayHello().then((resolvedData) => {
//     console.log(resolvedData);
// })

// function sayHello2() {
//     return new Promise((resolve, reject) => {
//         reject(new Error());
//     });
// }

// sayHello2().then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
// })
//     .then((resolvedData) => {
//         console.log(resolvedData);
//         return resolvedData;
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//async, await
async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();