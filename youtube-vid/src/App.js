import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import Home1 from './Components/Home1';
import History from './Components/History';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home1' element={<Home1/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
    </div>
  );
}

export default App;
