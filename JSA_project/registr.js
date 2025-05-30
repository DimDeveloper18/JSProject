                            // Home page code
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

const btnSub = document.getElementById("subRegBtn");
btnSub.addEventListener("click", () => {
    floatLogForm.style.display = "block";
});

floatRegForm.addEventListener("submit", function(event){
    event.preventDefault();
    createStatusCell.innerText = "";

    const mail = document.getElementById("emailReg").value;
    const pass = document.getElementById("passwordReg").value;

    if (!mail || !pass){
        createStatusCell.innerText = '<p class= "error">" All fealds are required. </p>';
    }else if (pass.length < 6){
        createStatusCell.innerText = '<p class= "error"> Password must be at least 6 charachters long. </p>';
    }else {
        '<p class= "error">" You are regestered! </p>';
    }
});

floatLogForm.addEventListener("submit", function(event){
    event.preventDefault();
    createStatusCell.innerText = "";

    const mail = document.getElementById("emaillog").value;
    const pass = document.getElementById("passwordLog").value;

    if (!mail || !pass){
        createStatusCell.innerText = '<p class= "error">" All fealds are required. </p>';
    }else if (pass.length < 6){
        createStatusCell.innerText = '<p class= "error"> Password must be at least 6 charachters long. </p>';
    }else {
        '<p class= "error">" You are regestered! </p>';
    }
});

const regBox = document.getElementsByClassName("regbutt");
const createStatusCell = document.createElement("p");
createStatusCell.innerText = "User name";
const statusCell = document.getElementById(".status");
function createStatusBar(){
regBox.insertBefore(createStatusCell, btnReg);
};





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

                                // Basket button cod
                                
const btnBask = document.getElementById("bask");
const closeBaskWind = document.getElementById("closeBaskPrev");
const floatBaskWind = document.getElementById("baskPrev");
btnBask.addEventListener("click", () => {
    floatBaskWind.style.display = "block";
});
closeBaskWind.addEventListener("click", () => {
    floatBaskWind.style.display = "none";
});
