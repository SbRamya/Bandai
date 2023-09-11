import React from "react";
import Marquee2 from "marquee-react-dwyer";
import "./marquee.css";


function Marquee(props) {

  return (
    <div>
      <Marquee2
        Size={"h1"}
        Index0={<span>{props.text}</span>}
        TimeToCross={"10000"}
        Color={props.color}
      />
    </div>
  );
}
export default Marquee;
