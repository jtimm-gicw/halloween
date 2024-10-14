'strict use'

window.onload = function() {
    // Prompt the user with a question
    let userInput = prompt("What is your favorite scary movie?", "Friday the 13th");
    console.log ('Wow!' + userInput + 'is really scary')
}

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
}

const image = document.getElementById('shakableImage');

    // Add event listener for the image
    image.addEventListener('click', function() {
      // Add the shake class
      image.classList.add('shake');

      // Remove the shake class after the animation is done (500ms in this case)
      setTimeout(function() {
        image.classList.remove('shake');
      }, 500);
    });



