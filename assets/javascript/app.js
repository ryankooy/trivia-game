$(document).ready(function() {

    var array = [
        {
            ani: "crocodiles",
            opt: ['dive', 'bask', 'tan', 'nile'],
            ans: 1,
            imgR: "assets/images/hi.gif",
            imgW: "assets/images/robin.gif",
            last: false
        },
        {
            ani: "giraffes",
            opt: ['tower', 'height', 'swagger', 'herd'],
            ans: 0,
            imgR: "assets/images/giraffe-pie.gif",
            imgW: "assets/images/giraffe-run.gif",
            last: false
        },
        {
            ani: "owls",
            opt: ['hoot', 'ministry', 'flock', 'parliament'],
            ans: 3,
            imgR: "assets/images/owlyes.gif",
            imgW: "assets/images/owlno2.gif",
            last: false
        },
        {
            ani: "toads",
            opt: ['knot', 'wart', 'ribbon', 'ribbit'],
            ans: 0,
            imgR: "assets/images/toadyes.gif",
            imgW: "assets/images/toadno.gif",
            last: false
        },
        {
            ani: "frogs",
            opt: ['army', 'leg', 'command', 'war'],
            ans: 0,
            imgR: "assets/images/frogyes.gif",
            imgW: "assets/images/frogno.gif",
            last: false
        },
        {
            ani: "stingrays",
            opt: ['sickness', 'swim', 'fever', 'school'],
            ans: 2,
            imgR: "assets/images/stingrayyes.gif",
            imgW: "assets/images/stingrayno.gif",
            last: false
        },
        {
            ani: "skunks",
            opt: ['stink', 'pew', 'stench', 'stripe'],
            ans: 2,
            imgR: "assets/images/skunkyes.gif",
            imgW: "assets/images/skunkno.gif",
            last: false
        },
        {
            ani: "parrots",
            opt: ['calamity', 'pandemonium', 'chaos', 'torrent'],
            ans: 1,
            imgR: "assets/images/parrotyes.gif",
            imgW: "assets/images/parrotno2.gif",
            last: false
        },
        {
            ani: "rhinoceroses",
            opt: ['gore', 'accident', 'tumble', 'crash'],
            ans: 3,
            imgR: "assets/images/rhinoyes.gif",
            imgW: "assets/images/rhinono.gif",
            last: false
        },
        {
            ani: "lemurs",
            opt: ['leap', 'conspiracy', 'stakeout', 'murder'],
            ans: 1,
            imgR: "assets/images/lemur.gif",
            imgW: "assets/images/lemur.gif",
            last: true
        },
    ];

    // button that starts the game
    var startButt = "<button>BEGIN</button>";
    $('#start').append(startButt);

    var curr = 0;
    var interval;
    var animal;
    var options;
    var answer;
    var yes = 0;
    var nope = 0;
    var outOfTime = 0;
    var gif;
    var image;
    var sec = 15;

    // displays correct-answer gifs
    function showGifR() {
        gif = array[curr].imgR;
        image = "<img src='" + gif + "'>";
        $('#image').html(image);
    }

    // displays wrong-answer/out-of-time gifs
    function showGifW() {
        gif = array[curr].imgW;
        image = "<img src='" + gif + "'>";
        $('#image').html(image);
    }

    // primary game function
    function askQues() {

        // inserting array content into variables
        animal = array[curr].ani;
        options = array[curr].opt;
        answer = parseInt(array[curr].ans);
        final = array[curr].last;

        // number that question timers will count down from
        sec = 15;

        // calling countdown and timer functions
        countdown();
        run();
        $('#image').empty();

        // setTimeout function that will call the timeUp function if the question isn't answered in time
        var quesTime = setTimeout(function() { timeUp(); }, 14 * 1000);

        // inserting question text into div
        var question = "What is the collective name for " + animal + "?";
        $('#question').text(question);

        // inserting buttons into div
        var buttons = "<button class='b' value='0'>" + options[0] + " of " + animal + "</button>" + "<button class='b' value='1'>" + options[1] + " of " + animal + "</button>" + "<button class='b' value='2'>" + options[2] + " of " + animal + "</button>" + "<button class='b' value='3'>" + options[3] + " of " + animal + "</button>";
        $('#answer-buttons').html(buttons);

        // click function for answer buttons
        $('.b').on('click', function() {

            var select = parseInt($(this).val());

            var ifElse = function() {
                if (select === answer) {
                    $('#countdown').empty();
                    right();
                } else {
                    $('#countdown').empty();
                    wrong();
                }
            };
            ifElse();

            // final scores page shows after last array question
            if (final === true) {
                setTimeout(function() { end(); }, 3000);
            }

        });

        // runs when the end of the array is reached; displays score
        function end() {

            clearTimeout(quesTime);
            $('#countdown').empty();
            $('#image').empty();

            var done = "<p>That's it, folks! Let's see what you've done.</p><br>";
            var score = "<ul><p>Correct: " + yes + "</p>" + "<p>Incorrect: " + nope + "</p>" +
                "<p>Unanswered: " + outOfTime + "</p></ul>";
            $('#question').html(done);
            $('#answer-buttons').append(score);

            setTimeout(function() { askQues(); }, 8 * 1000);

            curr = 0;
            yes = 0;
            nope = 0;
            outOfTime = 0;

        }

        // displays countdown text
        function countdown() {

            sec--;
            var count = "Time remaining: " + sec + " seconds";
            $('#countdown').text(count);

            if (sec < 1) {
                $('#countdown').empty();
            }

        }

        // sets interval of timers
        function run() {

            clearInterval(interval);
            interval = setInterval(countdown, 1000);

        }

        // runs when a question isn't answered in time
        function timeUp() {

            showGifW();

            outOfTime++;

            clearTimeout(quesTime);
            setTimeout(function() { askQues(); }, 3000);

            $('#countdown').empty();
            $('#answer-buttons').empty();

            var oops = "Oops! Time's up.";
            $('#question').html(oops);

            curr++;

        }

        // runs when a question is answered correctly
        function right() {

            showGifR();

            yes++;

            clearTimeout(quesTime);
            clearInterval(interval);

            setTimeout(function() { askQues(); }, 3000);

            $('#countdown').append('');
            $('#answer-buttons').empty();
            
            var a = options[answer];
            var yay = "Yes! The answer is &nbsp;<strong>" + a + "</strong>.";
            $('#question').html(yay);

            curr++;

        }

        // runs when a question is answered incorrectly
        function wrong() {

            showGifW();

            nope++;

            clearTimeout(quesTime);
            clearInterval(interval);

            setTimeout(function() { askQues(); }, 3000);

            $('#countdown').append('');
            $('#answer-buttons').empty();

            var ohNo = "Yeah, nope.";
            $('#question').text(ohNo);

            curr++;

        }

    }

    // click function that begins the game
    $('#start').on('click', function main() {

        $('#start').detach();
        askQues();

    });

});
