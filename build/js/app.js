(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function update() {
  $('#clock').text(moment().format('H:mm:ss'));
}
setInterval(update, 1000);

$(document).ready(function(){
  $('#alarm-form').submit(function(event){
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    console.log(hour);
    var minute = parseInt($('#minute').val());
    console.log(minute);
    $('.alarm-set').text("Your alarm is set for " + hour + ":" + minute);
    $('.alarm-set').show();

    function alarmTimer() {
      var currentHour = parseInt(moment().format('H'));
      var currentMinute = parseInt(moment().format('mm'));

      if ((hour === currentHour) && (minute === currentMinute)) {
        console.log("its timmeee");
      }
    }
    setInterval(alarmTimer, 1000);
  });
});

// var Alarm = require('./../js/alarm.js').alarmModule;
//
// $(document).ready(function(){
//   // $('#time').text(moment());
//
//   function displayTime() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
//     var minutes = currentTime.getMinutes();
//     var seconds = currentTime.getSeconds();
//
//     var clockDiv = document.getElementById('clock');
//
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//
//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//
//     var meridiem = "AM";
//     if (hours > 12) {
//       hours = hours - 12;
//       meridiem = "PM";
//     }
//
//     if (hours === 0) {
//       hours = 12;
//     }
//
//     clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
//   }
//
//   $('#alarm').click(function() {
//     var alarmHours = $('#alarmHours').val();
//     console.log(alarmHours);
//     var alarmMinutes = $('#alarmMinutes').val();
//     console.log(alarmMinutes);
//     var alarmSeconds = $('#alarmSeconds').val();
//     console.log(alarmSeconds);
//   });
//
//   alarmSound();
//   displayTime();
//   setInterval(displayTime, 1000);
// });

},{}]},{},[1]);
