
import { qs, qsa, ce, lsgi, lssi, rng } from "./myUtils.js";

class ColorGenerator {
    constructor() {
        this.colorBlocksRange = [2, 10]

    }
    createBlock(number = 1, pos) {
        let i;
        for (i = 0; i < number; i++) {
            const newColorBlock = ce("div");
            const controls = ce("div");
            const deleteColor = ce("div");
            const cross1 = ce("div");
            const cross2 = ce("div");
            cross1.classList.add("cross1");
            controls.classList.add("controls");
            cross2.classList.add("cross2");
            deleteColor.classList.add("del");
            deleteColor.setAttribute('title', "delete");
            newColorBlock.classList.add("clr");
            newColorBlock.addEventListener("wheel", (we) => {
                we.target.style.backgroundColor = `rgb(${rng(0, 255)},${rng(0, 255)},${rng(0, 255)})`;
            });
            newColorBlock.addEventListener("mousedown", (e) => {
                if (e.which == 3) {
                    switch (e.target.classList[0]) {
                        case "del":
                            e.target.style.backgroundColor = "rgb(216, 216, 216)";
                            break;
                        case "cross1":
                        case "cross2":
                            e.target.style.backgroundColor = "rgb(121, 121, 121)";
                            break;
                        case "controls":
                            e.target.style.backgroundColor = "rgba(0,0,0,0)";
                            break;
                    }

                }

            });
            newColorBlock.addEventListener("click", (e) => {
                navigator.clipboard.writeText(e.target.style.backgroundColor);
            });
            newColorBlock.style.backgroundColor = `rgb(${rng(0, 255)},${rng(0, 255)},${rng(0, 255)})`;
            deleteColor.addEventListener("click", (e) => {
                e.path[2].remove()
                this.colorBlocksRange[0]--;
            });
            deleteColor.appendChild(cross1);
            deleteColor.appendChild(cross2);
            controls.appendChild(deleteColor);
            newColorBlock.appendChild(controls);
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
window.addEventListener("contextmenu", e => e.preventDefault());
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

