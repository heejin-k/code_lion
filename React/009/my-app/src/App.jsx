import './App.css'

function App() {
  //주석입니다.
  const name = 'heejin'
  function age() {
    return 10
  }

  const 값 = true
  const somestyle = { backgroundColor: "black", color: "white" }

  return (
    <div>
      {/* 안녕하세여*/}
      <h1 className="one">hello world</h1>
      <h1 style={{ backgroundColor: "red", color: "white" }}>hello world</h1>
      <h1>hello {name} {age()}</h1>
      <p>{값 ? 'one' : 'two'}</p>
      <h1 style={somestyle}>hello world</h1>
    </div>
  );
}

export default App;