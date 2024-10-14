window.onload = function() {
    // Prompt the user with a question
    let userInput = prompt("What is your favorite scary movie?", "Friday the 13th");
}

    // Check if the userInput is not null (i.e., they didn't cancel the prompt)
    if (userInput) {
        document.getElementById('movie-response').innerHTML = 'Wow! ' + userInput + ' is really scary!';

    } else {
        document.getElementById('movie-response').innerHTML = 'You didn’t enter a movie!';
    }

    // Select all images with the class 'shakableImage'
    