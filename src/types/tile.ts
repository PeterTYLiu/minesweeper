export default interface ITile {
  isMine: boolean;
  minesAround: number;
  swept: boolean;
  id: number;
  c: number;
  r: number;
  flagStatus: "flagged" | "maybe" | "unflagged";
}
