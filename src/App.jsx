import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Add from './pages/Add';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
