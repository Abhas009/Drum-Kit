# Drum-Kit
This is a simple drum kit web application that allows users to play drum sounds by clicking on buttons or pressing corresponding keys on their keyboard.

# How It Works
The script gets the number of drum buttons on the page and adds a click event listener to each button.
When a button is clicked, the handleClick function is called, which extracts the innerHTML of the clicked button (corresponding to the drum sound) and passes it to the makenoise function.
The makenoise function uses a switch statement to determine which drum sound to play based on the key/button clicked.

# Usage
Click on the drum buttons to play the associated drum sound.
Press the keys 'w', 'a', 's', 'd', 'j', 'k', 'l' on your keyboard to play the drum sounds.
