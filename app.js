//some shortcut functions
qs = (query) => document.querySelector(`${query}`);
qsa = (query) => document.querySelectorAll(`${query}`);
ce = (element) => document.createElement(`${element}`);
lsgi = (key) => {//returns or gets array of corresponding key from ls
    if (localStorage.getItem(key) === null) {
        return key = [];
    } else {
        return key = JSON.parse(localStorage.getItem(key));
    }
}
lssi = (key, value) => {//sets the modified array(value) to the corresponding key in ls
    localStorage.setItem(key, JSON.stringify(value));
}
//an rng function
const rng = (lower, upper) => Math.floor(lower + (upper + 1 - lower) * Math.random());

class ColorGenerator {
    constructor() {
        this.colorBlocksRange = [2, 10]

    }
    createBlock(number = 1, pos) {
        let i;
        for (i = 0; i < number; i++) {
            const newColorBlock = ce("div");
            const deleteColor = ce("div");
            const deleteIcon = ce("i");
            deleteIcon.classList.add("fas");
            deleteIcon.classList.add("fa-times");
            deleteColor.classList.add("del");
            newColorBlock.classList.add("clr");
            newColorBlock.addEventListener("dblclick", (e) => {
                e.target.style.backgroundColor = `rgb(${rng(0, 255)},${rng(0, 255)},${rng(0, 255)})`;
            });
            newColorBlock.addEventListener("click", (e) => {
                navigator.clipboard.writeText(e.target.style.backgroundColor);
            });
            newColorBlock.style.backgroundColor = `rgb(${rng(0, 255)},${rng(0, 255)},${rng(0, 255)})`;
            deleteColor.addEventListener("click", (e) => {
                console.log(e.target.parentElement.remove());
                this.colorBlocksRange[0]--;
            });
            deleteColor.appendChild(deleteIcon);
            newColorBlock.appendChild(deleteColor);
            pos == "left" ? qs(".main").insertBefore(newColorBlock, qs(".main").childNodes[0]) : qs(".main").appendChild(newColorBlock);
        }
    }
    addMore(e) {

        if (this.colorBlocksRange[0] < this.colorBlocksRange[1]) {
            if (e.target.classList.contains("ambr")) {
                this.createBlock(1, "right");
            } else if ((e.target.classList.contains("ambl"))) {
                this.createBlock(1, "left");
            }
            this.colorBlocksRange[0]++;
        }
    }
    deleteColor(e) {
        console.log(e);
    }


}

const CGApp = new ColorGenerator();

CGApp.createBlock(2, "right");



//eventlistners
qs(".del").addEventListener("click", (e) => {
    CGApp.deleteColor(e);
})
qsa(".amb").forEach(element => {
    element.addEventListener("click", (e) => {
        CGApp.addMore(e);
    });
});






















// //refresh the page


// //an rng function
// function rng(lower, upper) {
//     return Math.floor(lower + (upper + 1 - lower) * Math.random());
// }

// //by creating hex code
// qs(".clr0").style.backgroundColor = randomColor();
// function randomColor() {
//     const hexCharecters = "0123456789ABCDEF";
//     let hash = "#"
//     for (i = 0; i < 6; i++) {
//         hash += hexCharecters[Math.floor(Math.random() * 16)];
//     }
//     return hash;
// }

// //different approach with rgb achieved in one line
// qs(".clr1").style.backgroundColor = `rgb(${rng(0, 255)},${rng(0, 255)},${rng(0, 255)})`;

// //different approach with hsl achieved in one line
// qs(".clr2").style.backgroundColor = `hsl(${rng(0, 360)},${rng(0, 100)}%,${rng(0, 100)}%)`;

