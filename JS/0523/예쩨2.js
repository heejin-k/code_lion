function cook(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const myCake = async () => {
    await cook(1000);
    return '케이크';
};

const myCoffee = async () => {
    await cook(500);
    return '커피';
};
const myCookie = async () => {
    await cook(5000);
    return '쿠키';
};

async function asyncProcess() {
    const cake = await myCake();
    console.log(cake);
    const coffee = await myCoffee();
    console.log(coffee);
    const cookie = await myCookie();
    console.log(cookie);
}

asyncProcess();
console.log('hello world');