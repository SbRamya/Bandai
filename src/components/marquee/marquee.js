import React from "react";
import "./marquee.css";


function Marquee(props) {

  return (
    <div className="marquee">
    <p>{props.text}</p>
    </div>
  );
}
export default Marquee;
