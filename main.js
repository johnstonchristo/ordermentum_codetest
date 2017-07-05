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

var time_conversion = function(minutes) {
  var new_time = minutes * 60000;
  return new_time;
};

var timer = function(lights_color, background_color, minutes) {
  setTimeout(function() {
    access_light(lights_color, background_color);
  }, time_conversion(minutes));
};

var e_w = function() {
  timer("ew_green", "green", 0);
  timer("ew_green", "white", 4.5);
  timer("ew_yellow", "yellow", 4.5);
  timer("ew_yellow", "white", 5);
  timer("ew_red", "red", 5);
  timer("ew_red", "white", 9.5);
  timer("ew_yellow", "yellow", 9.5);
  timer("ew_yellow", "white", 10);
};

var n_s = function() {
  timer("ns_red", "red", 0);
  timer("ns_red", "white", 4.5);
  timer("ns_yellow", "yellow", 4.5);
  timer("ns_yellow", "white", 5);
  timer("ns_green", "green", 5);
  timer("ns_green", "white", 9.5);
  timer("ns_yellow", "yellow", 9.5);
  timer("ns_yellow", "white", 10);
};

var both_lights = function() {
  e_w();
  n_s();
};

var run_lights = function(start_time, finish_time) {
  both_lights();
  setInterval(function() {
    both_lights();
  }, time_conversion(10));
  setTimeout(function() {
    clearInterval(both_lights);
  }, time_conversion(start_and_finish_time(start_time, finish_time)));
};

run_lights("January 1, 2017 9:30:00", "January 1, 2017 10:00:00");
