// timer for each question
// 4 possible answers each
// both right and wrong pages time out
// last page displays right, wrong, and unanswered questions
    // also timed, with automatic reset function

$(document).ready(function() {

    var array = [
        {
            ani: "crocodiles",
            opt: ['a', 'bask', 'c', 'd'],
            ans: 1
        },
        {
            ani: "giraffes",
            opt: ['tower', 'b', 'c', 'd'],
            ans: 0
        },
        {
            ani: "owls",
            opt: ['hoot', 'b', 'c', 'parliament'],
            ans: 3
        },
        {
            ani: "toads",
            opt: ['knot', 'b', 'c', 'd'],
            ans: 0
        },
        {
            ani: "stingrays",
            opt: ['a', 'b', 'fever', 'd'],
            ans: 2
        },
        {
            ani: "skunks",
            opt: ['a', 'b', 'stench', 'd'],
            ans: 2
        },
        {
            ani: "parrots",
            opt: ['a', 'pandemonium', 'c', 'd'],
            ans: 1
        },
        {
            ani: "rhinoceroses",
            opt: ['a', 'b', 'c', 'crash'],
            ans: 3
        },
        {
            ani: "lemurs",
            opt: ['leap', 'conspiracy', 'stakeout', 'd'],
            ans: 1
        },
        {
            ani: "frogs",
            opt: ['army', 'b', 'command', 'd'],
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
    var sec = 15;
    //console.log(options[answer]);
    //console.log(answer);

    function askQues() {

        animal = array[curr].ani;
        options = array[curr].opt;
        answer = parseInt(array[curr].ans);
        curr++;

        sec = 15;

        countdown();
        run();

        var quesTime = setTimeout(function() { timeUp(); }, 15 * 1000);

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

        });


        function countdown() {

            sec--;
            var count = "Time remaining: " + sec + " seconds";
            $('#countdown').text(count);

        }

        function run() {

            clearInterval(interval);
            interval = setInterval(countdown, 1 * 1000);

        }

        function timeUp() {

            clearTimeout(quesTime);
            var rightTime = setTimeout(function() { askQues(); }, 3000);

            $('#countdown').empty();
            $('#answer-buttons').empty();

            var oops = "Oops! Time's up.";
            $('#question').html(oops);
        }

        function right() {

            clearTimeout(quesTime);
            var rightTime = setTimeout(function() { askQues(); }, 3000);

            $('#countdown').empty();
            $('#answer-buttons').empty();

            var a = options[answer];
            var yay = "Yes, indeed! The answer is ' <strong>" + a + "</strong>'.";
            $('#question').html(yay);
        }

        function wrong() {

            $('#countdown').empty();
            $('#answer-buttons').empty();

            clearTimeout(quesTime);
            var rightTime = setTimeout(function() { askQues(); }, 3000);

            var ohNo = "Oh, wow. That's not right at all.";
            $('#question').text(ohNo);

        }

    }

    $('#start').on('click', function main() {

        $('#start').empty();
        askQues();

    });

});
