// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var clicks = 0;
  var Xscore = 0;
  var Oscore = 0;
  var xSound = new Audio("sounds/X.mp3");
  var oSound = new Audio("sounds/O.mp3");
  var winSound = new Audio("sounds/win.mp3");
  var resetSound = new Audio("sounds/reset.mp3");

 startGame();


  function startGame() {
    clicks = 0;
    $(".box").on("click", function() {
      console.log(this.id);
       if ($("#" + this.id).is(":empty")) {
        clicks ++;
        if (clicks % 2 != 0) {
          $("#" + this.id).addClass("clicked-X");
          $("#" + this.id).append("<h1 class='X animated rubberBand'>X</h1>");
          xSound.play();
          if (clicks === 9) {
              $("#header-text").text("Cat's game! Reset.");
            }
        }else{
          $("#" + this.id).addClass("clicked-O");
          $("#" + this.id).append("<h1 class='O animated tada'>O</h1>");
          oSound.play();
        }
      if (clicks != 0) {
        if (checkXWin()) {
          $("#header-text").text("X wins!");
          $(".box").off("click");
          Xscore++;
          $("#X-score").text(Xscore + "");
          winSound.play();
         }
        else if (checkOWin()){
          $("#header-text").text("O wins!");
          $(".box").off("click");
          Oscore++;
          $("#O-score").text(Oscore + "");
          winSound.play();
        }
        else {
          if (clicks != 9 && clicks % 2 != 0) {
            Materialize.toast("O's turn.", 1000);
          }
          else if (clicks % 2 == 0) {
            Materialize.toast("X's turn.", 1000);

        }
      }
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
      addWinDot("top-across");
      return true;
    }

    else if ($("#mid-left").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#mid-right").hasClass("clicked-X")) {
      addWinDot("mid-across");
      return true;
    }

    else if ($("#bottom-left").hasClass("clicked-X") &&
       $("#bottom-mid").hasClass("clicked-X") &&
       $("#bottom-right").hasClass("clicked-X")) {
      addWinDot("bottom-across");
      return true;
    }

    //vertical wins

    else if ($("#top-left").hasClass("clicked-X") &&
       $("#mid-left").hasClass("clicked-X") &&
       $("#bottom-left").hasClass("clicked-X")) {
      addWinDot("left-down");
      return true;
    }

    else if ($("#top-mid").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#bottom-mid").hasClass("clicked-X")) {
      addWinDot("mid-down");
      return true;
    }

    else if ($("#top-right").hasClass("clicked-X") &&
       $("#mid-right").hasClass("clicked-X") &&
       $("#bottom-right").hasClass("clicked-X")) {
       addWinDot("right-down");
      return true;
    }

    //diagnol wins

    else if ($("#top-left").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#bottom-right").hasClass("clicked-X")) {
          addWinDot("diagnol-left");
          return true;
    }

    else if ($("#top-right").hasClass("clicked-X") &&
       $("#mid-mid").hasClass("clicked-X") &&
       $("#bottom-left").hasClass("clicked-X")) {
      addWinDot("diagnol-right");
      return true;
    }

      return false;
    }


    function checkOWin() {
    //horizontal wins
    if ($("#top-left").hasClass("clicked-O") &&
       $("#top-mid").hasClass("clicked-O") &&
       $("#top-right").hasClass("clicked-O")) {
      addWinDot("top-across");
      return true;
    }

    else if ($("#mid-left").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#mid-right").hasClass("clicked-O")) {
      addWinDot("mid-across");
      return true;
    }

    else if ($("#bottom-left").hasClass("clicked-O") &&
       $("#bottom-mid").hasClass("clicked-O") &&
       $("#bottom-right").hasClass("clicked-O")) {
      addWinDot("bottom-across");
      return true;
    }

    //vertical wins

    else if ($("#top-left").hasClass("clicked-O") &&
       $("#mid-left").hasClass("clicked-O") &&
       $("#bottom-left").hasClass("clicked-O")) {
      addWinDot("left-down");
      return true;
    }

    else if ($("#top-mid").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#bottom-mid").hasClass("clicked-O")) {
      addWinDot("mid-down");
      return true;
    }

    else if ($("#top-right").hasClass("clicked-O") &&
       $("#mid-right").hasClass("clicked-O") &&
       $("#bottom-right").hasClass("clicked-O")) {
      addWinDot("right-down");
      return true;
    }

    //diagnol wins

    else if ($("#top-left").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#bottom-right").hasClass("clicked-O")) {
          addWinDot("diagnol-left");
          return true;
    }

    else if ($("#top-right").hasClass("clicked-O") &&
       $("#mid-mid").hasClass("clicked-O") &&
       $("#bottom-left").hasClass("clicked-O")) {
      addWinDot("diagnol-right");
      return true;
    }

      return false;
    }

    function addWinDot(winPattern) {
      switch (winPattern) {
        case "diagnol-left":
        $("#board").prepend("<div class='win-dot' id='win-dot-diagnol-left'></div>")
        break;

        case "top-across":
        $("#board").prepend("<div class='win-dot' id='win-dot-top-across'></div>")
        break;

        case "mid-across":
        $("#board").prepend("<div class='win-dot' id='win-dot-mid-across'></div>")
        break;

        case "bottom-across":
        $("#board").prepend("<div class='win-dot' id='win-dot-bottom-across'></div>")
        break;

        case "left-down":
        $("#board").prepend("<div class='win-dot' id='win-dot-left-down'></div>")
        break;

        case "mid-down":
        $("#board").prepend("<div class='win-dot' id='win-dot-mid-down'></div>")
        break;

        case "right-down":
        $("#board").prepend("<div class='win-dot' id='win-dot-right-down'></div>")
        break;

        case "diagnol-right":
        $("#board").prepend("<div class='win-dot' id='win-dot-diagnol-right'></div>")
        break;

      }

    }

    function resetBoard() {
      winSound.pause();
      resetSound.play();
      $("#header-text").addClass("animated hinge").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $("#header-text").removeClass('animated hinge');
        $("#header-text").text("Tic Tac Toe");
      });;
      $(".box").removeClass('clicked-X');
      $(".box").removeClass('clicked-O');
      $(".box h1").addClass("animated bounceOutDown")
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(".box h1").remove();
      });
      $(".win-dot").remove();
      startGame();
    }


});
