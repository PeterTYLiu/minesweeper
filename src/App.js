import { useState, useEffect } from "react";
import Tile from "./components/Tile/Tile";
import "./App.css";

function App() {
  let rows = 20;
  let columns = 10;
  let mines = 35;

  function generateNewBoardState() {
    let boardState = [];
    for (let r = 1; r <= rows; r++) {
      for (let c = 1; c <= columns; c++) {
        boardState.push({
          c,
          r,
          isMine: false,
          id: c + (r - 1) * 10,
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

  const defaultBoardState = generateNewBoardState();

  // Game state
  const [tilesRemaining, setTilesRemaining] = useState(rows * columns - mines);
  const [inGame, setInGame] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [board, setBoard] = useState(defaultBoardState);

  const startGame = (tileId) => {
    let newBoardState = generateNewBoardState();
    while (
      newBoardState[tileId - 1].isMine ||
      newBoardState[tileId - 1].minesAround != 0
    ) {
      newBoardState = generateNewBoardState();
    }
    newBoardState[tileId - 1].swept = true;
    setBoard(newBoardState);
    setInGame(true);
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
        <div className="board">{inGame ? Tiles : PreGameTiles}</div>
      </div>
    </div>
  );
}

export default App;
