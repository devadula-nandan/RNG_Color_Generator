//some shortcut functions
const qs = (query) => document.querySelector(`${query}`);
const qsa = (query) => document.querySelectorAll(`${query}`);
const ce = (element) => document.createElement(`${element}`);

//returns or gets array of corresponding key from ls
const lsgi = (key) => {
    if (localStorage.getItem(key) === null) {
        return key = [];
    } else {
        return key = JSON.parse(localStorage.getItem(key));
    }
}

//sets the modified array(value) to the corresponding key in ls
const lssi = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//an rng function , give parameters of lower and upper and it generates a random number within/including limits
const rng = (lower, upper) => Math.floor(lower + (upper + 1 - lower) * Math.random());



//default export
const def = () => console.log("Default export");

//exports
export { qs, qsa, ce, lsgi, lssi, rng };
export default def;
