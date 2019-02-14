const defaultOptions = {
  length: 20,
  suffix: "...",
  endAfterWord: false
};

export default function truncate(str, options = {}) {
  const opt = { ...defaultOptions, ...options };
  if (str.length <= opt.length) return str;

  if (opt.endAfterWord) {
    return `${str.slice(0, str.indexOf(" ", 20)).trim()}${opt.suffix}`;
  }
  return `${str.slice(0, opt.length).trim()}${opt.suffix}`;
}
