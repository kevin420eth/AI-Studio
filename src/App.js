import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<SideBar/>} />
      </Routes>
    </div>
  );
}

export default App;
