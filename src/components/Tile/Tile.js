import { useState } from "react";

function floodFill(c, r) {}

export default function Tile({
  isMine,
  minesAround,
  swept,
  setTilesRemaining,
  tilesRemaining,
  c,
  r,
}) {
  const [isSwept, setIsSwept] = useState(
    typeof swept == "boolean" ? swept : false
  );
  return (
    <div
      className={`tile ${isMine ? "mine" : ""} ${
        isSwept ? "swept" : ""
      } around-${minesAround}`}
      onClick={() => {
        if (!isSwept) {
          setIsSwept(true);
          setTilesRemaining(tilesRemaining - 1);
          // If minesAround == 0, initiate a flood fill on all contiguous 0s and their perimeter
        }
      }}
    >
      {isSwept && <p>{isMine ? "💣" : minesAround}</p>}
    </div>
  );
}
