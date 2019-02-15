const defaultOptions = {
  length: 20,
  suffix: "..."
};

export default function truncate(str, options = {}) {
  const opt = { ...defaultOptions, ...options };
  if (str.length <= opt.length) return str;

  return `${str.slice(0, str.indexOf(" ", opt.length)).trim()}${opt.suffix}`;
}
