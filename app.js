//refresh the page

//some shortcut functions
function qs(query) {
    return document.querySelector(`${query}`);
}
function qsa(query) {
    return document.querySelectorAll(`${query}`);
}
//an rng function
function rng(lower, upper) {
    return Math.floor(lower + (upper + 1 - lower) * Math.random());
}

//by creating hex code
qs(".clr0").style.backgroundColor = randomColor();
function randomColor() {
    const hexCharecters = "0123456789ABCDEF";
    let hash = "#"
    for (i = 0; i < 6; i++) {
        hash += hexCharecters[Math.floor(Math.random() * 16)];
    }
    return hash;
}

//different approach with rgb achieved in one line
qs(".clr1").style.backgroundColor = `rgb(${rng(0, 255)},${rng(0, 255)},${rng(0, 255)})`;

//different approach with hsl achieved in one line
qs(".clr2").style.backgroundColor = `hsl(${rng(0, 360)},${rng(0, 100)}%,${rng(0, 100)}%)`;

