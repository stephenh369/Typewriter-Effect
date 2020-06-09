const typingSpan = document.querySelector(".typing");
const cursor = document.querySelector(".cursor");
const solidCursor = document.querySelector(".solidCursor");
const typeText = ["code.", "drive.", "listen to music.", "go to the gym.", "play guitar."];
const typingDelay = 200;
const deleteDelay = 100;
const newTextDelay = 2000;
let textIndex = 0;
let letterIndex = 0;
solidCursor.classList.remove("solidCursor");

function type() {
    cursor.classList.remove("cursor");
    solidCursor.classList.add("solidCursor");
    if (letterIndex < typeText[textIndex].length) {
    typingSpan.textContent += typeText[textIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
   } else {
       setTimeout(delText, newTextDelay);
       solidCursor.classList.remove("solidCursor");
       cursor.classList.add("cursor");
   }
};

function delText() {
    cursor.classList.remove("cursor");
    solidCursor.classList.add("solidCursor");
    if (letterIndex > 0) {
        typingSpan.textContent = typeText[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(delText, deleteDelay);
    } else {
        textIndex++;
        solidCursor.classList.remove("solidCursor");
       cursor.classList.add("cursor");
        if (textIndex >= typeText.length)
            textIndex = 0;
            setTimeout(type, typingDelay + 1000);
            
    }
};

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingDelay + 800);
});
    
