// timer for each question
// 4 possible answers each
// both right and wrong pages time out
// last page displays right, wrong, and unanswered questions
    // also timed, with automatic reset function

$(document).ready(function() {

    var obj = {
        q1: {
            text: "What is it?",
            a1: false,
            a2: true,
            a3: false,
            a4: false
        },
        q2: {
            a1: true,
            a2: false,
            a3: false,
            a4: false
        },
        q3: {
            a1: false,
            a2: false,
            a3: true,
            a4: false
        },
        q4: {
            a1: false,
            a2: true,
            a3: false,
            a4: false
        },
        q5: {
            a1: true,
            a2: false,
            a3: false,
            a4: false
        },
        q6: {
            a1: false,
            a2: false,
            a3: false,
            a4: true
        },
        q7: {
            a1: false,
            a2: false,
            a3: true,
            a4: false
        }
    };

    var buttons = "<button>" + a1 + "</button><br>" + "<button>" + a2 + "</button><br>" + "<button>" + a3 + "</button><br>" + "<button>" + a4 + "</button>";
    var right;
    var wrong;
    var timer = setTimeout(function() { nextQ(); }, 15 * 1000);
    var questionOne = function() {
        document.getElementById('countdown').innerHTML = "Time remaining: " + timer + " seconds";
        document.getElementById('question').innerHTML = q1.text;
        document.getElementById('answer-buttons').innerHTML = buttons;
    };
    var nextQ = function() {
        
    };

});