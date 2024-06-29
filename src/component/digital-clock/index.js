import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  const timeSetter = () => {
    setTime(new Date());
  }

  useEffect(() => {
    const intervalId = setInterval(timeSetter, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Digital Clock</h1>
      {time.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })}      
      <br/>
      {time.getHours().toString().padStart(2, "0")}:
      {time.getMinutes().toString().padStart(2, "0")}:
      {time.getSeconds().toString().padStart(2, "0")}      
    </div>
  );
};

export default DigitalClock;
