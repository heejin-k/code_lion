import React, { useState } from 'react';

function Resume(props) {
    const [like, setLike] = useState(0);
    let heart = like % 2 === 1 ? '💗' : ''
    // const likeState = useState(0);
    // const like = likeState[0];
    // const setLike = likeState[1]; 한줄로 줄인것 

    function handleClickLike() {
        setLike(like + 1);
    }

    return (
        <div>
            <button onClick={handleClickLike}>like : {like}</button>
            <span>{heart ? heart : ''}</span>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>App.js test1</h1>
            <p>App.js test2</p>
            <Resume />
        </div>
    );
}

export default App;