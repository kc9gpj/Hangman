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
// random word pick
var randomWord = words[Math.floor(Math.random() * words.length)];

// array to output html underscore for each letter of picked random word
    var randWordArray = [];
    for (var i = 0; i < randomWord.length; i++){
    randWordArray[i] = "_ ";
}

document.getElementById("answer").innerHTML = (randWordArray.join(" "));




// var randWordArray = [];
// for (var i = 0; i < randomWord.length; i++); {
//     randWordArray[i] = "_ ";
// }



// functions to make letter display none when chosen by the user
function aFunction() {
    document.getElementById("a").style.display = "none"; 
    }

function bFunction() {
    document.getElementById("b").style.display = "none";
}
function cFunction() {
    document.getElementById("c").style.display = "none";
}
function dFunction() {
    document.getElementById("d").style.display = "none";
}
function eFunction() {
    document.getElementById("e").style.display = "none";
}
function fFunction() {
    document.getElementById("f").style.display = "none";
}
function gFunction() {
    document.getElementById("g").style.display = "none";
}
function hFunction() {
    document.getElementById("h").style.display = "none";
}
function iFunction() {
    document.getElementById("i").style.display = "none";
}
function jFunction() {
    document.getElementById("j").style.display = "none";
}
function kFunction() {
    document.getElementById("k").style.display = "none";
}
function lFunction() {
    document.getElementById("l").style.display = "none";
}
function mFunction() {
    document.getElementById("m").style.display = "none";
}
function nFunction() {
    document.getElementById("n").style.display = "none";
}
function oFunction() {
    document.getElementById("o").style.display = "none";
}
function pFunction() {
    document.getElementById("p").style.display = "none";
}
function qFunction() {
    document.getElementById("q").style.display = "none";
}
function rFunction() {
    document.getElementById("r").style.display = "none";
}
function sFunction() {
    document.getElementById("s").style.display = "none";
}
function tFunction() {
    document.getElementById("t").style.display = "none";
}
function uFunction() {
    document.getElementById("u").style.display = "none";
}
function vFunction() {
    document.getElementById("v").style.display = "none";
}
function wFunction() {
    document.getElementById("w").style.display = "none";
}
function xFunction() {
    document.getElementById("x").style.display = "none";
}
function yFunction() {
    document.getElementById("y").style.display = "none";
}
function zFunction() {
    document.getElementById("z").style.display = "none";
}







