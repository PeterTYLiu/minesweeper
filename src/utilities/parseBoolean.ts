export default function parseBoolean(str: string | null): boolean {
  if (str?.trim().toLowerCase() === "true") return true;
  return false;
}
