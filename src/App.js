import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'

import './App.css'
import Bestfor from "./components/Bestfor";
import Pacificqoutes from "./components/Pacificqoutes";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/" element= {<Home/>}/>
          <Route path="/best" element={<Bestfor/>}/>
          <Route path="/quotes" element={<Pacificqoutes/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
