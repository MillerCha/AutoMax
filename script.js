const element = document.getElementById("dynamic-text");
const textArray = ["פתרונות טכנולוגים", "מקסימום אוטומט"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        // Deleting the last letters in the text
        element.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="caret">|</span>';
        charIndex--;
        typingSpeed = 50;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    } else {
         // Adding letters to the text
        element.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="caret">|</span>';
        charIndex++;
        typingSpeed = 150;
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // Short delay before deletion
        }
    }
    setTimeout(type, typingSpeed);
}

// Start the animation
type();


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show'); // Shows/hides the menu
}

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar');


    // Checks if the click is outside the menu
    if (!navbar.contains(event.target)) {
        menu.classList.remove('show'); // Hides the menu
    }
})

/*start card*/
document.querySelectorAll(".card-1").forEach(card => {
    card.dataset.originalText = card.innerText; // Saves the original text

    card.addEventListener("mouseenter", () => {
        card.innerText = card.dataset.alt; // Changes to the new text
    });

    card.addEventListener("mouseleave", () => {
        card.innerText = card.dataset.originalText; // Restores the original text
    });
});
/*end card*/