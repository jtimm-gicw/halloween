window.onload = function() {
    // Prompt the user with a question
    let userInput = prompt("What is your favorite scary movie?", "Friday the 13th");

    // Check if the userInput is not null (i.e., they didn't cancel the prompt)
    if (userInput) {
        // Set the innerHTML of the paragraph to the user's input
        document.getElementById('movie-response').innerHTML = 'Wow! ' + userInput + ' is really scary!';
    } else {
        // If the user didn't enter anything, display a default message
        document.getElementById('movie-response').innerHTML = 'You didn’t enter a movie!';
    }
};
    