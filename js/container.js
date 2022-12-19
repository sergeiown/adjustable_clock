import * as normal from "./normal.js";

const currentTime = document.querySelector(".current-time");
setInterval(
  () => (currentTime.innerText = normal.getCurrentTimeString()),
  1000
);
