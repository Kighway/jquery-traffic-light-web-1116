
$(document).ready(function() {

    var x = 1;
    var blinker;

    function delta() {
      if (x === 1) {
        color = "white";
        x = 2;
      }
      else {
        color = "red";
          x = 1;
      }
      $('#top-light').css("background", color);
    }

    function stopBlinker() {
      clearInterval(blinker);
    }

   /* code for button 1  -- Turn the light Red */
   $('#button1').click(
     function() {
          stopBlinker();
         $('#top-light').css("background", "red");
         $('#middle-light').css("background", "white");
         $('#bottom-light').css("background", "white");
         $('#top-light').html("");
         $('#bottom-light').html("");
     }
   );
   /* code for button 2 --- Say STOP */
   $('#button2').click(
     function() {
       stopBlinker();
       $('#top-light').css("background", "red");
       $('#middle-light').css("background", "white");
       $('#bottom-light').css("background", "white");
       $('#top-light').html("<p> STOP </p>");
       $('#bottom-light').html("");
     }
   );

   /* code for button 3 -- Turn the light Yellow */
   $('#button3').click(
     function() {
       stopBlinker();
       $('#top-light').css("background", "white");
       $('#middle-light').css("background", "yellow");
       $('#bottom-light').css("background", "white");
       $('#top-light').html("");
       $('#bottom-light').html("");
     }
   );
   /* code for button 4 -- Turn the light Green */
   $('#button4').click(
     function() {
       stopBlinker();
       $('#top-light').css("background", "white");
       $('#middle-light').css("background", "white");
       $('#bottom-light').css("background", "green");
       $('#top-light').html("");
       $('#bottom-light').html("");
     }
   );
   /* code for button 5 -- Say GO! */
   $('#button5').click(
     function() {
       stopBlinker();
       $('#top-light').css("background", "white");
       $('#middle-light').css("background", "white");
       $('#bottom-light').css("background", "green");
       $('#top-light').html("");
       $('#bottom-light').html("<p> GO </p>");
     }
   );
   /* code for button 6 -- Make Green Light Blink -- Extension!! */
   $('#button6').click(
     function() {
       blinker = setInterval(delta, 100);
       $('#middle-light').css("background", "white");
       $('#bottom-light').css("background", "white");
       $('#top-light').html("");
       $('#bottom-light').html("");
     }
   );
});
