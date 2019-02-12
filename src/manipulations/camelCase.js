export default function camelCase(str) {
  if (typeof str !== "string")
    throw new TypeError("This function requires a string parameter");

  return `${str[0].toLowerCase()}${str.slice(1)}`
    .replace(/[-\s]([a-z])/g, (x, char) => char.toUpperCase())
    .replace(/[^\w-]+/g, "");
}
