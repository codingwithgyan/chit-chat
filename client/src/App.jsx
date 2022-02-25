import logo from './logo.svg';
import './App.css';
import './ChatApp.css';
import { CreateRoom } from './components/CreateRoom';
import { JoinRoom } from './components/JoinRoom';
import { Home } from './components/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'  element={<JoinRoom/>} />
        <Route path='/create'  element={<CreateRoom />}/>
        <Route path='/join'  element={<JoinRoom/>} />
        <Route path='/chat'  element={<Home/>} />
      </Routes>  
    </div>
  );
}

export default App;
