import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Showcase from './components/Showcase/Showcase';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Showcase />} />
        <Route path='/:artStyle' element={<Showcase />} />
      </Routes>
    </div>
  );
}

export default App;
