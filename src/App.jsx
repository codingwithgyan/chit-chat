import logo from './logo.svg';
import './App.css';
import './ChatApp.css';
import { CreateRoom } from './components/CreateRoom';
import { JoinRoom } from './components/JoinRoom';

function App() {
  return (
    <div className="App">
        <CreateRoom/>
        {/* <JoinRoom/> */}
    </div>
  );
}

export default App;
