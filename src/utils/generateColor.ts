export function generateRandomHexColor(): string {
  const randomInt = Math.floor(Math.random() * 0xffffff);
  const hexColor = `#${randomInt.toString(16).padStart(6, "0").toUpperCase()}`;
  return hexColor;
}
