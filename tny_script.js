"use strict";

/*
   Countdown Clock
   Author: Will
   Date:   03/31/23
*/
// invoke function runClock
runClock();
setInterval(runClock, 1000);
// countdown clock function
function runClock() {
   // store current date and time
   let currentDay = new Date();
   let dateStr = currentDay.toLocaleDateString();
   let timeStr = currentDay.toLocaleTimeString();

   // display current date & times
   document.getElementById("dateNow").innerHTML = dateStr + "<br>" + timeStr;

   // new year calculations
   let newYear = new Date("January 1 2018");
   let nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear)
   let daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   //display countdown to new year's eve
   document.getElementById("days").textContent = Math.floor(daysLeft)
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
   setInterval(runClock, 1000);
};