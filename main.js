// This function determines the amount of minutes between the start and finish time.
var start_and_finish_time = function(start_time, finish_time) {
  var start = new Date(start_time);
  var finish = new Date(finish_time);
  var difference = finish.getTime() - start.getTime();
  var duration = Math.round(difference / 60000);
  return duration;
};

// This function converts minutes to milliseconds
var time_conversion = function(minutes) {
  var new_time = minutes * 60000;
  return new_time;
};

// This function access' the html elements to determine light colour.
var access_light = function(lights_color, background_color) {
  var light = document.getElementById(lights_color);
  light.style.backgroundColor = background_color;
};

// This function ddetermines how long each light should be displayed for.
var timer = function(lights_color, background_color, minutes) {
  setTimeout(function() {
    access_light(lights_color, background_color);
  }, time_conversion(minutes));
};

// This function determines the light timing and colour selection for the e_w lights.
var e_w = function() {
  timer("ew_green", "green", 0);
  timer("ew_green", "white", 0.45);
  timer("ew_yellow", "yellow", 0.45);
  timer("ew_yellow", "white", 0.5);
  timer("ew_red", "red", 0.5);
  timer("ew_red", "white", 1.0);
};

// This function determines the light timing and colour selection for the n_s lights.
var n_s = function() {
  timer("ns_red", "red", 0);
  timer("ns_red", "white", 0.5);
  timer("ns_green", "green", 0.5);
  timer("ns_green", "white", 0.95);
  timer("ns_yellow", "yellow", 0.95);
  timer("ns_yellow", "white", 1.0);
};

// This function groups both light sets.
var both_lights = function() {
  e_w();
  n_s();
};

// This function runs the lights between a start and finish time.
var run_lights = function(start_time, finish_time) {
  both_lights();
  setInterval(function() {
    both_lights();
  }, time_conversion(1));
  setTimeout(function() {
    clearInterval(both_lights);
  }, time_conversion(start_and_finish_time(start_time, finish_time)));
};

run_lights("January 1, 2017 9:30:00", "January 1, 2017 10:00:00");
