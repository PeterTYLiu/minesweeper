import React from "react";
import { useSwipeable } from "react-swipeable";
// Typescript
import ITile from "../../types/tile";
import { gameStatuses } from "../../types/gameStatuses";

interface TileProps extends ITile {
  tilesRemaining: number;
  setTilesRemaining(arg0: number): any;
  floodFill(triggerTile: ITile, boardState: ITile[]): any;
  boardState: ITile[];
  setBoardState(arg0: ITile[]): any;
  loseGame(id: number): any;
  gameStatus: gameStatuses;
}

export default function Tile({
  isMine,
  minesAround,
  swept,
  setTilesRemaining,
  tilesRemaining,
  floodFill,
  boardState,
  setBoardState,
  id,
  flagStatus,
  loseGame,
  gameStatus,
}: TileProps) {
  const toggleFlagStatus = () => {
    if (!swept) {
      const newBoardState = [...boardState];
      newBoardState[id - 1].flagStatus =
        flagStatus == "flagged" ? "unflagged" : "flagged";
      setBoardState(newBoardState);
    }
  };

  const handleClick = () => {
    if (flagStatus == "unflagged" && isMine && gameStatus == "inGame")
      return loseGame(id);
    if (flagStatus == "unflagged" && !swept && gameStatus == "inGame") {
      const newBoardState = [...boardState];
      newBoardState[id - 1].swept = true;
      setTilesRemaining(tilesRemaining - 1);
      // If minesAround == 0, initiate a flood fill on all contiguous 0s and their perimeter
      if (minesAround == 0 && !isMine) {
        floodFill(newBoardState[id - 1], newBoardState);
        setTilesRemaining(
          newBoardState.filter((tile) => !tile.swept && !tile.isMine).length
        );
      }
      setBoardState(newBoardState);
    }
  };

  const swipeHandler = useSwipeable({
    onSwiped: () => toggleFlagStatus(),
  });

  const TileContents = (
    <>
      {((!swept && gameStatus == "inGame") || (swept && isMine)) &&
      flagStatus == "flagged" ? (
        <p style={{ fontWeight: "normal" }} className={flagStatus}>
          🚩
        </p>
      ) : null}
      {gameStatus !== "inGame" && !isMine && flagStatus == "flagged" ? (
        <>
          <p style={{ fontWeight: "normal" }} className={flagStatus}>
            🚩
          </p>
          <span
            style={{
              position: "absolute",
              color: "white",
              fontSize: "2.2rem",
              paddingBottom: "2px",
            }}
          >
            🛇
          </span>
        </>
      ) : null}
      {!swept && flagStatus == "maybe" ? <p>❔</p> : null}
      {gameStatus == "inGame" ? (
        !isMine && minesAround && swept ? (
          <p>{minesAround}</p>
        ) : null
      ) : isMine ? (
        flagStatus !== "flagged" ? (
          gameStatus == "wonGame" ? (
            <p>🌼</p>
          ) : (
            <p>💣</p>
          )
        ) : null
      ) : minesAround && swept ? (
        <p>{minesAround}</p>
      ) : null}
    </>
  );

  return (
    <div
      {...swipeHandler}
      className={`tile id-${id} ${isMine ? "mine" : ""} ${
        swept ? "swept" : ""
      } around-${minesAround}`}
      onContextMenu={(e) => {
        e.preventDefault();
        toggleFlagStatus();
      }}
      onClick={handleClick}
    >
      {TileContents}
    </div>
  );
}
