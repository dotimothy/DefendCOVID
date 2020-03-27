/* Start Script */

    /*
    * Function to get Date and Time
    */
    function getDate()
    {
        // Getting Current Date and Putting it into stats div
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        var currentDate = 'Current Global Statistics Of COVID-19 As Of: ' + month + '/' + day + '/' + year;
        //Update: Now adding Time
        var seconds = date.getSeconds();
        if(seconds < 10) {
            seconds = '0' + seconds;
        }
        var minutes = date.getMinutes();
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        var hour = date.getHours();
        if(hour == 0) {
            hour += 12;
            currentDate += ' at ' + hour + ':' + minutes + ':' + seconds + ' AM';
        }
        else if(hour < 12) {
            currentDate += ' at ' + hour + ':' + minutes + ':' + seconds + ' AM';
        }
        else {
            if(hour != 12){
               hour -= 12; 
            }
            currentDate += ' at ' + hour + ':' + minutes + ':' + seconds + ' PM';
        }
        currentDate += " (Courtesy of John Hopkins University)";
        document.getElementById("date").innerHTML = currentDate;
    }

    function prompt() {
        var start = document.getElementById("start");
        if(confirm("This is the game. You have to guess how many hidden COVID-19 entities (0-20) are on the screen in 5 tries. Press Ok to Proceed.")) {
            start.parentNode.removeChild(start);
            document.write("<title>DefendCOVID</title>");
            document.write("<link rel=\"stylesheet\" href=\"main.css\">");
            document.write("<link href='https://fonts.googleapis.com/css?family=Product+Sans' rel='stylesheet' type='text/css'>");
            doGame();
        }
        else {
           location.reload();
        }
    }

    function doGame() {
        var random = Math.floor(Math.random() * 20);
        var triesLeft;
        var guess;
        document.write("<h1>Welcome to the DefendCOVID! There are 0-20 COVID-19(s) hiding in the screen like this.</h1>");
        document.write("<img src=\"media/COVID19.gif\" style=\" width:10%\" alt=\"The COVID-19 Virus\">")
        document.write("<br></br>");
        for(triesLeft = 5; triesLeft > 0; triesLeft--) {
            if(triesLeft == 1) {
                document.write("You have " + triesLeft + " try left. Please guess how many viruses are there: <input type=\"number\" id=\"input\" min=\"0\" max=\"20\"> ");
            }
            else {
                document.write("You have " + triesLeft + " tries left. Please guess how many viruses are there: <input type=\"number\" id=\"input\" min=\"0\" max=\"20\"> ");
            } 
                guess = document.getElementById("input").value;
                while(guess != null) {
                    if(guess == random) {
                        triesLeft = 0;
                    }
                    else {
                        continue;
                    }
                }
            document.write("<br></br>");
        }
        //document.body.innerHTML='';
        if(guess != random) {
            document.write("Oh no! You don't know if there are any viruses left! The COVID-19s are infecting the body and the patient is in critical condition! The actual number of COVID-19s is " + random + ". They are infecting the screen! (as a joke, of course)");
            document.write("<br></br>");
            document.write("<button onclick=\"location.reload()\">Try Again!</button>");
            var number;
            for(number = 0; number < random; number++) {
                if(number % 2 == 0) {
                    document.write("<marquee scrollamount = 75 direction = \"left\"><img src =\"media/COVID19.gif\" height =\"75\" width =\"75\" alt =\"COVID-19\"/></marquee>");
                }
                else {
                     document.write("<marquee scrollamount = 75 direction = \"right\"><img src =\"media/COVID19.gif\" height =\"75\" width =\"75\" alt =\"COVID-19\"/></marquee>");
                }
                document.write("<br></br>");
            }
        }
        else {
            document.write("Congrats! You correctly identified the number of viruses (which is " + random + "), helping doctors locate the virus and treat it! Yay!");
        }

    }

    

    /* Function to execute methods */
    function main() {
        getDate();
    }

/* End Script */