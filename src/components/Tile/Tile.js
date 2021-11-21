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
}) {
  return (
    <div
      className={`tile ${isMine ? "mine" : ""} ${
        swept ? "swept" : ""
      } around-${minesAround}`}
      onClick={() => {
        if (isMine) return loseGame();
        if (!swept) {
          const newBoardState = [...boardState];
          newBoardState[id - 1].swept = true;
          setTilesRemaining(tilesRemaining - 1);
          // If minesAround == 0, initiate a flood fill on all contiguous 0s and their perimeter
          if (minesAround == 0 && !isMine) {
            floodFill(newBoardState[id - 1], newBoardState);
          }
          setBoardState(newBoardState);
          setTilesRemaining(
            newBoardState.filter((tile) => !tile.swept && !tile.isMine).length
          );
        }
      }}
    >
      {swept && <p>{isMine ? "💣" : minesAround}</p>}
    </div>
  );
}
