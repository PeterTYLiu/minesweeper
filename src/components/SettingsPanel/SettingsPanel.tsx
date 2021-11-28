import React from "react";
import { flaggingModes } from "../../types/settings";

interface SettingsPanelProps {
  flaggingMode: flaggingModes;
  setFlaggingMode(flaggingMode: flaggingModes): any;
  setSettingsPanelVisible(visibility: boolean): any;
}

export default function SettingsPanel({
  flaggingMode,
  setFlaggingMode,
  setSettingsPanelVisible,
}: SettingsPanelProps) {
  const handleChangeFlaggingMode = () => {
    let newFlaggingMode = (
      flaggingMode === "off" ? "withoutMaybe" : "off"
    ) as flaggingModes;
    setFlaggingMode(newFlaggingMode);
    localStorage.setItem("flaggingMode", newFlaggingMode);
  };

  let showPWAHint = true;
  (async () => {
    let installedRelatedApps = await (
      navigator as any
    ).getInstalledRelatedApps();
    if (installedRelatedApps.length) showPWAHint = false;
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
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          background: "white",
          maxWidth: "350px",
          width: "90%",
          borderRadius: "4px",
          padding: "24px",
        }}
        className="settings-panel"
      >
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
              . For the best minesweeping experience, install this app on your
              device. No tracking, completely offline.
            </p>
            <hr />
          </>
        ) : null}

        <p>
          Made with ❤️ by{" "}
          <a href="https://www.linkedin.com/in/peter-ty-liu/" target="_blank">
            PL
          </a>
          <br />
          <span style={{ fontSize: "12px" }}>v1.3.1.1 (27/11/2021)</span>
        </p>
        <div>
          <div
            className="ms-button"
            style={{ fontSize: "1.3rem" }}
            onClick={() => {
              setSettingsPanelVisible(false);
            }}
          >
            Done
          </div>
        </div>
      </div>
    </div>
  );
}
