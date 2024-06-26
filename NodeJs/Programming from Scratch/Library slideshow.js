<html>
    <head>
        <title>Using a JS Library: Slideshow library</title>
    </head>
    <body>
        
    <div id="slideshow">
        <img src="https://www.kasandbox.org/programming-images/animals/birds_rainbow-lorakeets.png" alt="Rainbow lorakeets" />
        <img src="https://www.kasandbox.org/programming-images/animals/butterfly.png"alt="Butterfly" />
        <img src="https://www.kasandbox.org/programming-images/animals/cat.png" alt="Cat" />
        <img src="https://www.kasandbox.org/programming-images/animals/crocodiles.png" alt="Crocodiles" />
        <img src="https://www.kasandbox.org/programming-images/animals/fox.png" alt="Fox" />
        
    </div>

    <script src="https://cdn.jsdelivr.net/gh/pamelafox/ka-slideshow-example@master/slideshow.js"></script>

    <script>
        slideShow(document.getElementById("slideshow"));
    </script>
    </body>
</html>