/*
// NAME: There is no monkey
// CONTRIBUTORS: Steph Koopmanschap
// VERSION: 1.0
*/

const MonkeyContainer = document.getElementById('thereisnomonkey');
//How many times per miliseconds to write 'there is no monkey'
var NoMonkeySpeed = 100;

//returns a random integer between min and max
function randIntRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Returns a random integer between 0 and screenWidth (create random point on x-axis)
function randIntX() {
    //return randIntRange(0, window.innerWidth);
    return randIntRange(0, window.innerWidth);
}

//Returns a random integer between 0 and ScreenHeight (create random point on x-axis)
function randIntY() {
    //return randIntRange(0, window.innerHeight);
    return randIntRange(0, window.innerHeight);
}

function ThereIsNoMonkey() {
    //Write 'there is no monkey' somewhere randomly on the screen
    let noMonkey = document.createElement('h2');
    noMonkey.style.position = "absolute";
    noMonkey.style.left = randIntX() + "px";
    noMonkey.style.top = randIntY() + "px";
    noMonkey.innerHTML = "There is no monkey"; 
    MonkeyContainer.appendChild(noMonkey);
}

function noMonkeys() {
    setInterval(ThereIsNoMonkey, NoMonkeySpeed); 
}