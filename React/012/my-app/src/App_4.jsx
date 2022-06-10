import styled from "styled-components";

const ContentSection = styled.div`
  margin: 40px;
`;

const ContentTitle = styled.h2`
color : ${(props) => (props.name === 'hello' ? 'red' : 'black')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const UnicornAfter = styled.div`
  &:after {
  content: " ??";
  }`

function App() {
    return (
        <ContentSection>
            <ContentTitle name='hello'>hello world</ContentTitle>
            <UnicornAfter>hello</UnicornAfter>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci beatae aperiam consectetur omnis debitis ex totam, hic dolores ullam repellat delectus culpa, corporis accusamus fugiat ipsa dolorem cum maiores.</p>
        </ContentSection>
    );
}

export default App;