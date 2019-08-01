// timer for each question
// 4 possible answers each
// both right and wrong pages time out
// last page displays right, wrong, and unanswered questions
    // also timed, with automatic reset function

$(document).ready(function() {

    var array = [
        {
            ani: "crocodiles",
            opt: ['dive', 'bask', 'tan', 'nile'],
            ans: 1
        },
        {
            ani: "giraffes",
            opt: ['tower', 'height', 'swagger', 'herd'],
            ans: 0
        },
        {
            ani: "owls",
            opt: ['hoot', 'ministry', 'flock', 'parliament'],
            ans: 3
        },
        {
            ani: "toads",
            opt: ['knot', 'wart', 'ribbon', 'ribbit'],
            ans: 0
        },
        {
            ani: "stingrays",
            opt: ['sickness', 'swim', 'fever', 'school'],
            ans: 2
        },
        {
            ani: "skunks",
            opt: ['stink', 'pew', 'stench', 'stripe'],
            ans: 2
        },
        {
            ani: "parrots",
            opt: ['calamity', 'pandemonium', 'chaos', 'torrent'],
            ans: 1
        },
        {
            ani: "rhinoceroses",
            opt: ['gore', 'accident', 'tumble', 'crash'],
            ans: 3
        },
        {
            ani: "lemurs",
            opt: ['leap', 'conspiracy', 'stakeout', 'murder'],
            ans: 1
        },
        {
            ani: "frogs",
            opt: ['army', 'leg', 'command', 'war'],
            ans: 0
        }
    ];

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
    var sec = 15;
    var rightTime;

    function askQues() {

        animal = array[curr].ani;
        options = array[curr].opt;
        answer = parseInt(array[curr].ans);
        curr++;

        sec = 15;

        countdown();
        run();

        var quesTime = setTimeout(function() { timeUp(); }, 14 * 1000);

        var question = "What is the collective name for " + animal + "?";
        $('#question').text(question);

        var buttons = "<button class='b' value='0'>" + options[0] + " of " + animal + "</button>" + "<button class='b' value='1'>" + options[1] + " of " + animal + "</button>" + "<button class='b' value='2'>" + options[2] + " of " + animal + "</button>" + "<button class='b' value='3'>" + options[3] + " of " + animal + "</button>";
        $('#answer-buttons').html(buttons);

        $('.b').on('click', function() {

            var select = parseInt($(this).val());

            if (select === answer) {
                $('#countdown').empty();
                right();
            } else {
                $('#countdown').empty();
                wrong();
            }

            if (curr > 9) {
                $('#countdown').empty();
                end();
            }

        });


        function countdown() {

            sec--;
            var count = "Time remaining: " + sec + " seconds";
            $('#countdown').text(count);

            if (sec < 1) {
                $('#countdown').empty();
            }

        }

        function run() {

            clearInterval(interval);
            interval = setInterval(countdown, 1000);

        }

        function timeUp() {

            outOfTime++;

            clearTimeout(quesTime);
            rightTime = setTimeout(function() { askQues(); }, 3000);

            $('#countdown').empty();
            $('#answer-buttons').empty();

            var oops = "Oops! Time's up.";
            $('#question').html(oops);
        }

        function right() {

            yes++;

            clearTimeout(quesTime);
            clearInterval(interval);

            rightTime = setTimeout(function() { askQues(); }, 3000);

            $('#countdown').append('');
            $('#answer-buttons').empty();

            var a = options[answer];
            var yay = "Yes! The answer is &nbsp;<strong>" + a + "</strong>.";
            $('#question').html(yay);
        }

        function wrong() {

            nope++;

            clearTimeout(quesTime);
            clearInterval(interval);

            rightTime = setTimeout(function() { askQues(); }, 3000);

            $('#countdown').append('');
            $('#answer-buttons').empty();

            var ohNo = "Yeah, nope.";
            $('#question').text(ohNo);

        }

        function end() {

            clearTimeout(quesTime);
            clearInterval(interval);

            var restart = function() {
                
                $('#start').on('click', function main() {
                    $('#start').empty();
                    askQues();
                });
                $('#question').empty();
                $('#countdown').empty();
                $('#answer-buttons').empty();

            };

            rightTime = setTimeout(function() { restart(); }, 10 * 1000);

            $('#countdown').empty();

            var done = "<p>That's it, folks! Let's see what you've done.</p><br>";
            var score = "<ul><li>Correct: " + yes + "</li>" + "<li>Incorrect: " + nope + "</li>" +
                "<li>Unanswered: " + outOfTime + "</li></ul>";
            $('#question').html(done);
            $('#answer-buttons').append(score);

        }

    }

    $('#start').on('click', function main() {

        $('#start').detach();
        askQues();

    });

});
