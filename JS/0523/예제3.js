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

async function promiseProcess() {
    const results = await Promise.all([myCake(), myCoffee(), myCookie()]);
    console.log(results);
}

promiseProcess(); 