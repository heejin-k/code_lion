import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const handleCountUp = (e) => {
        setCount(count + 1)
    }
    const handleCountUpTwo = (e) => {
        setCountTwo(countTwo + 1)
    }
    //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
    useEffect(() => {
        console.log('count가 감시되고 있습니다.')
    }, [count, countTwo]) // count가 변경되는 것을 감시
    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>up!</button>
            <div>{countTwo}</div>
            <button onClick={handleCountUpTwo}>up!</button>
        </>
    )
}
function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

export default App;