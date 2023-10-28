import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Homepage1 from './Components/Homepage1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/homepage1' element={<Homepage1/>}/>
      </Routes>
    </div>
  );
}

export default App;
