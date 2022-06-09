import './App.css'
import Homepage from './Pages/homepage/homepage';
import Login from './Pages/login/Login';

function App() {
  const user = {
    login: true,
    id: 'heejin@gmail.com',
    nickname: '히징'
  }

  return (
    <div>
      {user.login ? <Homepage id={user.id} nickname={user.nickname} /> : <Login />}
    </div>
  );
}

export default App;