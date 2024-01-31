import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'

import './App.css'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/" element= {<Home/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
