// Create an array of Words
var word = ["Jurassic", "Nintendo", "Guitars", "Javascript", "Houston", "StarWars", "Mexicans", "Tacos"];

// Choose word randomly
var random = Math.floor(Math.random() * word.length);
var choosenWord = word[random];

console.log(choosenWord);



// Create underScores based on length of word
var underScore = [];
var generateUnderscore = () => {
    for (var i = 0; i < choosenWord.length; i = i + 1) {
        underScore.push("_");
    }
    return underScore;
};


console.log(generateUnderscore())

// Get users guess
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);

    // If users guess is right
    if (choosenWord.indexOf(keyWord) > -1) {
        console.log(true);
    }
});


// Check if guess is right

// if right, push to right array
// if wrong, push to wrong array
