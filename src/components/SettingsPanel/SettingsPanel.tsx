import React from "react";
import { flaggingModes } from "../../types/settings";
import "./SettingsPanel.css";
import difficulties from "../../utilities/difficulties";

const versionAndDate = "v1.6.1.1 (30/11/2021)";

interface SettingsPanelProps {
  flaggingMode: flaggingModes;
  setFlaggingMode(flaggingMode: flaggingModes): any;
  setSettingsPanelVisible(visibility: boolean): any;
  setMineRatio(numOfMines: number): any;
  mineRatio: number;
  chordingEnabled: boolean;
  setChordingEnabled(chording: boolean): any;
  numOfRows: number;
  setNumOfRows(rows: number): any;
}

export default function SettingsPanel({
  flaggingMode,
  setFlaggingMode,
  setSettingsPanelVisible,
  setMineRatio,
  mineRatio,
  chordingEnabled,
  setChordingEnabled,
  numOfRows,
  setNumOfRows,
}: SettingsPanelProps) {
  const handleChangeFlaggingMode = () => {
    let newFlaggingMode = (
      flaggingMode === "off" ? "withoutMaybe" : "off"
    ) as flaggingModes;
    setFlaggingMode(newFlaggingMode);
    localStorage.setItem("flaggingMode", newFlaggingMode);
  };

  const handleChangeChordingEnabled = () => {
    if (chordingEnabled) {
      setChordingEnabled(false);
      localStorage.setItem("chordingEnabled", "false");
    }
    if (!chordingEnabled) {
      setChordingEnabled(true);
      localStorage.setItem("chordingEnabled", "true");
    }
  };

  let showPWAHint = true;
  (async () => {
    let installedRelatedApps = await (
      navigator as any
    ).getInstalledRelatedApps();
    if (await installedRelatedApps.length) showPWAHint = false;
  })();

  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100vw",
        backgroundColor: "#00000088",
        display: "grid",
        placeItems: "center",
      }}
      onClick={() => {
        setSettingsPanelVisible(false);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "white",
          maxWidth: "370px",
          width: "92%",
          borderRadius: "4px",
          padding: "24px",
        }}
        className="settings-panel"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            verticalAlign: "baseline",
          }}
        >
          <h2>Settings</h2>
          <h2
            style={{ opacity: "0.4", cursor: "pointer" }}
            onClick={() => {
              setSettingsPanelVisible(false);
            }}
          >
            ✖️
          </h2>
        </div>
        <hr />
        <div>
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
                mineRatio === difficulties.easy.mineRatio
                  ? "selected"
                  : undefined
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
                mineRatio === difficulties.hard.mineRatio
                  ? "selected"
                  : undefined
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
        </div>
        <hr />
        <label>
          <input
            type="checkbox"
            checked={flaggingMode === "off" ? false : true}
            onChange={handleChangeFlaggingMode}
          />
          <div>
            <h3>Flagging</h3>
            <p>Swipe or right-click a tile to flag it</p>
          </div>
        </label>

        <hr />
        <label>
          <input
            type="checkbox"
            checked={chordingEnabled}
            onChange={handleChangeChordingEnabled}
            disabled={flaggingMode === "off" ? true : false}
            title={
              flaggingMode === "off"
                ? "Requires flagging to be enabled"
                : undefined
            }
          />
          <div>
            <h3>Chording</h3>
            <p>
              Swipe or right-click a swept tile to sweep all adjacent tiles (if
              the right number of adjacent mines have been flagged).
            </p>
          </div>
        </label>

        <hr />
        {showPWAHint ? (
          <>
            <p>
              This is a{" "}
              <a
                href="https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/"
                target="_blank"
              >
                progressive web app
              </a>
              . For the best minesweeping experience and offline play, install
              this app on your device.
            </p>
            <hr />
          </>
        ) : null}
        <div>
          <p>
            Made with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/peter-ty-liu/" target="_blank">
              PL
            </a>
          </p>
          <p style={{ fontSize: "14px", marginTop: "14px" }}>
            Enjoying the game?{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(
                  "3AncbaTiG8qT7Lq2XhoXYGzMB4mpsGUCJ6"
                );
                alert("Bitcoin address copied to clipboard");
              }}
            >
              Buy me a cup of coffee
            </a>{" "}
            :)
          </p>
          <p style={{ fontSize: "14px", opacity: "0.5", marginTop: "14px" }}>
            {versionAndDate}
          </p>
        </div>
      </div>
    </div>
  );
}
