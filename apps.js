'use strict';

// Function to ask the user's name and display it
function nameFirst() {
    let userName = prompt('What is your name?');
    if (userName) {
        document.write('Hello, ' + userName + ', nice to meet you!');
    } else {
        document.write('Hello, guest! Nice to meet you!');
    }
}

// Function to display a message based on the user's movie input
function displayMessage() {
    let movie = prompt('What is your favorite scary movie?');

    // Get the HTML element with id="message"
    let messageElement = document.getElementById('message');
    
    if (!messageElement) {
        console.error('Element with id "message" not found.');
        return;
    }

    if (movie) {
        messageElement.innerHTML = 'Wow! ' + movie + ' is really scary!';
    } else {
        messageElement.innerHTML = 'You did not enter a movie!';
    }
}

// Main function to handle the process
function handleMovieInput() {
    displayMessage(); // Call the function to display the message
}
