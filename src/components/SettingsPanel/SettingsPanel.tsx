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
          <h3>Flagging</h3>
        </label>
        <hr />
        <div>
          <h4>New in version 1.3.1:</h4>
          <ul>
            <li>Toggle flaggability</li>
            <li>🐛 fixes</li>
          </ul>
          <br />
          <h4>Coming soon:</h4>
          <ul>
            <li>Chording</li>
            <li>Adjustable difficulty</li>
            <li>"Maybe" state for flagging</li>
          </ul>
          <br />
          <p>
            Made with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/peter-ty-liu/" target="_blank">
              PL
            </a>
          </p>
        </div>
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
