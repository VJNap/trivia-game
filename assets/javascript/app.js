// Define variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
console.log(correct);

// Start/Timer function

var number = 120;

var intervalID;

function gameStart() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 100);
}

function decrement() {
    number--;

    $(".timer").html("<h3>Timer: " + number + "</h3>");

    if (number === 0) {
        stop();
        timeUp();
    }
}
gameStart();

// Stop function

function stop() {
    clearInterval(intervalID);
}

// Reset function



// Game over function

function timeUp() {
    console.log("done");
    $(".container").createElement("div").addClass("gameOverPage").html("<h2>Game Over!</h2>");
    console.log("time is up");
}

// Button interaction

    // Take value of the selected radio button

