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
  loseGame,
  gameStatus,
}) {
  return (
    <div
      className={`tile id-${id} ${isMine ? "mine" : ""} ${
        swept ? "swept" : ""
      } around-${minesAround}`}
      onClick={() => {
        if (isMine && gameStatus == "inGame") return loseGame(id);
        if (!swept && gameStatus == "inGame") {
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
      }}
    >
      {!swept && gameStatus == "inGame" ? null : (
        <p>
          {isMine ? (tilesRemaining ? "💣" : "🌼") : null}
          {!isMine && minesAround && swept ? minesAround : null}
        </p>
      )}
    </div>
  );
}
