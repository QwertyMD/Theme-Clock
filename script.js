const timeSec = document.querySelector(".time-section");
const dateSec = document.querySelector(".date-section");
const info = new Date();
const dayIdx = info.getDay();
const date = info.getDate();
const monthIdx = info.getMonth();
const year = info.getFullYear();
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getTime() {
  const info = new Date();
  let hrs = info.getHours();
  let mins = info.getMinutes();
  let secs = info.getSeconds();
  let ampm = hrs < 12 ? `AM` : `PM`;
  hrs = hrs % 12 || 12;
  mins = mins < 10 ? `0` + `${mins}` : mins;
  secs = secs < 10 ? `0` + `${secs}` : secs;

  timeSec.innerHTML = `
        <h1>${hrs}:${mins}:</h1>
        <h2>${secs}</h2>
        <h3>${ampm}</h3>`;
}
getTime();

dateSec.innerHTML = `
        <h1>${day[dayIdx]}</h1>
        <h2>${month[monthIdx]} ${date}, ${year}</h2>`;

setInterval(() => {
  getTime();
}, 1000);

const svgs = document.querySelectorAll("svg");
const root = document.querySelector(":root");
let isDefault = true;

svgs.forEach((element) => {
  element.addEventListener("click", () => {
    svgs.forEach((element) => {
      element.classList.toggle("hidden");
    });
    if (isDefault) {
      root.style.setProperty(`--bgCol`, `#fff`);
      root.style.setProperty(`--textCol`, `#000`);
      root.style.setProperty(`--contentCol`, `aliceblue`);
    } else {
      root.style.setProperty(`--bgCol`, ``);
      root.style.setProperty(`--textCol`, ``);
      root.style.setProperty(`--contentCol`, ``);
    }
    isDefault = !isDefault;
  });
});
