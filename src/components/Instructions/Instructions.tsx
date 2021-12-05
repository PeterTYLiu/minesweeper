import React from "react";
import {
  Root,
  Trigger,
  Overlay,
  Content,
  Title,
  Close,
} from "@radix-ui/react-dialog";
import { Cross2Icon, QuestionMarkIcon } from "@radix-ui/react-icons";
import "./Instructions.css";

export default function Instructions() {
  return (
    <Root
      defaultOpen={localStorage.getItem("hasSeenInstructions") ? false : true}
    >
      <Trigger>
        <QuestionMarkIcon />
      </Trigger>
      <Overlay className="modal-overlay" />
      <Content className="modal-body">
        <div className="modal-header">
          <Title className="modal-title">How to Play</Title>
          <Close className="modal-close">
            <Cross2Icon />
          </Close>
        </div>
        <hr />
        <section className="instructions-section">
          <img src="images/click.gif" alt="Sweeping a tile" />
          <p>
            <strong>Click or tap</strong> a tile to <strong>sweep</strong> it
          </p>
        </section>
        <hr />
        <section className="instructions-section">
          <img src="images/flag.gif" alt="Flagging a tile" />
          <p>
            <strong>Right-click or long-press</strong> an unswept tile to{" "}
            <strong>flag</strong> it
          </p>
        </section>
        <hr />
        <section className="instructions-section">
          <img
            onLoad={() => {
              localStorage.setItem("hasSeenInstructions", "true");
            }}
            src="images/chord.gif"
            alt="Chording a tile"
          />
          <p>
            <strong>Right-click, double-click, or long-press</strong> a swept
            tile to <strong>chord</strong> it
          </p>
        </section>
        <hr />
        <p>Controls and difficulty can be customized in the settings menu</p>
        <Close className="got-it">Got it!</Close>
      </Content>
    </Root>
  );
}
