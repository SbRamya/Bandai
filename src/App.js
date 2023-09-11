import Navbar from "./components/navbar/Navbar";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toys from "./Pages/Toys";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/Toys" element={<Toys />} />
        </Routes>
        <Carousel/>
        </BrowserRouter>
    </div>
  );
}

export default App;
