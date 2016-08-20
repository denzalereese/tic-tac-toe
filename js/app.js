// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  startGame();


  function startGame() {
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

        if (checkXWin()) {
          $("#header-text").text("X wins!!");
          $(".box").off("click");
        }
        else if (checkOWin()){
          $("#header-text").text("O wins!!");
          $(".box").off("click");
        }
     }

      $("button").on("click", resetBoard);
    });
  }

  function checkXWin() {
    //horizontal wins
    if ($("#top-left").hasClass("clicked-X") &&
       $("#top-mid").hasClass("clicked-X") &&
       $("#top-right").hasClass("clicked-X")) {
      return true;
    }

    else if ($("#mid-left").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#mid-right").hasClass("clicked-X")) {
      return true;
    }

    else if ($("#bottom-left").hasClass("clicked-X") &&
       $("#bottom-mid").hasClass("clicked-X") &&
       $("#bottom-right").hasClass("clicked-X")) {
      return true;
    }

    //vertical wins

    else if ($("#top-left").hasClass("clicked-X") &&
       $("#mid-left").hasClass("clicked-X") &&
       $("#bottom-left").hasClass("clicked-X")) {
      return true;
    }

    else if ($("#top-mid").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#bottom-mid").hasClass("clicked-X")) {
      return true;
    }

    else if ($("#top-right").hasClass("clicked-X") &&
       $("#mid-right").hasClass("clicked-X") &&
       $("#bottom-right").hasClass("clicked-X")) {
      return true;
    }

    //diagnol wins

    else if ($("#top-left").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#bottom-right").hasClass("clicked-X")) {
      return true;
    }

    else if ($("#top-right").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#bottom-left").hasClass("clicked-X")) {
      return true;
    }

      return false;
    }


    function checkOWin() {
    //horizontal wins
    if ($("#top-left").hasClass("clicked-O") &&
       $("#top-mid").hasClass("clicked-O") &&
       $("#top-right").hasClass("clicked-O")) {
      return true;
    }

    else if ($("#mid-left").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#mid-right").hasClass("clicked-O")) {
      return true;
    }

    else if ($("#bottom-left").hasClass("clicked-O") &&
       $("#bottom-mid").hasClass("clicked-O") &&
       $("#bottom-right").hasClass("clicked-O")) {
      return true;
    }

    //vertical wins

    else if ($("#top-left").hasClass("clicked-O") &&
       $("#mid-left").hasClass("clicked-O") &&
       $("#bottom-left").hasClass("clicked-O")) {
      return true;
    }

    else if ($("#top-mid").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#bottom-mid").hasClass("clicked-O")) {
      return true;
    }

    else if ($("#top-right").hasClass("clicked-O") &&
       $("#mid-right").hasClass("clicked-O") &&
       $("#bottom-right").hasClass("clicked-O")) {
      return true;
    }

    //diagnol wins

    else if ($("#top-left").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#bottom-right").hasClass("clicked-O")) {
      return true;
    }

    else if ($("#top-right").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#bottom-left").hasClass("clicked-O")) {
      return true;
    }

      return false;
    }

    function resetBoard() {
      $(".box").removeClass('clicked-X');
      $(".box").removeClass('clicked-O');
      $(".box h1").remove();
      $("#header-text").text("Tic Tac Toe");
      startGame();
    }


});
