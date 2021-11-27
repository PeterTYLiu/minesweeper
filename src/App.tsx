import { useState, useEffect } from "react";
import Tile from "./components/Tile";
import Timer from "./components/Timer";
import "./App.css";
// Typescript
import ITile from "./types/tile";
import { gameStatuses } from "./types/gameStatuses";

function App() {
  let numOfRows = 20; //20;
  let numOfColumns = 10; //10;
  let numOfMines = 35; //35;
  let currentFormat = `${numOfColumns}x${numOfRows}x${numOfMines}m`;
  let numOfRemainingTiles = numOfRows * numOfColumns - numOfMines;
  let alertMessage = `New in version 1.2:
  • Right-click or swipe a tile to flag it!

  Coming soon:
  • Chording
  • Adjustable difficulty
  • "Maybe" state for flagging
  
  Made with ❤️ by PL`;

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
        boardState.find((tile) => tile.r == r && tile.c == c + 1),
        boardState.find((tile) => tile.r == r && tile.c == c - 1),
        boardState.find((tile) => tile.r == r + 1 && tile.c == c),
        boardState.find((tile) => tile.r == r - 1 && tile.c == c),
        boardState.find((tile) => tile.r == r + 1 && tile.c == c + 1),
        boardState.find((tile) => tile.r == r - 1 && tile.c == c - 1),
        boardState.find((tile) => tile.r == r + 1 && tile.c == c - 1),
        boardState.find((tile) => tile.r == r - 1 && tile.c == c + 1),
      ].filter((tileAround) => tileAround?.isMine).length;
    });

    return boardState;
  }

  function floodFill(triggerTile: ITile, boardState: ITile[]) {
    const { r, c } = triggerTile;
    let tilesAround = [
      boardState.find((tile) => tile.r == r && tile.c == c + 1),
      boardState.find((tile) => tile.r == r && tile.c == c - 1),
      boardState.find((tile) => tile.r == r + 1 && tile.c == c),
      boardState.find((tile) => tile.r == r - 1 && tile.c == c),
      boardState.find((tile) => tile.r == r + 1 && tile.c == c + 1),
      boardState.find((tile) => tile.r == r - 1 && tile.c == c - 1),
      boardState.find((tile) => tile.r == r + 1 && tile.c == c - 1),
      boardState.find((tile) => tile.r == r - 1 && tile.c == c + 1),
    ].filter((tile) => tile?.id && !tile?.swept);
    tilesAround.forEach((tile) => {
      if (tile) boardState[tile.id - 1].swept = true;
      if (tile?.minesAround == 0 && tilesAround.length > 0) {
        floodFill(tile, boardState);
      }
    });
  }

  // Game state
  const defaultBoardState = generateNewBoardState();

  const [tilesRemaining, setTilesRemaining] = useState(numOfRemainingTiles);
  const [gameStatus, setGameStatus] = useState<gameStatuses>("preGame");
  const [board, setBoard] = useState<ITile[]>(defaultBoardState);
  const [message, setMessage] = useState(
    localStorage.getItem(currentFormat)
      ? `🏆 ${localStorage.getItem(currentFormat) + "s"}`
      : "🏆 none"
  );

  useEffect(() => {
    if (tilesRemaining == 0) winGame();
  }, [tilesRemaining]);

  const startGame = (tileId: number) => {
    let newBoardState = generateNewBoardState();
    while (
      newBoardState[tileId - 1].isMine ||
      newBoardState[tileId - 1].minesAround != 0
    ) {
      newBoardState = generateNewBoardState();
    }

    newBoardState[tileId - 1].swept = true;

    floodFill(newBoardState[tileId - 1], newBoardState);
    setTilesRemaining(
      newBoardState.filter((tile) => !tile.swept && !tile.isMine).length
    );
    setBoard(newBoardState);
    setGameStatus("inGame");
  };

  const winGame = () => {
    setGameStatus("wonGame");
  };

  const loseGame = (id: number) => {
    setGameStatus("lostGame");
    document
      .querySelector(`.id-${id}`)
      ?.setAttribute("style", "background: red");
    let newBoardState = [...board];
    for (let t = 0; t < newBoardState.length; t++) {
      if (newBoardState[t].isMine) newBoardState[t].swept = true;
    }
    setBoard(newBoardState);
  };

  const prepNewGame = () => {
    setBoard(defaultBoardState);
    setTilesRemaining(numOfRemainingTiles);
    setGameStatus("preGame");
    setMessage(
      localStorage.getItem(currentFormat)
        ? `🏆 ${localStorage.getItem(currentFormat) + "s"}`
        : "🏆 none"
    );
  };

  const PreGameTiles = defaultBoardState.map((tile, i) => {
    if (tile.c == 1) {
      return (
        <div
          key={`pg-${i}`}
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          {board.map((innerTile) => {
            if (innerTile.r == i / numOfColumns + 1)
              return (
                <div
                  className="tile pre-game"
                  onClick={() => {
                    startGame(innerTile.id);
                  }}
                  key={`pg-r${innerTile.r}c${innerTile.c}`}
                />
              );
          })}
        </div>
      );
    }
  });

  const Tiles = board.map((tile, i) => {
    if (tile.c == 1) {
      return (
        <div key={i}>
          {board.map((innerTile) => {
            if (innerTile.r == i / numOfColumns + 1)
              return (
                <Tile
                  minesAround={innerTile.minesAround}
                  isMine={innerTile.isMine}
                  setTilesRemaining={setTilesRemaining}
                  tilesRemaining={tilesRemaining}
                  key={`r${innerTile.r}c${innerTile.c}`}
                  swept={innerTile.swept}
                  c={innerTile.c}
                  r={innerTile.r}
                  boardState={board}
                  setBoardState={setBoard}
                  floodFill={floodFill}
                  id={innerTile.id}
                  loseGame={loseGame}
                  gameStatus={gameStatus}
                  flagStatus={innerTile.flagStatus}
                />
              );
          })}
        </div>
      );
    }
  });

  return (
    <div className="App">
      <div className="container">
        <div className="controls">
          <span>{message}</span>

          {gameStatus == "wonGame" && <div onClick={prepNewGame}>{"😎"}</div>}
          {gameStatus == "lostGame" && <div onClick={prepNewGame}>{"😬"}</div>}
          {(gameStatus == "preGame" || gameStatus == "inGame") && (
            <div
              onClick={() => {
                alert(alertMessage);
              }}
            >
              {"❔"}
            </div>
          )}

          <span style={{ textAlign: "right" }}>
            <Timer
              gameStatus={gameStatus}
              setMessage={setMessage}
              currentFormat={currentFormat}
            />
          </span>
        </div>
        <div
          className={`board ${
            (gameStatus == "lostGame" || gameStatus == "wonGame") && "postGame"
          }`}
        >
          {gameStatus == "preGame" ? PreGameTiles : Tiles}
        </div>
      </div>
    </div>
  );
}

export default App;
