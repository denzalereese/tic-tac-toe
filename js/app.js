// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var clicks = 1;
  $(".box").on("click", function() {
    console.log(this.id);
     if ($("#" + this.id).is(":empty")) {
      clicks ++;
      if (clicks % 2 == 0) {
        $("#" + this.id).addClass("clicked-X");
        $("#" + this.id).append("<h1>X</h1>");
      }else{
        $("#" + this.id).addClass("clicked-O");
        $("#" + this.id).append("<h1>O</h1>");
      }

      if (checkWin()) {
        console.log("Win!!!!");
      }
   }
  });

  function checkWin() {
    if ($("#top-left").hasClass("clicked-X") &&
       $("#top-mid").hasClass("clicked-X") &&
       $("#top-right").hasClass("clicked-X")) {
      return true;
    }
      return false;
    }
});
