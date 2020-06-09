const typingSpan = document.querySelector(".typing");
const typeText = ["code.", "drive.", "listen to music.", "go to the gym.", "play guitar."];
const typingDelay = 200;
const deleteDelay = 100;
const newTextDelay = 2000;
let textIndex = 0;
let letterIndex = 0;

function type() {
   if (letterIndex < typeText[textIndex].length) {
    typingSpan.textContent += typeText[textIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
   } else {
       setTimeout(delText, newTextDelay);
   }
};

function delText() {
    if (letterIndex > 0) {
        typingSpan.textContent = typeText[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(delText, deleteDelay);
    } else {
        textIndex++;
        if (textIndex >= typeText.length)
            textIndex = 0;
            setTimeout(type, typingDelay + 1000);
    }
};

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingDelay + 800);
});
    
