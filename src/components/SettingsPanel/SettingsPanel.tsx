import React from "react";
import { onOff } from "../../types/settings";
import "./SettingsPanel.css";
import difficulties from "../../utilities/difficulties";
import {
  Root,
  Trigger,
  Overlay,
  Content,
  Title,
  Close,
} from "@radix-ui/react-dialog";
import { Cross2Icon, GearIcon } from "@radix-ui/react-icons";

const versionAndDate = "v2.0.4 (6/12/2021)";

interface SettingsPanelProps {
  swipeToFlag: onOff;
  setSwipeToFlag(stf: onOff): any;
  swipeToChord: onOff;
  setSwipeToChord(stc: onOff): any;
  setMineRatio(numOfMines: number): any;
  mineRatio: number;
  numOfRows: number;
  setNumOfRows(rows: number): any;
}

export default function SettingsPanel({
  swipeToFlag,
  setSwipeToFlag,
  setMineRatio,
  mineRatio,
  swipeToChord,
  setSwipeToChord,
  numOfRows,
  setNumOfRows,
}: SettingsPanelProps) {
  let showPWAHint = true;
  (async () => {
    let installedRelatedApps = await (
      navigator as any
    ).getInstalledRelatedApps();
    if (await installedRelatedApps.length) showPWAHint = false;
  })();

  return (
    <Root>
      <Trigger>
        <GearIcon />
      </Trigger>
      <Overlay className="modal-overlay" />
      <Content className="modal-body settings-panel">
        <div className="modal-header">
          <Title className="modal-title">Settings</Title>
          <Close className="modal-close">
            <Cross2Icon />
          </Close>
        </div>
        <hr />
        <div className="selector">
          <div
            className={numOfRows === 17 ? "selected" : undefined}
            onClick={() => {
              setNumOfRows(17);
              localStorage.setItem("numOfRows", "17");
            }}
          >
            <h3>17{numOfRows === 17 && " rows"}</h3>
          </div>
          <div
            className={numOfRows === 18 ? "selected" : undefined}
            onClick={() => {
              setNumOfRows(18);
              localStorage.setItem("numOfRows", "18");
            }}
          >
            <h3>18{numOfRows === 18 && " rows"}</h3>
          </div>
          <div
            className={numOfRows === 19 ? "selected" : undefined}
            onClick={() => {
              setNumOfRows(19);
              localStorage.setItem("numOfRows", "19");
            }}
          >
            <h3>19{numOfRows === 19 && " rows"}</h3>
          </div>
          <div
            className={numOfRows === 20 ? "selected" : undefined}
            onClick={() => {
              setNumOfRows(20);
              localStorage.setItem("numOfRows", "20");
            }}
          >
            <h3>20{numOfRows === 20 && " rows"}</h3>
          </div>
        </div>
        <div className="selector">
          <div
            className={
              mineRatio === difficulties.easy.mineRatio ? "selected" : undefined
            }
            onClick={() => {
              setMineRatio(difficulties.easy.mineRatio);
              localStorage.setItem(
                "mineRatio",
                difficulties.easy.mineRatio.toString()
              );
            }}
          >
            <h3>Easy</h3>
            <p>10% mines</p>
          </div>
          <div
            className={
              mineRatio === difficulties.medium.mineRatio
                ? "selected"
                : undefined
            }
            onClick={() => {
              setMineRatio(difficulties.medium.mineRatio);
              localStorage.setItem(
                "mineRatio",
                difficulties.medium.mineRatio.toString()
              );
            }}
          >
            <h3>Medium</h3>
            <p>17% mines</p>
          </div>
          <div
            className={
              mineRatio === difficulties.hard.mineRatio ? "selected" : undefined
            }
            onClick={() => {
              setMineRatio(difficulties.hard.mineRatio);
              localStorage.setItem(
                "mineRatio",
                difficulties.hard.mineRatio.toString()
              );
            }}
          >
            <h3>Hard</h3>
            <p>25% mines</p>
          </div>
        </div>
        <p>
          Best time on {numOfRows} rows &amp;{" "}
          {mineRatio === difficulties.hard.mineRatio && "hard"}
          {mineRatio === difficulties.medium.mineRatio && "medium"}
          {mineRatio === difficulties.easy.mineRatio && "easy"}:{" "}
          {localStorage.getItem(`10x${numOfRows}x${mineRatio}m`) ? (
            <strong>
              {localStorage.getItem(`10x${numOfRows}x${mineRatio}m`) + "s"}
            </strong>
          ) : (
            "none"
          )}
        </p>
        <hr />
        <label>
          <input
            type="checkbox"
            checked={swipeToFlag === "off" ? false : true}
            onChange={() => {
              if (swipeToFlag === "off") {
                setSwipeToFlag("on");
                localStorage.setItem("swipeToFlag", "on");
              } else {
                setSwipeToFlag("off");
                localStorage.setItem("swipeToFlag", "off");
              }
            }}
          />
          <div>
            <h3>Swipe to Flag</h3>
          </div>
        </label>

        <label>
          <input
            type="checkbox"
            checked={swipeToChord === "off" ? false : true}
            onChange={() => {
              if (swipeToChord === "off") {
                setSwipeToChord("on");
                localStorage.setItem("swipeToChord", "on");
              } else {
                setSwipeToChord("off");
                localStorage.setItem("swipeToChord", "off");
              }
            }}
          />

          <div>
            <h3>Swipe to Chord</h3>
          </div>
        </label>
        {showPWAHint ? (
          <p>
            Swipe to flag &amp; chord works best when you have installed this{" "}
            web app on your device. This will also allow you to play offline.
          </p>
        ) : null}
        <hr />

        <div>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/peter-ty-liu/"
              target="_blank"
              rel="noreferrer"
            >
              PL
            </a>
          </p>
          <p style={{ fontSize: "14px", marginTop: "14px" }}>
            Enjoying the game?{" "}
            <span
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
              onClick={async (e) => {
                e.preventDefault();
                navigator.clipboard
                  .writeText("3AncbaTiG8qT7Lq2XhoXYGzMB4mpsGUCJ6")
                  .then(() => {
                    alert("Bitcoin address copied to clipboard");
                  });
              }}
            >
              Buy me a cup of coffee
            </span>{" "}
            :)
          </p>
          <p style={{ fontSize: "14px", opacity: "0.5", marginTop: "14px" }}>
            {versionAndDate}
          </p>
        </div>
      </Content>
    </Root>
  );
}
