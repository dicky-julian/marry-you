import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const CountdownTimer = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>It's Happening!</h1>;
    } else {
        return (
        <>
          {boxTimer(zeroPad(days), "days")}
          {boxTimer(zeroPad(hours), "hours")}
          {boxTimer(zeroPad(minutes), "minutes")}
          {boxTimer(zeroPad(seconds), "seconds")}
        </>
      );
    }
  };

  const boxTimer = (time, text) => {
    const checkPlural = (time) => {
        return time > 1 ? text : text.slice(0, -1);
    };

    return (
      <div className="time-box">
        <div className="time-box-number">{time}</div>
        <div className="time-box-text">{checkPlural(time)}</div>
      </div>
    );
  };

  return (
    <div className="countdown-timer">
      <Countdown date={1648256400000} renderer={renderer} daysInHours={true} />
    </div>
  );
};

export default CountdownTimer;
