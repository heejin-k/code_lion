import styled from "styled-components";

const AA = styled.div`
  margin: 40px;
`;

const BB = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const UnicornAfter = styled.div`
  &:after {
  content: " ??";
  }` // 가상요소

function App() {
    return (
        <AA>
            <BB>hello world</BB>
            <UnicornAfter>hello</UnicornAfter>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci beatae aperiam consectetur omnis debitis ex totam, hic dolores ullam repellat delectus culpa, corporis accusamus fugiat ipsa dolorem cum maiores.</p>
        </AA>
    );
}

export default App;