import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            {/* 라우트를 감싸줍니다. */}
            <Route path="/" exact component={Index} />
            <Route path="/one" exact component={One} />
            <Route path="/one/extend" exact component={OneExtend} />
            <Route path="/two" component={Two} />
            <Route path="/three" component={Three} />
        </BrowserRouter>
    );
}
//exact는 정확히 일치하는 것만 출력
function Index() {
    return <h1>hello world0</h1>
}

function One() {
    return <h1>hello world1</h1>
}

function OneExtend() {
    return <h1>hello one Extend world</h1>
}

function Two() {
    return <h1>hello world2</h1>
}

function Three() {
    return <h1>hello world3</h1>
}

export default App;