// import * as normal from "./normal.js";

const dateOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const localOptions = {
  ukraine: "ukr",
  usa: "en-us",
};

let userHours = 0;
let userMinutes = 0;
let userSeconds = 0;

const localClock = () =>
  new Date().toLocaleString(localOptions.ukraine, dateOptions);

const userClock = () => {
  let userDate = new Date();
  userDate.setHours(userDate.getHours() + userHours);
  userDate.setMinutes(userDate.getMinutes() + userMinutes);
  userDate.setSeconds(userDate.getSeconds() + userSeconds);
  return userDate.toLocaleString(localOptions.ukraine, dateOptions);
};

const userClockAdjust = () => {
  
}

const currentTime = document.querySelector(".current-time");
const userTime = document.querySelector(".user-time");

setInterval(() => (currentTime.innerText = localClock()), 1000);
setInterval(() => (userTime.innerText = userClock()), 1000);
