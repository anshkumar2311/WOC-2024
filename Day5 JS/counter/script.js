// innerText = textContent
const decbtn = document.getElementById("decbtn");
const incbtn = document.getElementById("incbtn");
const resbtn = document.getElementById("resbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;
incbtn.onclick = function () {
    count++;
    countlabel.textContent = count;
}
decbtn.onclick = function () {
    count--;
    countlabel.innerText = count;
}
resbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}
