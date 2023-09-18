import React from "react";
import "./countdown.css";
import { useState, useEffect, useRef } from "react";

function Countdown(props) {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [saleDate] = useState(new Date(props.saledate));
  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    //const seconds = Math.floor((total / 1000) % 60);
    //const minutes = Math.floor((total / 1000 / 60) % 60);
    //const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / 3600000);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    startTimer(saleDate);
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(saleDate);
    }, 1000);
    Ref.current = id;
  }, []);

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);


    if (total >= 0) {

        // update the timer
        // check if less than 10 then we need to
        // add '0' at the beginning of the variable
        hours = (hours > 9 ? hours : "0" + hours);
        minutes = (minutes > 9 ? minutes : "0" + minutes);
        seconds = (seconds > 9 ? seconds : "0" + seconds);

      setHour(
        hours
      );
      setMinute(
        minutes
      );
      setSecond(
        seconds
      );
    }
  };

  return (
    <div className="coundown">
      <div className="secretHeading">Secret Store Launches in...</div>
      <div className={`timer ${props.position}`}>
        <div className="time ">{hour} <div className="timertext">HOURS</div></div>
        <div className="time ">{minute} <div className="timertext">MINUTES</div></div>
        <div className="time ">{second} <div className="timertext">SECONDS</div></div>
      </div>
    </div>
  );
}

export default Countdown;
