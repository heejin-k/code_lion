import React from "react";
import styled from "styled-components"

const ContentOne = styled.div`
margin:40px; 
`;

const ContentTwo = styled.div`
color:red;
`;

const ContentThree = styled(ContentTwo)`
border:1px solid black;
`;

const ContentFour = styled(ContentOne, ContentTwo)`
border:1px solid black;
`;

function App() {
    return (
        <div>
            <ContentOne>test2</ContentOne>
            <ContentTwo>test2</ContentTwo>
            <ContentThree>test2</ContentThree>
            <ContentFour>test2</ContentFour>

        </div>
    );
}

export default App;