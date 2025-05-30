// Aside JavaScript code

const martic2 = document.getElementsById("martic");
const asideHead = document.getElementsById("firstChild");
const sale1 = document.getElementById("bsell1");
const sale2 = document.getElementById("bsell2");
const sale3 = document.getElementById("bsell3");
const sale4 = document.getElementById("bsell4");
const sale1Wind = document.getElementById("windDet1");

// function createFormSale1(){
//     const formSale1 = document.createElement("form");
//     formSale1.textContent = "Product sale details";
//     formSale1.setAttribute("id", "formS");
//     formSale1.classList.add("formS");
//     sale1.appendChild(formSale1);
// }
// sale1.addEventListener("click", () => {
//     createFormSale1();
// });

// Changing color by mouseover the aside head

asideHead.addEventListener("mouseover", () => {
    asideHead.classList.add("highlight");
});
asideHead.addEventListener("mouseout", () => {
    asideHead.classList.remove("highlight");
});
// Changing color to Sale item 1
sale1.addEventListener("mouseover", () => {
    sale1.classList.add("highlight");
});
sale2.addEventListener("mouseout", () => {
    sale2.classList.remove("highlight");
});

// Open details window by click on the item
sale1.addEventListener("click", addFunction);

function addFunction(){
    sale1.classList.add("sale1Wind");
}