// Function to ask the user's name and display it
function nameFirst() {
    let userName = prompt('What is your name?');
    let welcomeElement = document.getElementById('welcome-message');
 
    if (welcomeElement) {
        if (userName) {
            welcomeElement.innerHTML = 'Hello, ' + userName + ', nice to meet you!';
        } else {
            welcomeElement.innerHTML = 'Hello, Guest! Nice to meet you!';
        }
    } else {
        console.error('Element with id "welcome-message" not found.');
    }
}
 
// Function to display a message based on the user's movie input
function displayMessage() {
    let movie = prompt('What is your favorite scary movie?');
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
 
// Main function to handle the movie input
function handleMovieInput() {
    displayMessage();
}
 
// Countdown function for Halloween
function updateCountdown() {
    const targetDate = new Date("October 31, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
 
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
 
    const countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        console.error('Countdown element not found');
    }
 
    if (timeLeft < 0) {
        countdownElement.innerHTML = "Happy Halloween!";
    }
}
 
// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    nameFirst();
    handleMovieInput();
    setInterval(updateCountdown, 1000); // Start countdown timer
});

function halloweenDate() {
    let answer = prompt('What date is Halloween on?');  // Ask for the answer before the loop

    while (answer != 31) {   // Keep looping if the answer is not 31
        alert('Try again!');
        answer = prompt('What date is Halloween on?');  // Ask again inside the loop
    }

    alert('Correct! Halloween is October 31st.');
}

halloweenDate ()

function displayRating() {
    let output = '';
    let rating = prompt('Scale of 1-5, How many pumpkins?');
    for(let i = 0; i < rating; i++){
        output += "<img class='pumpkin' src='Images/Jackolantern.jpg' />";
    }

    // Inject the output into the div instead of using document.write
    document.getElementById('pumpkin').innerHTML = output;
}


displayRating()