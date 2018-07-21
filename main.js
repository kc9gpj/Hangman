// word choices for user
var words = [
    "abandon",
    "abnormal",
    "abomination",
    "afflicted",
    "aggravate",
    "agonize",
    "anxiety",
    "belligerent",
    "blood",
    "bones",
    "butcher",
    "cemetary",
    "chills",
    "revelation",
    "chopped",
    "convulse",
    "creepy",
    "damned",
    "delirious",
    "demonic",
    "depraved",
    "despicable",
    "devil",
    "dismember",
    "haunted",
    "gruesome",
    "graveyard",
    "grave",
    "fugitive",
    "dread",
    "merciless",
    "morbid",
    "purge",
    "satan",
    "scream",
    "wicked",
    "violent",
    "torment",
    "skeleton",
    "sinister",
    "horde",


]

// Array that holds random word
var randWordArray = [];

var randomWord = [];

var wrongCounter = 0;

var lettersUsed = [];

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
    if ( randWordArray.indexOf("_ ") > -1 )  {
          } 

    else {
        document.getElementById("win").innerText = "You Win!"
        // alert("You Win!");
        document.onkeyup = false; 

    }


}
        // wrong letter adds +1 to wrong counter
else if (randomWord.indexOf(letter) === -1) {
            lettersUsed.push(letter);
            console.log(lettersUsed);
            // counter goes up for wrong guess
            wrongCounter++;
            console.log(wrongCounter);
            document.getElementById("usedletters").innerText = lettersUsed;

            



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
                document.getElementById("answer").innerHTML = randomWord.slice(' ');


                 
            } 

            

        }
    }
// new game button to reload javascript
function newgame() {
    location.reload();
}








