$(document).ready(function() {

  var browser_vp_width = $(window).width();

  if (browser_vp_width < 993){
    switchToSmallScreen ("main-content");
  }
  else {
    switchToBigScreen ("main-content");
  }

  $(window).resize(function(){
      var browser_vp_width = $(window).width();
      if (browser_vp_width < 993){
        switchToSmallScreen ("main-content");
      }
      else {
        switchToBigScreen ("main-content");
      }
    });

});

function hide (id) {

  var element = document.getElementById(id);
  element.style.display = "none";

}

function show (id) {

  var element = document.getElementById(id);
  element.style.width = "100%";
  element.style.display = "block";

}

function switchToSmallScreen (id) {

  var x = document.getElementById(id);
  if (x.className.indexOf("margin-left-15") != -1) {
      x.className = x.className.replace("margin-left-15", "")
  }

  var element = document.getElementById("side-navbar");
  element.style.display = "none";

  var button = document.getElementById("side-navbar-button");
  button.style.display = "block";

}

function switchToBigScreen (id) {

  var x = document.getElementById(id);
  if (x.className.indexOf("margin-left-15") == -1) {
      x.className += "margin-left-15";
  }

  var element = document.getElementById("side-navbar");
  element.style.display = "block";
  element.style.width = "15%";

  var button = document.getElementById("side-navbar-button");
  button.style.display = "none";

}
