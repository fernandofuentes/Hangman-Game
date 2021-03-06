// Global Variables
// =====================================================
// Create an array of Words
var word = ["guitars", "bear", "computers", "jam", "mouse"];
//Choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

console.log(choosenWord);

var docUnderScore = document.getElementById("underScores");
var docRightGuess = document.getElementById("rightGuess");
var docWrongGuess = document.getElementById("wrongGuess")

// Main
// =====================================================
// Create underScores based on length of word
var generateUnderscore = function () {
    for (var i = 0; i < choosenWord.length; i = i + 1) {
        underScore.push("_");
    }
    return underScore;
};

console.log(generateUnderscore());

// Get users guess
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
    // If users guess is right
    if (choosenWord.indexOf(keyWord) > -1) {
        // add to the rightWords array
        rightWord.push(keyWord);

        console.log(rightWord);

        // Replace underScore with RightLetter
        underScore[choosenWord.indexOf(keyWord)] = keyWord;

        // Find out if the underScores have been filled.. WIN
        if (underScore.join("") == choosenWord) {
            alert("You Win!");
        }


        underScore[0].innerHTML = underScore.join("_");

        // If user guess is wrong

        // Add to the wrongWords array
    } else {
        wrongWord.push(keyWord);
        console.log(wrongWord);
    };
    underScore.innerHTML = generateUnderscore().join("_");
});
