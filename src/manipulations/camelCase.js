export default function camelCase(str) {
  return `${str[0].toLowerCase()}${str.slice(1)}`
    .replace(/[-\s]([a-z])/g, (x, char) => char.toUpperCase())
    .replace(/[^\w-]+/g, "");
}
