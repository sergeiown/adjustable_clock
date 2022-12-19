"use strict";

// import * as normal from "./normal.js";

const buttonIncreaseHour = document.querySelector(".increase-hour");
const buttonIncreaseMinute = document.querySelector(".increase-minute");
const buttonIncreaseSecond = document.querySelector(".increase-second");

const buttonDecreaseHour = document.querySelector(".decrease-hour");
const buttonDecreaseMinute = document.querySelector(".decrease-minute");
const buttonDecreaseSecond = document.querySelector(".decrease-second");

const currentTime = document.querySelector(".current-time");
const userTime = document.querySelector(".user-time");

// clocs' vars and funcs
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

// show clocs
setInterval(() => (currentTime.innerText = localClock()), 1000);
setInterval(() => (userTime.innerText = userClock()), 1000);

// ivent listeners
buttonIncreaseHour.addEventListener("click", () => {
  userHours++;
});
buttonIncreaseMinute.addEventListener("click", () => {
  userMinutes++;
});
buttonIncreaseSecond.addEventListener("click", () => {
  userSeconds++;
});

buttonDecreaseHour.addEventListener("click", () => {
  userHours--;
});
buttonDecreaseMinute.addEventListener("click", () => {
  userMinutes--;
});
buttonDecreaseSecond.addEventListener("click", () => {
  userSeconds--;
});
