// Registration button code

const floatRegForm = document.getElementById("regForm");
const closeWinReg = document.getElementById("closeBtnReg");
const btnReg = document.getElementById("regBtn");
btnReg.addEventListener("click", () => {
    floatRegForm.style.display = "block";
});
closeWinReg.addEventListener("click", () => {
    floatRegForm.style.display = "none";
});

// Login button code

const btnLog = document.getElementById("logBtn");
const floatLogForm = document.getElementById ("logForm")
const closeWinLog = document.getElementById("closeBtnLog");
btnLog.addEventListener("click", () => {
    floatLogForm.style.display = "block";
});
closeWinLog.addEventListener("click", () => {
    floatLogForm.style.display = "none";
});

// Submit button code

const regBox = document.getElementsByClassName("regbutt");
const createStatusCell = document.createElement("p");
createStatusCell.innerText = "User name";
const statusCell = document.getElementById(".status");
regBox.insertBefore(createStatusCell, btnReg);

floatRegForm.addEventListener("submit", function(event){
    event.preventDefault();
    createStatusCell.innerHTML = "";
});



// const areaReg = document.getElementsByClassName("regbutt");
// const btnSub = document.getElementById("subLogBtn");
// const addStatusCell = () => {
//     const statusCell = document.createElement("div");
//     statusCell.innerText = "text";
//     statusCell.classList.add("status");
//     areaReg.appendChild(statusCell);
// }
// addStatusCell();

// btnSub.addEventListener("click", () => {
//     addStatusCell.style.display = "inline-block";
// });

// // Changing color by mouseover the aside head
// const martic2 = document.getElementsByClassName("martic");
// const asideHead = document.getElementsByTagName("h4");
// function changeColor(h4){
//     h4.style.color = "yellow";
// }
// asideHead.addEventListener("mouseover", () => asideHead.classList.add("highlight"));
