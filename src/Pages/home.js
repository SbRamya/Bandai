import React from "react";
import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/carousel";
import Marquee from "../components/marquee/marquee"
const Home = () => {
    return (
        <div>
        <Navbar/>
        <Marquee text="ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// ban presto now available from premium bandai ///////// " color="Red" />
        <Carousel/>
        </div>
    );
};

export default Home;