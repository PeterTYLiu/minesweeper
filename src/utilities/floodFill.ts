import ITile from "../types/tile";

export default function floodFill(triggerTile: ITile, boardState: ITile[]) {
  const { r, c } = triggerTile;
  let tilesAround = [
    boardState.find((tile) => tile.r === r && tile.c === c + 1),
    boardState.find((tile) => tile.r === r && tile.c === c - 1),
    boardState.find((tile) => tile.r === r + 1 && tile.c === c),
    boardState.find((tile) => tile.r === r - 1 && tile.c === c),
    boardState.find((tile) => tile.r === r + 1 && tile.c === c + 1),
    boardState.find((tile) => tile.r === r - 1 && tile.c === c - 1),
    boardState.find((tile) => tile.r === r + 1 && tile.c === c - 1),
    boardState.find((tile) => tile.r === r - 1 && tile.c === c + 1),
  ].filter(
    (tile) => tile?.id && !tile?.swept && tile.flagStatus === "unflagged"
  );
  tilesAround.forEach((tile) => {
    if (tile) boardState[tile.id - 1].swept = true;
    if (tile?.minesAround === 0 && tilesAround.length > 0) {
      floodFill(tile, boardState);
    }
  });
}
