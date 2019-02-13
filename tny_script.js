/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Christopher Kim
   Date:   2.5.19   

*/
//window.alert("Welcome to Tulsa");

/* Function to create and run the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString(); 
    var timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById(“dateNow”).innerHTML =
        dateStr + " <br/> " + timeStr;

    /* Calculate the days until January 1st */
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);
    
    document.getElementById("days").textContent = Math.floor(daysLeft);

    /* Calculate the hours left in the current day by using the day variable */
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);

    /* This calculates the minutes and seconds left by using the variable above it, subtracting the floor of it, then multiplying it correctly */
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
};
