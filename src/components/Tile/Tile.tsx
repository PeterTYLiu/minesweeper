import React from "react";
import { useSwipeable } from "react-swipeable";
// Typescript
import ITile from "../../types/tile";
import { gameStatuses } from "../../types/gameStatuses";
import { onOff } from "../../types/settings";

interface TileProps {
  tile: ITile;
  floodFill(triggerTile: ITile, boardState: ITile[]): any;
  boardState: ITile[];
  setBoardState(arg0: ITile[]): any;
  loseGame(arrOfIds: number[]): any;
  gameStatus: gameStatuses;
  chord(triggerTile: ITile, boardState: ITile[]): any;
  swipeToFlag: onOff;
  swipeToChord: onOff;
}

export default function Tile({
  tile,
  floodFill,
  boardState,
  setBoardState,
  loseGame,
  gameStatus,
  swipeToChord,
  chord,
  swipeToFlag,
}: TileProps) {
  const { swept, isMine, minesAround, flagStatus, id, c, r } = tile;

  const handleContextMenu = () => {
    if (!swept) {
      const newBoardState = [...boardState];
      newBoardState[id - 1].flagStatus =
        flagStatus === "flagged" ? "unflagged" : "flagged";
      return setBoardState(newBoardState);
    }
    if (swept && !isMine && minesAround) {
      chord(tile, boardState);
    }
  };

  const handleDoubleClick = () => {
    if (swept && !isMine && minesAround) {
      chord(tile, boardState);
    }
  };

  const handleClick = () => {
    if (flagStatus === "unflagged" && isMine && gameStatus === "inGame")
      return loseGame([id]);
    if (flagStatus === "unflagged" && !swept && gameStatus === "inGame") {
      const newBoardState = [...boardState];
      newBoardState[id - 1].swept = true;
      if (minesAround === 0 && !isMine) {
        floodFill(newBoardState[id - 1], newBoardState);
      }
      setBoardState(newBoardState);
    }
  };

  // const handleMouseDownOrTouchStart = (e: any) => {
  //   if (
  //     (e.type === "touchstart" || e.button === 2) &&
  //     swept &&
  //     minesAround &&
  //     chordingEnabled
  //   ) {
  //     let chordableTilesIds = [
  //       boardState.find((tile) => tile.r === r && tile.c === c + 1),
  //       boardState.find((tile) => tile.r === r && tile.c === c - 1),
  //       boardState.find((tile) => tile.r === r + 1 && tile.c === c),
  //       boardState.find((tile) => tile.r === r - 1 && tile.c === c),
  //       boardState.find((tile) => tile.r === r + 1 && tile.c === c + 1),
  //       boardState.find((tile) => tile.r === r - 1 && tile.c === c - 1),
  //       boardState.find((tile) => tile.r === r + 1 && tile.c === c - 1),
  //       boardState.find((tile) => tile.r === r - 1 && tile.c === c + 1),
  //     ]
  //       .filter((tile) => !tile?.swept && tile?.flagStatus === "unflagged")
  //       .map((tile) => tile?.id);
  //     chordableTilesIds.forEach((id) => {
  //       document.querySelector(`.id-${id}`)?.classList.add("hover");
  //     });
  //   }
  // };

  const highlightTilesToChord = () => {
    if (swept && minesAround) {
      let chordableTilesIds = [
        boardState.find((tile) => tile.r === r && tile.c === c + 1),
        boardState.find((tile) => tile.r === r && tile.c === c - 1),
        boardState.find((tile) => tile.r === r + 1 && tile.c === c),
        boardState.find((tile) => tile.r === r - 1 && tile.c === c),
        boardState.find((tile) => tile.r === r + 1 && tile.c === c + 1),
        boardState.find((tile) => tile.r === r - 1 && tile.c === c - 1),
        boardState.find((tile) => tile.r === r + 1 && tile.c === c - 1),
        boardState.find((tile) => tile.r === r - 1 && tile.c === c + 1),
      ]
        .filter((tile) => !tile?.swept && tile?.flagStatus === "unflagged")
        .map((tile) => tile?.id);
      chordableTilesIds.forEach((id) => {
        document.querySelector(`.id-${id}`)?.classList.add("hover");
      });
    }
  };

  const unhighlightTilesToChord = () => {
    if (swept && minesAround && !isMine) {
      const artificiallyHoveredTiles = document.querySelectorAll(".hover");
      artificiallyHoveredTiles.forEach((tile) =>
        tile.classList.remove("hover")
      );
    }
  };

  const swipeHandler = useSwipeable({
    onSwiped: () => {
      if (swipeToChord === "on" && swept && !isMine && minesAround) {
        chord(tile, boardState);
      } else if (swipeToFlag === "on" && !swept) {
        const newBoardState = [...boardState];
        newBoardState[id - 1].flagStatus =
          flagStatus === "flagged" ? "unflagged" : "flagged";
        return setBoardState(newBoardState);
      }
    },
  });

  const TileContents = (
    <>
      {((!swept && gameStatus === "inGame") || (swept && isMine)) &&
      flagStatus === "flagged" ? (
        <p style={{ fontWeight: "normal" }} className={flagStatus}>
          🚩
        </p>
      ) : null}
      {gameStatus !== "inGame" && !isMine && flagStatus === "flagged" ? (
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
      {!swept && flagStatus === "maybe" ? <p>❔</p> : null}
      {gameStatus === "inGame" ? (
        !isMine && minesAround && swept ? (
          <p>{minesAround}</p>
        ) : null
      ) : isMine ? (
        flagStatus !== "flagged" ? (
          gameStatus === "wonGame" ? (
            <p>🌼</p>
          ) : (
            <p>💣</p>
          )
        ) : gameStatus === "wonGame" ? (
          <p>🌼</p>
        ) : null
      ) : minesAround && swept ? (
        <p>{minesAround}</p>
      ) : null}
    </>
  );

  return (
    <div
      onMouseDown={highlightTilesToChord}
      onTouchStart={highlightTilesToChord}
      onMouseUp={unhighlightTilesToChord}
      onTouchEnd={unhighlightTilesToChord}
      onMouseLeave={unhighlightTilesToChord}
      onDoubleClick={handleDoubleClick}
      {...swipeHandler}
      className={`tile id-${id} ${isMine ? "mine" : ""} ${
        swept ? "swept" : ""
      } around-${minesAround}`}
      onContextMenu={(e) => {
        e.preventDefault();
        handleContextMenu();
      }}
      onClick={handleClick}
    >
      {TileContents}
    </div>
  );
}
