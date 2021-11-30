import React from "react";
import { flaggingModes } from "../../types/settings";
import "./SettingsPanel.css";

const versionAndDate = "v1.5.1.5 (30/11/2021)";

interface SettingsPanelProps {
  flaggingMode: flaggingModes;
  setFlaggingMode(flaggingMode: flaggingModes): any;
  setSettingsPanelVisible(visibility: boolean): any;
  setNumOfMines(numOfMines: number): any;
  numOfMines: number;
  chordingEnabled: boolean;
  setChordingEnabled(arg: boolean): any;
}

export default function SettingsPanel({
  flaggingMode,
  setFlaggingMode,
  setSettingsPanelVisible,
  setNumOfMines,
  numOfMines,
  chordingEnabled,
  setChordingEnabled,
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
        position: "absolute",
        height: "100vh",
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
          maxWidth: "350px",
          width: "90%",
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
          <div className="difficulty-selector">
            <div
              className={numOfMines === 20 ? "selected" : undefined}
              onClick={() => {
                setNumOfMines(20);
                localStorage.setItem("numOfMines", "20");
              }}
            >
              <h3>Easy</h3>
              <p>20 mines</p>
            </div>
            <div
              className={numOfMines === 35 ? "selected" : undefined}
              onClick={() => {
                setNumOfMines(35);
                localStorage.setItem("numOfMines", "35");
              }}
            >
              <h3>Medium</h3>
              <p>35 mines</p>
            </div>
            <div
              className={numOfMines === 50 ? "selected" : undefined}
              onClick={() => {
                setNumOfMines(50);
                localStorage.setItem("numOfMines", "50");
              }}
            >
              <h3>Hard</h3>
              <p>50 mines</p>
            </div>
          </div>
          <p>
            Best time on {numOfMines === 50 && "hard"}
            {numOfMines === 35 && "medium"}
            {numOfMines === 20 && "easy"}:{" "}
            {localStorage.getItem(`10x20x${numOfMines}m`)
              ? "🏆 " + localStorage.getItem(`10x20x${numOfMines}m`) + "s"
              : "none"}
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
