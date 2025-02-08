const element = document.getElementById("dynamic-text");
const textArray = ["פתרונות טכנולוגים", "מקסימום אוטומט"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        // מחיקת האותיות האחרונות בטקסט
        element.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="caret">|</span>';
        charIndex--;
        typingSpeed = 50;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    } else {
        // הוספת אותיות לטקסט
        element.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="caret">|</span>';
        charIndex++;
        typingSpeed = 150;
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000; // השהייה קצרה לפני מחיקה
        }
    }
    setTimeout(type, typingSpeed);
}

// התחלת האנימציה
type();


function toggleMenu() {
const menu = document.querySelector('.menu');
menu.classList.toggle('show'); // מציג/מסתיר את התפריט
}

// סגירת התפריט בלחיצה מחוץ לתפריט
document.addEventListener('click', function(event) {
const navbar = document.querySelector('.navbar');


// בודק שההקלקה היא מחוץ לתפריט
if (!navbar.contains(event.target)) {
menu.classList.remove('show'); // הסתרת התפריט
}
})

/*start card*/
document.querySelectorAll(".card-1").forEach(card => {
    card.dataset.originalText = card.innerText; // שמירת הטקסט המקורי

    card.addEventListener("mouseenter", () => {
        card.innerText = card.dataset.alt; // שינוי לטקסט החדש
    });

    card.addEventListener("mouseleave", () => {
        card.innerText = card.dataset.originalText; // החזרת הטקסט המקורי
    });
});
/*end card*/