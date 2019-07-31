// timer for each question
// 4 possible answers each
// both right and wrong pages time out
// last page displays right, wrong, and unanswered questions
    // also timed, with automatic reset function

$(document).ready(function() {

    var obj = {
        q1: {
            que: "What is it?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['b', '2']
        },
        q2: {
            que: "?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['a', '1']
        },
        q3: {
            que: "?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['d', '4']
        },
        q4: {
            que: "?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['d', '4']
        },
        q5: {
            que: "?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['d', '4']
        },
        q6: {
            que: "?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['d', '4']
        },
        q7: {
            que: "?",
            opt: ['a', 'b', 'c', 'd'],
            ans: ['d', '4']
        }
    };

    var startButt = "<button>Begin!</button>";
    $('#start').append(startButt);

    $('#start').on('click', function main() {

        $('#start').empty();

        var one, two, three, four;
        var correct = false;
        // shows buttons
        var buttons = "<button>" + one + "</button><br>" + "<button>" + two + "</button><br>" + "<button>" + three + "</button><br>" + "<button>" + four + "</button>";
        // if answer is correct
        var right = function() {
            correct = true;
            clearInterval(questionOne);
        };
        // if answer is incorrect
        var wrong;
        // duration of question
        var timer = setTimeout(function() { nextQ(); }, 15 * 1000);
        // duration of right/wrong screen
        var timer2 = setTimeout(function() {}, 3000);
        // shows elements
        var questionOne = function() {
            document.getElementById('countdown').innerHTML = "Time remaining: " + timer + " seconds";
            document.getElementById('question').innerHTML = obj.q1.text;
            document.getElementById('answer-buttons').innerHTML = buttons;
        };
        questionOne();
        // counts down
        var nextQ = function() {
            var sec = 15;
            sec--;
        };

        if (!correct) {
            wrong();
        } else {
            right();
        }

    });

});