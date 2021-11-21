import { useState, useEffect } from "react";
import Tile from "./components/Tile/Tile";
import "./App.css";

function App() {
  let numOfRows = 20;
  let numOfColumns = 10;
  let numOfMines = 35;

  // Utility functions

  function generateNewBoardState(
    columns = numOfColumns,
    rows = numOfRows,
    mines = numOfMines
  ) {
    let boardState = [];
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= columns; c++) {
        boardState.push({
          c,
          r,
          isMine: false,
          id: c + (r - 1) * 10,
          swept: false,
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

  function floodFill(triggerTile, boardState) {
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
      boardState[tile.id - 1].swept = true;
      if (tile.minesAround == 0 && tilesAround.length > 0) {
        floodFill(tile, boardState);
      }
    });
  }

  // Game state
  const defaultBoardState = generateNewBoardState();

  const [tilesRemaining, setTilesRemaining] = useState(
    numOfRows * numOfColumns - numOfMines
  );
  const [inGame, setInGame] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [board, setBoard] = useState(defaultBoardState);

  // Timer
  useEffect(() => {
    if (inGame) {
      const timer = setInterval(() => {
        setTimeElapsed(Number((timeElapsed + 0.1).toFixed(1)));
      }, 100);

      return () => clearInterval(timer);
    }
  }, [inGame, timeElapsed]);

  const startGame = (tileId) => {
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
    setTimeElapsed(0);
    setInGame(true);
  };

  const winGame = () => {};

  const loseGame = () => {
    alert(`You lose! Your time: ${timeElapsed} s`);
    setInGame(false);
    setTimeElapsed(0);
    setTilesRemaining(numOfRows * numOfColumns - numOfMines);
  };

  const PreGameTiles = defaultBoardState.map((tile, i) => {
    if (tile.c == 1) {
      return (
        <div style={{ lineHeight: 0 }} key={`pg-${i}`}>
          {board.map((innerTile) => {
            if (innerTile.r == i / 10 + 1)
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
        <div style={{ lineHeight: 0 }} key={i}>
          {board.map((innerTile) => {
            if (innerTile.r == i / 10 + 1)
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
        {tilesRemaining},{" "}
        {timeElapsed.toString().includes(".")
          ? timeElapsed
          : timeElapsed.toString() + ".0"}
        <div className="board">{inGame ? Tiles : PreGameTiles}</div>
      </div>
    </div>
  );
}

export default App;
