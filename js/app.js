// nejakej random ass anti scroll yk proste proc by jsi to delall???
document.addEventListener("keydown", function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.shiftKey && e.key === "C") || (e.ctrlKey && e.key === "u") || (e.ctrlKey && e.key === "s") || (e.ctrlKey && e.key === "p") || (e.ctrlKey && e.key === "g") || (e.ctrlKey && e.key === "f") || (e.ctrlKey && e.key === "o") || (e.ctrlKey && e.key === "j") || (e.ctrlKey && e.key === "h") || (e.ctrlKey && e.key === "d") || (e.ctrlKey && e.key === "+") || (e.ctrlKey && e.key === "-")) {
        e.preventDefault();
    }
});
(function() {
    let SSWZ = function() {
        this.keyScrollHandler = function(e) {
            if (e.ctrlKey) {
                e.preventDefault();
                return false;
            }
        };
    };
    if (window === top) {
        let sswz = new SSWZ();
        window.addEventListener("wheel", sswz.keyScrollHandler, {
            passive: false
        });
    }
})();


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// tohle meni title stranky a dole mas timeout na to aby se to zmenilo
const msg = " MAX ";
const symbols = "!<>-_\\/[]{}—=+*^?#";
let displayText = "";
let index = 0;
let adding = true;

function typewriterEffect() {
    if (adding) {
        displayText += symbols[Math.floor(Math.random() * symbols.length)];
        setTimeout(() => {
            displayText = displayText.slice(0, -1) + msg[index];
            index++;
            if (index >= msg.length) {
                adding = false;
                index = msg.length;
            }
            setTimeout(typewriterEffect, 500);
        }, 100);
    } else {
        if (index > 0) {
            displayText = displayText.slice(0, -1);
            index--;
            setTimeout(typewriterEffect, 500);
        } else {
            adding = true;
            index = 0;
            setTimeout(typewriterEffect, 500);
        }
    }
    document.title = displayText;
}

typewriterEffect();


