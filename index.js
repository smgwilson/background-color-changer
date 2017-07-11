exports.backgroundColorChanger = function() {
    
    // assign array to hold all hexadeximal integers
    var hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

    function setColor() {
      var colorArray = [];
      // push random values from hexArray into colorArray
      for (i = 0; i <= 5; i++) {
        colorArray.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
      }
      // join the colorArray values into a hexidecimal color code and return
      var color = "#" + colorArray.join("");
      console.log(color);
      return color;
    }

    // change the background color every second and run 10 times
    var timesRun = 0;
    var usedColors = [];
    var myColorChange = setInterval(changeColor, 1000);

    function changeColor() {
      var myColor = setColor();
      // check for unlikely repeating colors
      if (usedColors.indexOf(myColor) === -1) {
        usedColors.push(myColor);
        console.log(usedColors);
        document.body.style.backgroundColor = myColor;
        timesRun += 1;
        if (timesRun >= 10) {
          clearInterval(myColorChange);
        }
      } else {
        changeColor();
      }
    }
}
