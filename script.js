const selector = select => document.querySelector(select);

const date = selector("#date");
const day = selector("#counter-day");
const hour = selector("#counter-hour");
const minute = selector("#counter-minute");
const seconds = selector("counter-seconds");

selector("#submit").addEventListener("click", () => {
    const primary = selector("#principal");
    const secondary = selector("#secundario");
    if (primary.style.display != "none") {
        primary.style.display = "none";
        secondary.style.display = "flex"
    }
});
selector("#restart").addEventListener("click", () => {
    const primary = selector("#secundario");
    const secondary = selector("#principal");
    if (primary.style.display != "none") {
        primary.style.display = "none";
        secondary.style.display = "flex"
    }
});

function updateCounter() {

}