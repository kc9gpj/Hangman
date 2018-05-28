// word choices for user
var words = [
    "monkey",
    "motorcycle",
    "airplane",
    "automobile",
    "buffalo",
    "jaguars",
    "mississippi",
    "wisconsin",
    "americans",
    "ecuador",
    "mexico",
    "california",
    "nagasaki",
    "revelation",
    "badger",
    "basketball",
    "football",
    "hockey",
    "washington",
    "nuclear",
    "canadian",
    "alaska",
    "rifle",
    "saturn",
    "jupiter",
    "europa",
    "titan",
    "neptune",
    "antartica",
    "nintendo",
    "microsoft",


]

// Array that holds random word
var randWordArray = [];

var letterBank = [];

var randomWord = [];

var wrongCounter = []

// random word pick
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

    // on key function cycles through characters 65 through 90
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90){
       userGuess(event.key);       
}
}
// array to output html underscore for each letter of picked random word
    
    for (var i = 0; i < randomWord.length; i++){
        if (randomWord[i] === ' ')
        // push blank space for word
        {
        randWordArray.push(' ');
        }
        // push dash for letter
        else {
        randWordArray.push('_ ');
        }
        document.getElementById("answer").textContent = randWordArray.join("");
        console.log(randomWord[i]);
    }

function userGuess(letter){
    console.log(letter);
    console.log(randomWord.indexOf(letter));
// loop that cycles guessed letter through word
if (randomWord.indexOf(letter >= 0)) {
    for (var i = 0; i < randomWord.length; i++);{
         if(randomWord[i] === letter){
             randWordArray[i] = randomWord[i];  

 }  
 }
//  input correct letter in place of dash
    document.getElementById("answer").textContent = randWordArray.join("");
}
else {
        // wrong letter adds +1 to wrong counter
        if (randomWord.indexOf(letter === -1)) {
            wrongCounter++;
            console.log(wrongCounter);
            console.log(letter);

            // display different levels of hangman with wrong answer
           if (wrongCounter == 1) {
                document.getElementById("mike2").style.display = "block";
            } 
            
            if (wrongCounter == 2) {
                document.getElementById("mike3").style.display = "block";
            } 
            
            if (wrongCounter == 3) {
                document.getElementById("mike4").style.display = "block";
            } 
            
            if (wrongCounter == 4) {
                document.getElementById("mike5").style.display = "block";
            } 
            
            if (wrongCounter == 5) {
                document.getElementById("mike6").style.display = "block";
            } 
            
            if (wrongCounter == 6) {
                document.getElementById("mike7").style.display = "block";
            } 
            

        }
    }
}






