import React, { useState } from 'react';

const Login = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
        alert(`id : ${id}, pw : ${pw}`);
    };

    const handleLoginInput = (e) => {
        console.log("id", e.target.value);
        setId(e.target.value);
    };

    const handlepasswordInput = (e) => {
        console.log("pw", e.target.value);
        setPw(e.target.value);
    };

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디 : <input type="text" onChange={handleLoginInput} />
            </label>
            <label>
                비밀번호 :
                <input type="password" onChange={handlepasswordInput} />
            </label>
            <button type="submit">로그인</button>
        </form>
    );
};



function App() {
    return (
        <div>
            <h1>App.js test1</h1>
            <p>App.js test2</p>
            <Login />
        </div>
    );
}

export default App;