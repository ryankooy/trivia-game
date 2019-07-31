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
            ans: "bask"
        },
        {
            ani: "giraffes",
            opt: ['tower', 'b', 'c', 'd'],
            ans: "tower"
        },
        {
            ani: "owls",
            opt: ['hoot', 'b', 'c', 'parliament'],
            ans: "parliament"
        },
        {
            ani: "toads",
            opt: ['knot', 'b', 'c', 'd'],
            ans: "knot"
        },
        {
            ani: "stingrays",
            opt: ['a', 'b', 'fever', 'd'],
            ans: "fever"
        },
        {
            ani: "skunks",
            opt: ['a', 'b', 'stench', 'd'],
            ans: "stench"
        },
        {
            ani: "parrots",
            opt: ['a', 'pandemonium', 'c', 'd'],
            ans: "pandemonium"
        },
        {
            ani: "rhinoceroses",
            opt: ['a', 'b', 'c', 'crash'],
            ans: "crash"
        },
        {
            ani: "lemurs",
            opt: ['leap', 'conspiracy', 'stakeout', 'd'],
            ans: "conspiracy"
        },
        {
            ani: "frogs",
            opt: ['army', 'b', 'command', 'd'],
            ans: "army"
        }
    ];

    var startButt = "<button>Begin!</button>";
    $('#start').append(startButt);

    var curr = 0;

    $('#start').on('click', function main() {

        $('#start').empty();

        var animal = array[curr].ani;
        console.log(animal);

        var option = array[curr].opt;

        var answer = array[curr].ans;

        var question = "What is the collective name for " + animal + "?";
        $('#question').text(question);

        var buttons = "<ul><button>" + array[curr].opt[0] + " of " + animal + "</button>" + "<button>" + array[curr].opt[1] + " of " + animal + "</button>" + "<button>" + array[curr].opt[2] + " of " + animal + "</button>" + "<button>" + array[curr].opt[3] + " of " + animal + "</button></ul>";
        $('#answer-buttons').html(buttons);

        $('#answer-buttons').on('click', function() {
            if (option === answer) {
                console.log("yay");
            } else {
                console.log("nay");
            }
        });

        curr++;

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

});