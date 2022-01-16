import React, { useState, useEffect } from "react";

interface TimerProps {
  gameStatus: "preGame" | "inGame" | "wonGame" | "lostGame";
  instalose: boolean;
  loseGame(arrOfIds: number[]): any;
  currentFormat: string;
  setMessage(message: string): any;
  setNewRecordOpen(foo: boolean): any;
  setOldAndNewRecords(foo: { old: number | undefined; new: number }): any;
}

export default function Timer({
  instalose,
  loseGame,
  gameStatus,
  currentFormat,
  setMessage,
  setNewRecordOpen,
  setOldAndNewRecords,
}: TimerProps) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentRecord, setCurrentRecord] = useState<number | null>(
    localStorage.getItem(currentFormat)
      ? Number(localStorage.getItem(currentFormat))
      : null
  );

  useEffect(() => {
    if (
      gameStatus === "inGame" &&
      currentRecord &&
      instalose &&
      timeElapsed > currentRecord
    ) {
      return loseGame([]);
    }
    if (gameStatus === "inGame") {
      const timer = setInterval(() => {
        setTimeElapsed(Number((timeElapsed + 0.1).toFixed(1)));
      }, 100);

      return () => clearInterval(timer);
    }
  }, [gameStatus, timeElapsed]);

  useEffect(() => {
    if (gameStatus === "wonGame") {
      let prevRecordTime = localStorage.getItem(currentFormat);
      if (!prevRecordTime || timeElapsed < Number(prevRecordTime)) {
        localStorage.setItem(currentFormat, timeElapsed.toString());
        setOldAndNewRecords({
          old: prevRecordTime ? Number(prevRecordTime) : undefined,
          new: timeElapsed,
        });
        setNewRecordOpen(true);
        setCurrentRecord(timeElapsed);
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
