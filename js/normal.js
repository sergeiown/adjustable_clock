function getCurrentTimeString() {
  return new Date().toTimeString().replace(/ .*/, "");
}

export { getCurrentTimeString };
