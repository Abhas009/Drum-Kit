// Get the number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add event listener to each drum button
for(var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

// Function to handle button click
function handleClick() {
    var clickButton = this.innerHTML;
    makenoise(clickButton);
    buttonanimation(clickButton);    
}

// Add event listener for keydown event
document.addEventListener("keydown", function(event) {   //here event inside the function is just a parameter, you can write it or not, it will not affect our code* .
    var key = event.key;
    makenoise(key);
    buttonanimation(key);
});

// Function to play sound based on key/button clicked
function makenoise(key) {
    switch(key) {
        case 'w':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case 'a':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case 's':
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case 'd':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case 'j':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case 'k':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case 'l':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
    }
}


//Set Timout - When we pressed the button it animated and turn it back, animation are done in style.css (.pressed class)
function buttonanimation(key)
{
    var currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");

    setTimeout(() => {
      currentKey.classList.remove("pressed");
    }, 100);
}



// Other commented-out parts of your code
/*
var sound = new Audio("sounds/tom-1.mp3");
sound.play();

console.log(this.innerHTML);

if(this.innerHTML === 'w')
{
    document.querySelector(".w").style.color = "white";
}

switch(this.innerHTML) {
    case 'w':
        document.querySelector(".w").style.color = "white";
        break;
    case 'a':
        document.querySelector(".a").style.color = "white";
        break;
    case 's':
        document.querySelector(".s").style.color = "white";
        break;
    case 'd':
        document.querySelector(".d").style.color = "white";
        break;
    case 'j':
        document.querySelector(".j").style.color = "white";
        break;
    case 'k':
        document.querySelector(".k").style.color = "blue";
        break;
    case 'l':
        document.querySelector(".l").style.color = "white";
        break;
    default:
        break;
}

switch(this.innerHTML) {
    case 'w':
        this.style.color = "white";
        break;
    case 'a':
        this.style.color = "white";
        break;
    case 's':
        this.style.color = "white";
        break;
    case 'd':
        this.style.color = "white";
        break;
    case 'j':
        this.style.color = "white";
        break;
    case 'k':
        this.style.color = "blue";
        break;
    case 'l':
        this.style.color = "white";
        break;
    default:
        break;
}
*/
