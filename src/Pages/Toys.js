import React from "react";
import Countdown from "../components/countdown/countdown";
import Navbar from "../components/navbar/Navbar";
import Marquee from "../components/marquee/marquee"
const Toys = () => {
    return (
        <div>
        <Navbar/>
        <Marquee text="ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// " color="Red" />
     <Countdown saledate="2023-09-20T17:05:05" position = "Vertical"/>
    {/*  <Countdown saledate="2023-09-20T17:05:05" position = "Horizontal"/> */}
     </div>
    );
};

export default Toys;
