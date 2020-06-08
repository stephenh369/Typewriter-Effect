const typeText = ["code.", "drive.", "listen to music.", "go to the gym.", "play guitar."];
let count = 0;
let index = 0;
let currentText = "";
let textLetter = "";

(function type() {
    if (count === typeText.length) {
        count = 0;
    }
    currentText = typeText[count];
    textLetter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = textLetter;
    if (textLetter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 300);
})();