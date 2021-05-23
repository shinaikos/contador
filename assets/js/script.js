const selector = select => document.querySelector(select);

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

function insertData(day, hour, minute, second) {
    selector("#counter-day span").innerHTML = day;
    selector("#counter-hour span").innerHTML = hour;
    selector("#counter-minute span").innerHTML = minute;
    selector("#counter-second span").innerHTML = second;
}
const getCurrentDate = () => Date.now();


const getTargetDate = () => {
    let getDate = document.querySelector("input").value;
    let targetDate = new Date(getDate);
    return targetDate.getTime();
}

const intervalDate = () => getTargetDate() - getCurrentDate();

function transform() {
    let interval = parseInt(intervalDate());
    let seconds = interval / 1000;
    seconds += 10800;
    let dias = seconds / 86400;
    let hours = (seconds % 86400) / 3600;
    let minutes = (seconds % 3600) / 60;
    seconds = seconds % 60
    dias = parseInt(dias);
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds)

    insertData(dias, hours, minutes, seconds)
}

function start() {
    getTargetDate();
    setInterval(transform, 1000)
}

function restart() {
    setTimeout(transform)
    dateMin()
}

function dateMin() {
    let date = new Date();
    let ano = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    let setDate = document.querySelector("input");
    setDate.setAttribute("value", `${ano}-0${month+1}-${day+1}`)
    setDate.setAttribute("min", `${ano}-0${month+1}-${day+1}`);
}
dateMin();