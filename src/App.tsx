import { useState, useEffect } from "react";
import Tile from "./components/Tile";
import Timer from "./components/Timer";
import SettingsPanel from "./components/SettingsPanel";
import "./App.css";
// Typescript
import ITile from "./types/tile";
import { gameStatuses } from "./types/gameStatuses";
import { flaggingModes } from "./types/settings";
// UTility functions
import floodFill from "./utilities/floodFill";

function App() {
  //defaults
  let numOfRows = 20;
  let numOfColumns = 10;
  let defaultNumOfMines = 35;
  // Settings
  const [settingsPanelVisible, setSettingsPanelVisible] = useState(false);
  const [numOfMines, setNumOfMines] = useState(
    localStorage.getItem("numOfMines")
      ? Number(localStorage.getItem("numOfMines"))
      : defaultNumOfMines
  );
  const [flaggingMode, setFlaggingMode] = useState<flaggingModes>(
    (localStorage.getItem("flaggingMode") as flaggingModes) || "withoutMaybe"
  );
  const [chordingEnabled, setChordingEnabled] = useState(
    localStorage.getItem("chordingEnabled")
      ? (JSON.parse(
          localStorage.getItem("chordingEnabled") as string
        ) as boolean)
      : true
  );

  // If no flagging, disable chording

  useEffect(() => {
    if (flaggingMode === "off") setChordingEnabled(false);
  }, [flaggingMode]);

  // Utility functions

  function generateNewBoardState(
    columns = numOfColumns,
    rows = numOfRows,
    mines = numOfMines
  ) {
    let boardState: ITile[] = [];
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= columns; c++) {
        boardState.push({
          c,
          r,
          isMine: false,
          id: c + (r - 1) * columns,
          swept: false,
          flagStatus: "unflagged",
          minesAround: 0,
        });
      }
    }
    let minesToPlace = mines;
    while (minesToPlace > 0) {
      let index = Math.floor(Math.random() * rows * columns);
      if (!boardState[index].isMine) {
        boardState[index].isMine = true;
        minesToPlace--;
      }
    }
    boardState.forEach((boardStateTile) => {
      let { r, c } = boardStateTile;
      boardStateTile.minesAround = [
        boardState.find((tile) => tile.r === r && tile.c === c + 1),
        boardState.find((tile) => tile.r === r && tile.c === c - 1),
        boardState.find((tile) => tile.r === r + 1 && tile.c === c),
        boardState.find((tile) => tile.r === r - 1 && tile.c === c),
        boardState.find((tile) => tile.r === r + 1 && tile.c === c + 1),
        boardState.find((tile) => tile.r === r - 1 && tile.c === c - 1),
        boardState.find((tile) => tile.r === r + 1 && tile.c === c - 1),
        boardState.find((tile) => tile.r === r - 1 && tile.c === c + 1),
      ].filter((tileAround) => tileAround?.isMine).length;
    });

    return boardState;
  }

  // Game state
  const defaultBoardState = generateNewBoardState();

  const [gameStatus, setGameStatus] = useState<gameStatuses>("preGame");
  const [board, setBoard] = useState<ITile[]>(defaultBoardState);
  const [message, setMessage] = useState(
    localStorage.getItem(`${numOfColumns}x${numOfRows}x${numOfMines}m`)
      ? `🏆 ${
          localStorage.getItem(`${numOfColumns}x${numOfRows}x${numOfMines}m`) +
          "s"
        }`
      : "🏆 none"
  );

  useEffect(() => {
    setMessage(
      localStorage.getItem(`${numOfColumns}x${numOfRows}x${numOfMines}m`)
        ? `🏆 ${
            localStorage.getItem(
              `${numOfColumns}x${numOfRows}x${numOfMines}m`
            ) + "s"
          }`
        : "🏆 none"
    );
  }, [numOfMines]);

  // Win the game when all the tiles have been cleared

  useEffect(() => {
    if (
      gameStatus === "inGame" &&
      board.filter((tile) => tile.swept).length ===
        numOfRows * numOfColumns - numOfMines
    )
      winGame();
  }, [board]);

  // Game functions

  const startGame = (tileId: number) => {
    let newBoardState = generateNewBoardState();
    while (
      newBoardState[tileId - 1].isMine ||
      newBoardState[tileId - 1].minesAround !== 0
    ) {
      newBoardState = generateNewBoardState();
    }

    newBoardState[tileId - 1].swept = true;

    floodFill(newBoardState[tileId - 1], newBoardState);
    setBoard(newBoardState);
    setGameStatus("inGame");
  };

  const winGame = () => {
    setGameStatus("wonGame");
  };

  function loseGame(arrOfIds: number[]) {
    setGameStatus("lostGame");
    arrOfIds.forEach((id) => {
      document
        .querySelector(`.id-${id}`)
        ?.setAttribute("style", "background: red");
    });
    let newBoardState = [...board];
    for (let t = 0; t < newBoardState.length; t++) {
      if (newBoardState[t].isMine) newBoardState[t].swept = true;
    }
    setBoard(newBoardState);
  }

  const prepNewGame = () => {
    setBoard(defaultBoardState);
    setGameStatus("preGame");
    setMessage(
      localStorage.getItem(`${numOfColumns}x${numOfRows}x${numOfMines}m`)
        ? `🏆 ${
            localStorage.getItem(
              `${numOfColumns}x${numOfRows}x${numOfMines}m`
            ) + "s"
          }`
        : "🏆 none"
    );
  };

  const chord = (triggerTile: ITile, boardState: ITile[]) => {
    let newBoardState = [...boardState];
    const { r, c, minesAround } = triggerTile;

    let numOfAdjacentFlaggedTiles = [
      newBoardState.find((tile) => tile.r === r && tile.c === c + 1),
      newBoardState.find((tile) => tile.r === r && tile.c === c - 1),
      newBoardState.find((tile) => tile.r === r + 1 && tile.c === c),
      newBoardState.find((tile) => tile.r === r - 1 && tile.c === c),
      newBoardState.find((tile) => tile.r === r + 1 && tile.c === c + 1),
      newBoardState.find((tile) => tile.r === r - 1 && tile.c === c - 1),
      newBoardState.find((tile) => tile.r === r + 1 && tile.c === c - 1),
      newBoardState.find((tile) => tile.r === r - 1 && tile.c === c + 1),
    ].filter((tile) => tile?.flagStatus === "flagged").length;

    if (minesAround !== numOfAdjacentFlaggedTiles) return;

    // Chording is a go-go!

    let tilesToSweep = [
      newBoardState.find((tile) => tile.r === r && tile.c === c + 1),
      newBoardState.find((tile) => tile.r === r && tile.c === c - 1),
      newBoardState.find((tile) => tile.r === r + 1 && tile.c === c),
      newBoardState.find((tile) => tile.r === r - 1 && tile.c === c),
      newBoardState.find((tile) => tile.r === r + 1 && tile.c === c + 1),
      newBoardState.find((tile) => tile.r === r - 1 && tile.c === c - 1),
      newBoardState.find((tile) => tile.r === r + 1 && tile.c === c - 1),
      newBoardState.find((tile) => tile.r === r - 1 && tile.c === c + 1),
    ].filter((tile) => !tile?.swept && tile?.flagStatus === "unflagged");

    let minesSwept = tilesToSweep
      .filter((tile) => tile?.isMine)
      .map((tile) => tile?.id);

    if (minesSwept.length) return loseGame(minesSwept as number[]);

    tilesToSweep.forEach((tile) => {
      if (tile) {
        tile.swept = true;
      }
      if (tile?.minesAround === 0) {
        floodFill(tile, newBoardState);
      }
    });

    setBoard(newBoardState);
  };

  // Board UI

  const PreGameTiles = defaultBoardState.map((tile, i) => {
    if (tile.c === 1) {
      return (
        <div
          key={`pg-${i}`}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          {board.map((innerTile) => {
            if (innerTile.r === i / numOfColumns + 1) {
              return (
                <div
                  className="tile pre-game"
                  onClick={() => {
                    startGame(innerTile.id);
                  }}
                  key={`pg-r${innerTile.r}c${innerTile.c}`}
                />
              );
            }
            return null;
          })}
        </div>
      );
    }
    return null;
  });

  const Tiles = board.map((tile, i) => {
    if (tile.c === 1) {
      return (
        <div key={i}>
          {board.map((innerTile) => {
            if (innerTile.r === i / numOfColumns + 1) {
              return (
                <Tile
                  tile={innerTile}
                  chord={chord}
                  key={`r${innerTile.r}c${innerTile.c}`}
                  boardState={board}
                  setBoardState={setBoard}
                  floodFill={floodFill}
                  loseGame={loseGame}
                  gameStatus={gameStatus}
                  flaggingMode={flaggingMode}
                  chordingEnabled={chordingEnabled}
                />
              );
            }
            return null;
          })}
        </div>
      );
    }
    return null;
  });

  return (
    <div className="App">
      {settingsPanelVisible && (
        <SettingsPanel
          flaggingMode={flaggingMode}
          setFlaggingMode={setFlaggingMode}
          setSettingsPanelVisible={setSettingsPanelVisible}
          setNumOfMines={setNumOfMines}
          numOfMines={numOfMines}
          chordingEnabled={chordingEnabled}
          setChordingEnabled={setChordingEnabled}
        />
      )}
      <div className="container">
        <div className="controls">
          <span>{message}</span>

          {gameStatus === "wonGame" && (
            <div className="ms-button" onClick={prepNewGame}>
              {"😎"}
            </div>
          )}
          {gameStatus === "lostGame" && (
            <div className="ms-button" onClick={prepNewGame}>
              {"😬"}
            </div>
          )}
          {gameStatus === "inGame" && (
            <span style={{ width: "auto" }}>
              💣{" "}
              {numOfMines -
                board.filter((tile) => tile.flagStatus == "flagged").length}
            </span>
          )}
          {gameStatus === "preGame" && (
            <div
              className="ms-button"
              onClick={() => {
                setSettingsPanelVisible(true);
              }}
            >
              {"⚙️"}
            </div>
          )}

          <span style={{ textAlign: "right" }}>
            <Timer
              gameStatus={gameStatus}
              setMessage={setMessage}
              currentFormat={`${numOfColumns}x${numOfRows}x${numOfMines}m`}
            />
          </span>
        </div>
        <div
          className={`board ${
            (gameStatus === "lostGame" || gameStatus === "wonGame") &&
            "postGame"
          }`}
        >
          {gameStatus === "preGame" ? PreGameTiles : Tiles}
        </div>
      </div>
    </div>
  );
}

export default App;
