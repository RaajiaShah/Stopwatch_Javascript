
window.onload = function() {

    var seconds = 00;
    var tens = 00;
    var mins = 00;
    var appendSeconds = document.getElementById('seconds');
    var appendTens = document.getElementById('tens');
    var appendMins = document.getElementById('mins')
    var btnStart = document.getElementById('start');
    var btnStop = document.getElementById('stop');
    var btnReset = document.getElementById('reset');
    var Interval;

    btnStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function() {

        clearInterval(Interval);
    }


    btnReset.onclick = function() {
        clearInterval(Interval);
        seconds = 00;
        tens = 00;
        mins = 00;
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
        appendMins.innerHTML = mins;


    }


    function startTimer() {
        tens++;

        if (tens <= 9) {


            appendTens.innerHTML = "0" + tens;

        }


        if (tens > 9) {

            appendTens.innerHTML = tens;
        }


        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {

            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 60) {

            console.log("mins");
            mins++;
            appendMins.innerHTML = "0" + mins;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;

        }

        if (mins > 9) {

            appendMins.innerHTML = mins;
        }

    }

}