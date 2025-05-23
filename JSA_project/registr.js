// Registration button code
const btnReg = document.getElementById("regBtn");
const floatForm = document.getElementById("regForm");

btnReg.addEventListener("click", () => {
    floatForm.style.display = "block";
});

// // Changing color by mouseover the aside head
// const martic2 = document.getElementsByClassName("martic");
// const asideHead = document.getElementsByTagName("h4");
// function changeColor(h4){
//     h4.style.color = "yellow";
// }
// asideHead.addEventListener("mouseover", () => asideHead.classList.add("highlight"));