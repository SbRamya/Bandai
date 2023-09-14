//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import React from "react";
import "./App.css";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
//import Toys from "./Pages/Toys";
import Carousel from "./components/carousel/carousel";
import Marquee from "./components/marquee/marquee"

function App() {
  return (
    <div id="App">
      <BrowserRouter>
      <Navbar/>
      <Marquee text="ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// " color="Red" />
      <Carousel/>
      {/*<Routes>
          <Route path="/Toys" element={<Toys />} />
        </Routes>

  <Carousel/>*/}
        </BrowserRouter>
        

    </div>
   
  );
  
}

export default App;
