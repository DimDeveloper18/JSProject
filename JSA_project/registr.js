// Registration button code
document.addEventListener("DOMContentLoaded", function (){
const btnReg = document.getElementById("regBtn");
const floatForm = document.getElementById("regForm");
const closeWin = document.getElementById("closeBtn");
// Login button code
const btnLog = document.getElementById("logBtn");
const floatLogForm = document.getElementById ("logForm")

btnReg.addEventListener("click", () => {
    floatForm.style.display = "block";
});

btnLog.addEventListener("click", () => {
    floatLogForm.style.display = "block";
});

closeWin.addEventListener("click", () => {
    floatForm.style.display = "none";
});

});

// // Changing color by mouseover the aside head
// const martic2 = document.getElementsByClassName("martic");
// const asideHead = document.getElementsByTagName("h4");
// function changeColor(h4){
//     h4.style.color = "yellow";
// }
// asideHead.addEventListener("mouseover", () => asideHead.classList.add("highlight"));