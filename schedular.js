const data = require("./eventData");
const date = require("date-and-time");
const schedule = require("node-schedule");
const now = new Date();

//var task=document.getElementById("event")

// Formatting the date and time
// by using date.format() method
const value = date.format(now, "YYYY/MM/DD HH:mm:ss:SSS");

//loop through all the event

data.map((item) => {
  console.log(item.text, item.dateTime);
  console.log(value);
  var task = item.text;
  var len = item.text.length;
  var time = item.dateTime;

  //schedule the job at particular time

  schedule.scheduleJob(task, time, () => {
    console.log(`event ${text}triggered`);

    // waiting for the time while is equivalent to the length of string in seconds
    setTimeout(function callbk() {
      console.log(`your task run ${text}`);
    }, len * 1000);
  });
});
