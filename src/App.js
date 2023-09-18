import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Toys from "./Pages/Toys";
import Home from "./Pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Toys" element={<Toys />} />
      </Routes>
      </BrowserRouter>
    </div>
   
  );
  
}

export default App;
