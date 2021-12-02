import { useState, useEffect } from "react";
import "./App.css";
// Components
import Tile from "./components/Tile";
import Timer from "./components/Timer";
import SettingsPanel from "./components/SettingsPanel";
import Instructions from "./components/Instructions";
import NewRecord from "./components/NewRecord";
// Typescript
import ITile from "./types/tile";
import { gameStatuses } from "./types/gameStatuses";
import { onOff } from "./types/settings";
// UTility functions
import floodFill from "./utilities/floodFill";

function App() {
  //defaults
  let defaultNumOfRows = 17;
  let numOfColumns = 10;
  let defaultMineRatio = 0.175;
  // Settings
  const [numOfRows, setNumOfRows] = useState(
    localStorage.getItem("numOfRows")
      ? Number(localStorage.getItem("numOfRows"))
      : defaultNumOfRows
  );
  const [mineRatio, setMineRatio] = useState(
    localStorage.getItem("mineRatio")
      ? Number(localStorage.getItem("mineRatio"))
      : defaultMineRatio
  );
  const [swipeToFlag, setSwipeToFlag] = useState<onOff>(
    localStorage.getItem("swipeToFlag")
      ? (localStorage.getItem("swipeToFlag") as onOff)
      : "off"
  );
  const [swipeToChord, setSwipeToChord] = useState<onOff>(
    localStorage.getItem("swipeToChord")
      ? (localStorage.getItem("swipeToChord") as onOff)
      : "off"
  );

  // Utility functions

  function generateNewBoardState(
    columns = numOfColumns,
    rows = numOfRows,
    minePercentage = mineRatio
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
    let minesToPlace = Math.round(columns * rows * minePercentage);
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
  const [newRecordOpen, setNewRecordOpen] = useState(false);
  const [oldAndNewRecords, setOldAndNewRecords] = useState<{
    old: number | undefined;
    new: number;
  }>({ old: 0, new: 0 });
  const [defaultBoardState, setDefaultBoardState] = useState(
    generateNewBoardState(numOfColumns, numOfRows, mineRatio)
  );

  const [gameStatus, setGameStatus] = useState<gameStatuses>("preGame");
  const [board, setBoard] = useState<ITile[]>(defaultBoardState);
  const [message, setMessage] = useState(
    localStorage.getItem(`${numOfColumns}x${numOfRows}x${mineRatio}m`)
      ? `🏆 ${
          localStorage.getItem(`${numOfColumns}x${numOfRows}x${mineRatio}m`) +
          "s"
        }`
      : "🏆 none"
  );

  useEffect(() => {
    setMessage(
      localStorage.getItem(`${numOfColumns}x${numOfRows}x${mineRatio}m`)
        ? `🏆 ${
            localStorage.getItem(`${numOfColumns}x${numOfRows}x${mineRatio}m`) +
            "s"
          }`
        : "🏆 none"
    );
  }, [mineRatio, numOfRows]);

  // Update initial board when rows change

  useEffect(() => {
    setDefaultBoardState(generateNewBoardState());
  }, [numOfRows]);

  // Win the game when all the tiles have been cleared

  useEffect(() => {
    if (
      gameStatus === "inGame" &&
      board.filter((tile) => tile.swept).length ===
        numOfRows * numOfColumns -
          Math.round(numOfColumns * numOfRows * mineRatio)
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
        ?.setAttribute("style", "background: #d00");
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
      localStorage.getItem(`${numOfColumns}x${numOfRows}x${mineRatio}m`)
        ? `🏆 ${
            localStorage.getItem(`${numOfColumns}x${numOfRows}x${mineRatio}m`) +
            "s"
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

  // Reset the board if board size changes

  useEffect(() => {
    prepNewGame();
  }, [numOfRows]);

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
          {defaultBoardState.map((innerTile) => {
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
                  swipeToChord={swipeToChord}
                  swipeToFlag={swipeToFlag}
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
      <NewRecord
        oldAndNewRecords={oldAndNewRecords}
        numOfRows={numOfRows}
        mineRatio={mineRatio}
        newRecordOpen={newRecordOpen}
        setNewRecordOpen={setNewRecordOpen}
      />
      <div className="container">
        <div className="controls">
          <div className="dark-bg">
            {gameStatus === "preGame" ? (
              message
            ) : (
              <Timer
                gameStatus={gameStatus}
                setMessage={setMessage}
                currentFormat={`${numOfColumns}x${numOfRows}x${mineRatio}m`}
                setNewRecordOpen={setNewRecordOpen}
                setOldAndNewRecords={setOldAndNewRecords}
              />
            )}
          </div>

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

          <div>
            {gameStatus === "inGame" ? (
              <div className="dark-bg">
                {`💣 
              ${
                Math.round(numOfColumns * numOfRows * mineRatio) -
                board.filter((tile) => tile.flagStatus === "flagged").length
              }`}
              </div>
            ) : (
              <>
                <Instructions />
                <SettingsPanel
                  swipeToFlag={swipeToFlag}
                  setSwipeToFlag={setSwipeToFlag}
                  swipeToChord={swipeToChord}
                  setSwipeToChord={setSwipeToChord}
                  setMineRatio={setMineRatio}
                  mineRatio={mineRatio}
                  numOfRows={numOfRows}
                  setNumOfRows={setNumOfRows}
                />
              </>
            )}
          </div>
        </div>
        <div
          onContextMenu={(e) => e.preventDefault()}
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
