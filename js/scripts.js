$(document).ready(function() {
  var height = parseInt(prompt("Enter your height in inches."));
  if (height >= 60) {
    $(".adult").toggleClass("highlighted");
    $(".adultkid").toggleClass("highlighted");
  } else {
    $(".kid").toggleClass("highlighted");
    $(".adultkid").toggleClass("highlighted");
  }
});
