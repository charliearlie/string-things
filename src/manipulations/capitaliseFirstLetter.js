export default function capitaliseFirstLetter(str) {
  if (typeof str !== "string")
    throw new TypeError("This function requires a string parameter");

  return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
}
