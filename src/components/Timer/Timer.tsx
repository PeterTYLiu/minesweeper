import React, { useState, useEffect } from "react";

interface TimerProps {
  gameStatus: "preGame" | "inGame" | "wonGame" | "lostGame";
  currentFormat: string;
  setMessage(message: string): any;
}

export default function Timer({
  gameStatus,
  currentFormat,
  setMessage,
}: TimerProps) {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (gameStatus === "inGame") {
      const timer = setInterval(() => {
        setTimeElapsed(Number((timeElapsed + 0.1).toFixed(1)));
      }, 100);

      return () => clearInterval(timer);
    }
  }, [gameStatus, timeElapsed]);

  useEffect(() => {
    console.log(`The game status is ${gameStatus}`);

    if (gameStatus === "wonGame") {
      let prevRecordTime = localStorage.getItem(currentFormat);
      if (!prevRecordTime || timeElapsed < Number(prevRecordTime)) {
        localStorage.setItem(currentFormat, timeElapsed.toString());
        setMessage(`🎉 New record!`);
        console.log(`New record: ${timeElapsed}s`);
      }
    }
    if (gameStatus === "preGame") {
      setTimeElapsed(0);
    }
  }, [gameStatus]);

  return (
    <>
      {timeElapsed.toString().includes(".")
        ? timeElapsed
        : timeElapsed.toString() + ".0"}
      s
    </>
  );
}
