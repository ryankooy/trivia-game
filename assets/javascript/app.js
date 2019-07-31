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
            ans: ['bask', '2']
        },
        {
            ani: "giraffes",
            opt: ['tower', 'b', 'c', 'd'],
            ans: ['tower', '1']
        },
        {
            ani: "owls",
            opt: ['hoot', 'b', 'c', 'parliament'],
            ans: ['parliament', '4']
        },
        {
            ani: "toads",
            opt: ['knot', 'b', 'c', 'd'],
            ans: ['knot', '1']
        },
        {
            ani: "stingrays",
            opt: ['a', 'b', 'fever', 'd'],
            ans: ['fever', '3']
        },
        {
            ani: "skunks",
            opt: ['a', 'b', 'stench', 'd'],
            ans: ['stench', '3']
        },
        {
            ani: "parrots",
            opt: ['a', 'pandemonium', 'c', 'd'],
            ans: ['pandemonium', '2']
        },
        {
            ani: "rhinoceroses",
            opt: ['a', 'b', 'c', 'crash'],
            ans: ['crash', '4']
        },
        {
            ani: "lemurs",
            opt: ['leap', 'conspiracy', 'stakeout', 'd'],
            ans: ['conspiracy', '2']
        },
        {
            ani: "frogs",
            opt: ['army', 'b', 'command', 'd'],
            ans: ['army', '1']
        }
    ];

    var startButt = "<button>Begin!</button>";
    $('#start').append(startButt);

    $('#start').on('click', function main() {

        $('#start').empty();

        for (var i = 0; i < array.length; i++) {

            var animal = array[i].ani;

            var question = "What is the collective name for " + animal + "?";
            $('#question').text(question);

            var buttons = "<button>a " + array[i].opt[0] + " of " + animal + "</button><br>" + "<button>a " + array[i].opt[1] + " of " + animal + "</button><br>" + "<button>a " + array[i].opt[2] + " of " + animal + "</button><br>" + "<button>a " + array[i].opt[3] + " of " + animal + "</button>";
            $('#answer-buttons').html(buttons);



        }


        // shows buttons
        // if answer is correct
        // var right = function() {
        //     correct = true;
        //     clearInterval(questionOne);
        // };
        // // if answer is incorrect
        // var wrong;
        // // duration of question
        // var timer = setTimeout(function() { nextQ(); }, 15 * 1000);
        // // duration of right/wrong screen
        // var timer2 = setTimeout(function() {}, 3000);
        // shows elements
        // var questionOne = function() {
        //     document.getElementById('countdown').innerHTML = "Time remaining: " + timer + " seconds";
        //     document.getElementById('question').innerHTML = obj.q1.text;
        //     document.getElementById('answer-buttons').innerHTML = buttons;
        // };
        // questionOne();
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

});