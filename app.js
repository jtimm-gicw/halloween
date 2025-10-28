// ==============================
// Greeting: ask the user's name
// ==============================
function nameFirst() {
  let userName = prompt('What is your name?');
  let welcomeElement = document.getElementById('welcome-message');

  if (welcomeElement) {
    if (userName) {
      welcomeElement.textContent = 'Hello, ' + userName + ', nice to meet you!';
    } else {
      welcomeElement.textContent = 'Hello, Guest! Nice to meet you!';
    }
  } else {
    console.error('Element with id "welcome-message" not found.');
  }
}

// ==================================================
// Favorite scary movie: show a message based on input
// ==================================================
function displayMessage() {
  let movie = prompt('What is your favorite scary movie?');
  let messageElement = document.getElementById('message');

  if (!messageElement) {
    console.error('Element with id "message" not found.');
    return;
  }

  messageElement.textContent = movie
    ? 'Wow! ' + movie + ' is really scary!'
    : 'You did not enter a movie!';
}

// =======================================
function handleMovieInput() {
  displayMessage();
}

// ==========================================================
function getNextHalloweenDate() {
  const now = new Date();
  const year = now.getFullYear();
  const thisYearHalloween = new Date(year, 9, 31, 0, 0, 0, 0); // Oct = 9
  return now <= thisYearHalloween ? thisYearHalloween : new Date(year + 1, 9, 31, 0, 0, 0, 0);
}

// ==========================================
let countdownTimerId = null;

function updateCountdown() {
  const targetDate = getNextHalloweenDate().getTime();
  const now = Date.now();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById('countdown');
  if (!countdownElement) return; // quietly skip if not on this page

  if (timeLeft <= 0) {
    countdownElement.textContent = 'Happy Halloween!';
    if (countdownTimerId) clearInterval(countdownTimerId);
    return;
  }

  countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// =====================================
function halloweenDate() {
  let answer = prompt('What date is Halloween on? (Enter the day number e.g. 31)');
  while (answer !== null && Number(answer) !== 31) {
    alert('Try again!');
    answer = prompt('What date is Halloween on?');
  }
  if (answer !== null) {
    alert('Correct! Halloween is October 31st.');
  }
}

// ==================================================
function displayRating() {
  let rating = prompt('Scale of 1-5, how many pumpkins?');
  if (rating === null) return;

  let count = parseInt(rating, 10);
  if (Number.isNaN(count)) count = 0;
  if (count < 0) count = 0;
  if (count > 5) count = 5;

  let output = '';
  for (let i = 0; i < count; i++) {
    output += "<img class='pumpkin' src='Images/Jackolantern.jpg' alt='Pumpkin' />";
  }

  let comment = '';
  switch (count) {
    case 1: comment = "🎃 Dried Zombies Taste Better."; break;
    case 2: comment = "🕷️ A Bit Creepy… but You’ll Eat It Anyway."; break;
    case 3: comment = "👻 Sweetly Spooky!"; break;
    case 4: comment = "🦇 Fang-Tastic Choice!"; break;
    case 5: comment = "🕸️ Ghoulishly Delicious!"; break;
    default: comment = "💀 No rating? The spirits are confused!";
  }

  const box = document.getElementById('pumpkin');
  if (box) {
    box.innerHTML = output + `<p class="rating-comment">${comment}</p>`;
  } else {
    console.error("Element with id 'pumpkin' not found.");
  }
}

// =====================================================
function enableImageShake() {
  const images = document.querySelectorAll('.shakableImage');
  if (!images.length) return;

  images.forEach((image) => {
    image.addEventListener('mouseenter', function () {
      image.classList.add('shake');
      setTimeout(function () {
        image.classList.remove('shake');
      }, 500);
    });
  });
}

/* ==========================================================
   Only show pop-up prompts on the Home page
   - Works if your home is "/" or ".../index.html"
   - Also supports <body data-page="home"> (recommended)
   ========================================================== */
function isHomePage() {
  const p = (window.location.pathname || '').toLowerCase();

  // Recommended explicit flag:
  if (document.body?.dataset?.page === 'home') return true;

  // Fallback based on URL:
  return p.endsWith('/index.html') || p === '/' || p === '';
}

// ============================================================
// Bootstrap: wait until the HTML is ready, then run everything
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  // Shared features for all pages
  if (document.getElementById('countdown')) {
    updateCountdown();
    countdownTimerId = setInterval(updateCountdown, 1000);
  }
  enableImageShake();

  // Prompts only on Home
  if (isHomePage()) {
    nameFirst();
    handleMovieInput();
    halloweenDate();
    displayRating();
  }
});
