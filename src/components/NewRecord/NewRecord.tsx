import React from "react";
import "./NewRecord.css";
import difficulties from "../../utilities/difficulties";
import { Root, Overlay, Content, Title, Close } from "@radix-ui/react-dialog";
import Confetti from "react-confetti";

interface NewRecordProps {
  newRecordOpen: boolean;
  setNewRecordOpen(foo: boolean): any;
  numOfRows: number;
  mineRatio: number;
  oldAndNewRecords: { old: number | undefined; new: number };
}

const exclamations = [
  "Wow!",
  "Amazing!",
  "Incredible!",
  "Incroyable!",
  "Superb!",
  "Unbelievable!",
  "Tally-ho!",
  "Bully!",
  "Excellent!",
  "Great!",
  "Huzzah!",
  "Hooray!",
  "Yahoo!",
];

export default function NewRecord({
  newRecordOpen,
  setNewRecordOpen,
  numOfRows,
  mineRatio,
  oldAndNewRecords,
}: NewRecordProps) {
  return (
    <Root open={newRecordOpen}>
      <Overlay className="modal-overlay" />

      <Content className="modal-body">
        <Confetti recycle={false} style={{ width: "100%" }} />
        <Title className="modal-title" style={{ textAlign: "center" }}>
          New record!
        </Title>
        <h1 style={{ fontWeight: "normal", textAlign: "center" }}>
          🏆 <strong>{oldAndNewRecords.new}s</strong>
        </h1>
        <p style={{ textAlign: "center" }}>
          Previous record for {numOfRows} rows &amp;{" "}
          {
            Object.values(difficulties).find(
              (difficulty) => difficulty.mineRatio === mineRatio
            )?.name
          }
          : {oldAndNewRecords.old ? oldAndNewRecords.old + "s" : "none"}
        </p>
        <Close
          className="close-new-record"
          onClick={() => setNewRecordOpen(false)}
        >
          {exclamations[Math.floor(Math.random() * exclamations.length)]}
        </Close>
      </Content>
    </Root>
  );
}
