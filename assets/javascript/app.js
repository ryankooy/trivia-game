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

    var startButt = "<button>Begin!</button>";
    $('#start').append(startButt);

    var curr = 0;
    var animal = array[curr].ani;
    var options = array[curr].opt;
    var answer = parseInt(array[curr].ans);
    console.log(options[answer]);
    console.log(answer);

    function countdown(sec) {
        sec = 15;
        sec--;
    }

    // function right() {

    // }

    // function wrong() {}

    // function timeUp() {}

    function askQues() {

        curr++;

        timer();

        var question = "What is the collective name for " + animal + "?";
        $('#question').text(question);

        var buttons = "<button class='b' value='0'>" + options[0] + " of " + animal + "</button>" + "<button class='b' value='1'>" + options[1] + " of " + animal + "</button>" + "<button class='b' value='2'>" + options[2] + " of " + animal + "</button>" + "<button class='b' value='3'>" + options[3] + " of " + animal + "</button>";
        $('#answer-buttons').html(buttons);

        $('.b').on('click', function() {

            var select = parseInt($(this).val());

            if (select === answer) {
                console.log("oh, yay");
            } else {
                console.log("NO");
            }

            // show pass/fail
            // start timer for pass/fail display
            // in the timer function, call askQues()

        });

    }

    $('#start').on('click', function main() {

        $('#start').empty();
        askQues();

    });

    // var timer = setTimeout(function() { nextQ(); }, 15 * 1000);


    // shows buttons
    // if answer is correct
    // var right = function() {
    //     correct = true;
    //     clearInterval();
    // };
    // // if answer is incorrect
    // var wrong;
    // // duration of question
    // // duration of right/wrong screen
    // var timer2 = setTimeout(function() {}, 3000);
    // counts down
    // var nextQ = function() {
    //     var sec = 15;
    //     sec--;
    // };

    // if (!correct) {
    //     wrong();
    // } else {
    //     right();
    // }


});