import React, { useState, useEffect } from "react";

interface TimerProps {
  gameStatus: "preGame" | "inGame" | "wonGame" | "lostGame";
  currentFormat: string;
  setMessage(message: string): any;
  setNewRecordOpen(foo: boolean): any;
  setOldAndNewRecords(foo: { old: number | undefined; new: number }): any;
}

export default function Timer({
  gameStatus,
  currentFormat,
  setMessage,
  setNewRecordOpen,
  setOldAndNewRecords,
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
        setOldAndNewRecords({
          old: prevRecordTime ? Number(prevRecordTime) : undefined,
          new: timeElapsed,
        });
        setNewRecordOpen(true);
      }
    }
    if (gameStatus === "preGame") {
      setTimeElapsed(0);
    }
  }, [gameStatus]);

  return (
    <>
      🕒{" "}
      {timeElapsed.toString().includes(".")
        ? timeElapsed
        : timeElapsed.toString() + ".0"}
      s
    </>
  );
}
