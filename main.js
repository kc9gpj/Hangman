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

var randomWord = [];

var wrongCounter = 0;

var lettersUsed = [];

console.log(lettersUsed);


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
        document.getElementById("answer").innerHTML = randWordArray.join(' ');
        console.log(randomWord[i]);
        console.log(randWordArray);
    }

function userGuess(letter){
    lettersUsed = letter;
    console.log(letter);
    console.log(randomWord.indexOf(letter));
// loop that cycles guessed letter through word
if (randomWord.indexOf(letter) >= 0) {
    for (var j = 0; j < randomWord.length; j++){
         if(randomWord[j] === letter) {
             randWordArray[j] = letter; 
             console.log(randWordArray[j]);
             
 }  
//  replace dash with letter
 document.getElementById("answer").innerHTML = randWordArray.join(' ');

 } 
//  input correct letter in place of dash
    console.log(randWordArray);

}
        // wrong letter adds +1 to wrong counter
else if (randomWord.indexOf(letter) === -1) {
            lettersUsed  = letter;
            // counter goes up for wrong guess
            wrongCounter++;
            console.log(wrongCounter);
            document.getElementById("usedletters").innerHTML = lettersUsed.push;
            



            // display different levels of hangman wnen wrongCounter goes up
            if (wrongCounter === 1) {
                document.getElementById("mike1").style.display = "none";
                document.getElementById("mike2").style.display = "block";
                document.getElementById("mike3").style.display = "none";
                document.getElementById("mike4").style.display = "none";
                document.getElementById("mike5").style.display = "none";
                document.getElementById("mike6").style.display = "none";
                document.getElementById("mike7").style.display = "none";
            } 
            
            if (wrongCounter === 2) {
                document.getElementById("mike1").style.display = "none";
                document.getElementById("mike2").style.display = "none";
                document.getElementById("mike3").style.display = "block";
                document.getElementById("mike4").style.display = "none";
                document.getElementById("mike5").style.display = "none";
                document.getElementById("mike6").style.display = "none";
                document.getElementById("mike7").style.display = "none";
            } 
            
            if (wrongCounter === 3) {
                document.getElementById("mike1").style.display = "none";
                document.getElementById("mike2").style.display = "none";
                document.getElementById("mike3").style.display = "none";
                document.getElementById("mike4").style.display = "block";
                document.getElementById("mike5").style.display = "none";
                document.getElementById("mike6").style.display = "none";
                document.getElementById("mike7").style.display = "none";            
            } 
            
            if (wrongCounter === 4) {
                document.getElementById("mike1").style.display = "none";
                document.getElementById("mike2").style.display = "none";
                document.getElementById("mike3").style.display = "none";
                document.getElementById("mike4").style.display = "none";
                document.getElementById("mike5").style.display = "block";
                document.getElementById("mike6").style.display = "none";
                document.getElementById("mike7").style.display = "none";            
            } 
            
            if (wrongCounter === 5) {
                document.getElementById("mike1").style.display = "none";
                document.getElementById("mike2").style.display = "none";
                document.getElementById("mike3").style.display = "none";
                document.getElementById("mike4").style.display = "none";
                document.getElementById("mike5").style.display = "none";
                document.getElementById("mike6").style.display = "block";
                document.getElementById("mike7").style.display = "none";            
            } 
            
            if (wrongCounter === 6) {
                document.getElementById("mike1").style.display = "none";
                document.getElementById("mike2").style.display = "none";
                document.getElementById("mike3").style.display = "none";
                document.getElementById("mike4").style.display = "none";
                document.getElementById("mike5").style.display = "none";
                document.getElementById("mike6").style.display = "none";
                document.getElementById("mike7").style.display = "block"; 
                // block onkeyup when counter is at 6   
                document.onkeyup = false; 

                 
            } 

            

        }
    }
// new game button to reload javascript
function newgame() {
    location.reload();
}






