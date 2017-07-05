console.log("code test");

var access_light = function(lights_color, background_color) {
  var light = document.getElementById(lights_color);
  light.style.backgroundColor = background_color;
};

var start_and_finish_time = function(start_time, finish_time) {
  var start = new Date(start_time);
  var finish = new Date(finish_time);
  var difference = finish.getTime() - start.getTime();
  var duration = Math.round(difference / 60000);
  return duration;
};

var timer = function(lights_color, background_color, milliseconds) {
  setTimeout(function() {
    access_light(lights_color, background_color);
  }, milliseconds);
};

var minutes = function(minutes) {
  var new_time = minutes * 60000;
  return new_time;
};

var e_w = function(seconds) {
  timer("ew_green", "green", 0);
  timer("ew_green", "white", minutes(4.5));
  timer("ew_yellow", "yellow", minutes(4.5));
  timer("ew_yellow", "white", minutes(5));
  timer("ew_red", "red", minutes(5));
  timer("ew_red", "white", minutes(9.5));
  timer("ew_yellow", "yellow", minutes(9.5));
  timer("ew_yellow", "white", minutes(10));
};

var n_s = function(seconds) {
  timer("ns_red", "red", 0);
  timer("ns_red", "white", minutes(4.5));
  timer("ns_yellow", "yellow", minutes(4.5));
  timer("ns_yellow", "white", minutes(5));
  timer("ns_green", "green", minutes(5));
  timer("ns_green", "white", minutes(9.5));
  timer("ns_yellow", "yellow", minutes(9.5));
  timer("ns_yellow", "white", minutes(10));
};

var both_lights = function() {
  e_w();
  n_s();
};

var run_lights = function(start_time, finish_time) {
  both_lights();
  setInterval(function() {
    both_lights();
  }, minutes(10));
  setTimeout(function() {
    clearInterval(both_lights);
  }, minutes(start_and_finish_time()));
};

run_lights("January 1, 2017 9:30:00", "January 1, 2017 10:00:00");
